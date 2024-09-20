import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <img className="rounded-full" src="./my-img.jpeg" />
      <div className="hero-content flex flex-col gap-6">
        <h1 className="big text-5xl font-bold gap-5">
          <span>I'm Diksha Muktan,</span>full-stack <br />
          developer based in Nepal.
        </h1>

        <p className="hero-mid text-2xl">
          I am a full-stack developer from Hetauda, Nepal
        </p>

        <div className="flex gap-5">
          <Link to="/more-info" className="hero-connect rounded-full">
            Connect with me
          </Link>
          <h3 className="hero-resume">My resume</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
