import React, { useEffect } from "react";
import logo from "../assests/logo.png";
import "./Navbar.css";
import { animateScroll as scroll } from "react-scroll";
import Authentication from "./Authentication.jsx";
import { NavLink } from "react-router-dom";

function Navbar() {
  function about() {
    scroll.scrollTo(710);
  }
  return (
    <div className="header">
      <div className="header-left">
        <img src={logo}></img>
        <h1>BlinkTalk</h1>
      </div>
      <div className="header-right">
        <ul>
          <li onClick={about}>About us</li>
          <NavLink className="navlink" to="/authentication">
            <li>Login</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
