import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero bg-white w-full h-screen">
      <div className="relative container mx-auto flex h-full">
        {/* LEFT TEXT SECTION */}
        <div className="w-1/2 flex flex-col justify-center items-center overflow-hidden text-gray-700 ">
          <div className="absolute left-16 z-10">
            <h1 className="text-[70px] font-bold">Hi I'm</h1>
            <p className="text-[80px] font-bold tracking-wider">
              DIKSHA MUKTAN
            </p>
            <p className="text-2xl  font-medium tracking-wider">
              FULL STACK DEVELOPER
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE OR BOX SECTION */}
        <div className="w-1/2 relative flex items-end  justify-center bg-purple-400">
          {/* <div>
            <img src="./flower.jpeg" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
