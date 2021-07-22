import React,{useState,useRef} from 'react'
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "./Home.css"
import {Link} from "react-router-dom"; 
import {useStateValue} from "../StateProvider"
import { auth } from "../firebase";

function Home() {
    const [join,setJoin]=useState(false)
    const roomID = useRef(null);
    const history = useHistory();
    const[{user},dispatch]=useStateValue();
    const handleCreate=()=>{
      if(user)
      {
        Axios.get(`https://the-l-game-1.herokuapp.com/join`).then(res => {
            history?.push(`/join?id=${res.data.link}`);
        })
      }
      else
      history.push("/login");
    }

    const userSignOut = () => {
      auth.signOut();
    };


    const handleJoin=()=>{
      if(user)
      {
        Axios.get(`https://the-l-game-1.herokuapp.com/get_rooms`).then(res => {
            //console.log(res.data)
            //console.log(res.data,roomID.current.value)
            if(res.data.includes(roomID.current.value))
            {
                history?.push(`/join?id=${roomID.current.value}`);
            }
            else
            {
                alert("Enter A valid room ID")
            }
        })
      }
      else
      history.push("/login");
    }
    return (

<div className="home">
      <div className="home_left">
        <span>
          <p>Join</p> the smartest boardgame available in the <p>world</p>
        </span>
        <h2>No download necessary - play directly from your web browser</h2>
        <h2>With your friends and thousands of players from the whole world</h2>
          <div className="home_button">
            <button className="btn" onClick={handleCreate} type="">Create Room</button>
            <button className="btn" onClick={()=>{setJoin(!join)}} type="">Join Room</button>
            {join && <><input className="room_input" ref={roomID} type="text" placeholder="Room Id"/> <button className="btn" onClick={handleJoin}>JOIN</button></>}
          </div>
      </div>
      <div className="right">
      <Link to={!user && "login"}>
            <h2>
              {"Hello " + (user?.displayName || user?.email || "Guest")}
            </h2>
            {user ? (
              <h2 onClick={userSignOut}>
                Sign Out
              </h2>
            ) : (
              <h2>Sign In</h2>
            )}
        </Link>
        <Link to="/tutorial">
          <h2>Tutorial</h2>
        </Link>
      </div>
    </div>
        // 
    )
}

export default Home
