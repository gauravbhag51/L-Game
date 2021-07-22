const express = require("express");
const http = require("http");
const cors = require("cors");
const { ExpressPeerServer } = require("peer");

const app = express();
const server = require("http").Server(app);
const port = process.env.PORT || 5000;
const { v4: uuidv4 } = require("uuid");
const peerServer = ExpressPeerServer(server, {
  debug: true,
});

app.use("/peerjs", peerServer);
app.use(cors());
app.use(express.json());
const io = require("socket.io")(server, {
  cors: {
    origin: true,
  },
});
app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/get_rooms", (req, res) => {
  var rooms = Array.from(io.sockets.adapter.rooms.keys());
  // console.log(rooms);
  res.send(rooms);
});
app.get("/join", (req, res) => {
  res.send({ link: uuidv4().substring(0, 4) });
});

io.on("connection", (socket) => {
  // console.log("socket established");
  socket.on("join-room", (userData) => {
    // // console.log(userData);
    const { roomID, userID } = userData;
    socket.nickname = userID;
    socket.join(roomID);
    var users = [];
    var clients = io.sockets.adapter.rooms.get(roomID);
    // console.log(clients);
    for (const clientId of clients) {
      const clientSocket = io.sockets.sockets.get(clientId);
      users.push(clientSocket.nickname);
    }
    // console.log(roomID);
    socket.on("change-state", (state) => {
      socket.broadcast.to(roomID).emit("state-changed", state);
    });
    socket.on("move-complete", () => {
      socket.broadcast.to(roomID).emit("your-turn");
    });
    socket.on("GAME-END", () => {
      socket.broadcast.to(roomID).emit("YOU-WIN");
    });
    socket.broadcast.to(roomID).emit("new-user-connect", userData);
    socket.broadcast.to(roomID).emit("get-users", users);
    socket.on("disconnect", () => {
      socket.to(roomID).emit("user-disconnected", userID);
    });
  });
});

server
  .listen(port, () => {
    // console.log(`Listening on the port ${port}`);
  })
  .on("error", (e) => {
    // console.error(e);
  });
