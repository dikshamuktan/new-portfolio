import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero bg-yellow-50 w-full h-screen">
      <div className="relative container mx-auto flex h-full">
        {/* LEFT TEXT SECTION */}
        <div className="w-1/2 flex flex-col justify-center items-center overflow-hidden text-gray-700 ">
          <div className="absolute left-16 z-10">
            <h1 className="text-[70px] font-bold">Hi I'm</h1>
            <p className="text-[80px] font-bold tracking-wider">
              DIKSHA MUK<span className="text-white">TAN</span>
            </p>
            <p className="text-2xl  font-medium tracking-wider">
              FULL STACK DEVELOPER
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE OR BOX SECTION */}
        <div className="w-1/2 relative flex items-end bg-purple-400 justify-center">
          {/* <img
            className="absolute right-20 rounded- bottom-[230px] w-full h-full object-cover"
            src="./diksha.jpeg"
            alt="Diksha"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
