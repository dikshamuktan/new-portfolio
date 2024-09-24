import React from "react";
import "./About.css";

function AboutPage() {
  return (
    <div
      id="about"
      className="aboutpage  flex flex-col justify-center items-center px-4 md:px-8 lg:px-16"
    >
      <p className="about text-5xl font-bold text-center mb-8">About Me</p>

      <div className="about-top md:ml-32 lg:ml-28 flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-20 mt-3 w-full max-w-5xl">
        <div className="about-left flex justify-center md:justify-start">
          <img
            className="object-cover rounded-md w-64 h-64 md:w-72 md:h-80"
            src="./my-img.jpeg"
            alt="Profile"
          />
        </div>

        <div className="about-rightflex flex-col gap-5 md:w-1/2">
          <div>
            <p className="text-2xl font-bold">I am a Full Stack Developer</p>
            <p className="text-base md:text-lg">
              I have a strong command over both front-end and back-end
              technologies, allowing me to build complete and scalable
              applications.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="skill flex items-center gap-3">
              <p>HTML & CSS</p>
              <hr className="first" />
            </div>
            <div className="skill flex items-center gap-3">
              <p>React Js</p>
              <hr className="second" />
            </div>
            <div className="skill flex items-center gap-3">
              <p>Node Js</p>
              <hr className="third" />
            </div>
            <div className="skill flex items-center gap-3">
              <p>JavaScript</p>
              <hr className="forth" />
            </div>
          </div>
        </div>
      </div>

      <div className="skills grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 w-full max-w-5xl">
        <div className="box text-center p-5  rounded-md">
          <i className="fa-solid fa-code text-3xl mb-3"></i>
          <h1 className="font-bold text-lg">Languages</h1>
          <p>HTML, CSS, JavaScript, React JS, Node JS</p>
        </div>

        <div className="box text-center p-5  rounded-md">
          <i className="fa-solid fa-graduation-cap text-3xl mb-3"></i>
          <h1 className="font-bold text-lg">Education</h1>
          <p>Bachelor in Business</p>
        </div>

        <div className="box text-center p-5  rounded-md">
          <i className="fa-solid fa-briefcase text-3xl mb-3"></i>
          <h1 className="font-bold text-lg">Projects</h1>
          <p>Built more than 2 projects</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
