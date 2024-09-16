import React from "react";
import "./mywork.css";

function Services() {
  return (
    <div id="projects" className="projects">
      <div>
        <h3 className="extra text-5xl font-bold">What I Have Done</h3>
        <br />
        <p className="big text-center text-3xl">My Portfolio</p>
      </div>
      <div className="my_projects">
        <div>
          <img
            className="project_one"
            src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <p className="text-xl font-bold text-center p-2">Project ABC</p>
        </div>
        <div>
          <img
            className="project_one"
            src="https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <p className="text-xl font-bold text-center p-2">Real time chat</p>
        </div>
        <div>
          <img
            className="project_one"
            src="https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&w=800"
          />
          <p className="text-xl font-bold text-center p-2">To Do's</p>
        </div>
      </div>
      <div>
        <h1>Tools i use</h1>
      </div>
    </div>
  );
}
export default Services;
