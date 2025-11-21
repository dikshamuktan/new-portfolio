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
    <div className="fixed h-16 w-full z-20 bg-gray-700 flex justify-center items-center ">
      {/* <div className="logo text-2xl">Diksha Muktan</div> */}
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
        {/* <Link to="more-info" className="nav-connect">
          Connect With Me
        </Link> */}
      </div>
    </div>
  );
}

export default Navbar;
