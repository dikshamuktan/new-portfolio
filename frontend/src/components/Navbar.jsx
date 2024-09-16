import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useRef } from "react";
function Navbar() {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };
  return (
    <div className="navbar ">
      <div className="logo ">
        <i className="fa-brands fa-dropbox"></i>
        Diksha Muktan
      </div>
      <div onClick={openMenu}>
        <i className="nav-open fa-solid fa-bars"></i>
      </div>

      <ul ref={menuRef} className="nav-menu">
        <i onClick={closeMenu} className="nav-close fa-solid fa-xmark"></i>
        <li>
          <Link to="home">Home</Link>
          <Link to="about">About</Link>
          <Link to="projects">Projects</Link>
          <Link to="contact">Contact</Link>
        </li>
      </ul>

      <div>
        <Link to="more-info" className="nav-connect">
          Connect With Me
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
