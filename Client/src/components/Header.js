import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://cf.geekdo-images.com/WgvYQlEgbuEoOFxg4GGbMA__opengraph_left/img/WjeGwl-Naj4YyQuOZfQC3-cp_Ck=/fit-in/445x445/filters:strip_icc()/pic5630012.jpg"
        alt="logo"
      />
      <Link to="/" className="header_link">
        <h1>L-game</h1>
      </Link>

      <div className="header_option">
        <ul>
          <Link to="/" className="header_link">
            <li>Home</li>
          </Link>
          <Link to="/game" className="header_link">
            <li>Play Game</li>
          </Link>
          <Link to="/guide" className="header_link">
            <li>How to Play</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;