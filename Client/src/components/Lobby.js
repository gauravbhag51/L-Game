import React from "react";
import "./Lobby.css";
import Avatar from "@material-ui/core/Avatar";
import {useStateValue} from "../StateProvider";
function Lobby() {
  const [{win,lost,played,win_perc},dispatch]=useStateValue();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
    const roomID=urlParams.get("id");
  return (
    <div className="room">
        <Avatar className="avatar"/>
        <div className="stats">
          <div >
            <h1>Games Played</h1>
            <h2>{played}</h2>
          </div>
          <div>
            <h1>Games Won</h1>
            <h2>{win}</h2>
          </div>
          <div>
            <h1>Games Lost</h1>
            <h2>{lost}</h2>
          </div>
          <div>
            <h1>Win Percentage</h1>
            <h2>{win_perc}</h2>
          </div>
      </div>
  <h2>Your Room ID is {roomID}</h2>
    </div>
  );
}

export default Lobby;
