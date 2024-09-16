import React from "react";
import "./About.css";

function AboutPage() {
  return (
    <div id="about" className="aboutpage  flex flex-col justify-center  ">
      <p className="about text-5xl font-bold text-center  ">About Me</p>
      <div className="about-top flex gap-10 mt-3  ml-8">
        <div>
          <img
            className="second-img"
            style={{ height: "350px", width: "300px" }}
            src="./my-img.jpeg"
          />
        </div>
        <div className="about-right flex flex-col gap-5">
          <div>
            <p>I am an Full Stack Developer</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet.
            </p>
          </div>
          <div className=" flex about-skill gap-5 flex-col">
            <div className="skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "80%" }} />
            </div>
            <div className="skill">
              <p>JavaScript</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="skill">
              <p>Node Js</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="skill">
              <p>React Js</p>
              <hr style={{ width: "70%" }} />
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
          <p>Bacholar in Business</p>
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
