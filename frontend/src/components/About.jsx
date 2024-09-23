import React from "react";
import "./About.css";

function AboutPage() {
  return (
    <div id="about" className="aboutpage  flex flex-col justify-center  ">
      <p className="about text-5xl font-bold text-center  ">About Me</p>
      <div className="about-top flex  mt-3 ">
        <div className="about-left">
          <img
            className="second-img object-cover"
            // style={{ height: "350px", width: "300px" }}
            src="./my-img.jpeg"
          />
        </div>
        <div className="about-right flex flex-col gap-5">
          <div>
            <p className="text-2xl">I am a Full Stack Developer</p>
            <p>
              I have a strong command over both front-end and back-end
              technologies, allowing me to build complete and scalable
              applications.
            </p>
          </div>
          <div className=" flex about-skill flex-col">
            <div className="skill sm:gap-1 xl:gap-5">
              <p>HTML & CSS</p>
              <hr className="first" />
            </div>
            <div className="skill sm:gap-1 xl:gap-5">
              <p> React Js</p>
              <hr className="second" />
            </div>
            <div className="skill sm:gap-1 xl:gap-5">
              <p>Node Js</p>
              <hr className="third" />
            </div>
            <div className="skill sm:gap-1 xl:gap-5">
              <p>JavaScript</p>
              <hr className="forth" />
            </div>
          </div>
        </div>
      </div>
      <div className="skills">
        <div className="box">
          <i className="fa-solid fa-code"></i>
          <h1>Languages</h1>
          <p>
            HTML, CSS, Java Script,
            <br /> React JS, Node Js
          </p>
        </div>

        <div className="box">
          <i className="fa-solid fa-graduation-cap"></i>

          <h1>Educaton</h1>
          <p>Bachelor in Business</p>
        </div>

        <div className="box">
          <i className="fa-solid fa-briefcase"></i>
          <h1>Projects</h1>
          <p>Build more then 2 projects</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
