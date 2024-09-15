import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar ">
      <div className="logo ">
        <i class="fa-brands fa-dropbox"></i>
        Diksha Muktan
      </div>
      <div className="nav-menu">
        <ul>
          <li>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            {/* <a href="">Skills</a> */}
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <Link to="more-info" className="detail">
          Connect With Me
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
