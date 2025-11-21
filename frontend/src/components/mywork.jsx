import React from "react";
import "./mywork.css";

function Services() {
  return (
    <div
      id="projects"
      className="bg-purple-400 w-full h-[600px] justify-center flex "
    >
      <div className="container flex flex-col px-20 mt-16">
        <div className="text-5xl flex-col gap-5 flex tracking-wider font-extrabold">
          <h1>TOOLS AND</h1>

          <p className="">SYSTEM</p>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-2 items-center">
            <img
              className="h-[80px] w-[80px] rounded-full object-cover mt-12"
              src="./react.png"
              alt="React"
            />
            <p className="text-2xl">REACT</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img
              className="h-[80px] w-[80px] rounded-full object-cover mt-12"
              src="./html.png"
              alt="Html"
            />
            <p className="text-2xl">HTML</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img
              className="h-[80px] w-[80px] rounded-full object-cover mt-12"
              src="./css.png"
              alt="Css"
            />
            <p className="text-2xl">CSS</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img
              className="h-[80px] w-[80px] rounded-full object-cover mt-12"
              src="./js.png"
              alt="Js"
            />
            <p className="text-2xl">JS</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img
              className="h-[80px] w-[80px] rounded-full object-cover mt-12"
              src="./node.png"
              alt="Diksha"
            />
            <p className="text-2xl">NODE</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img
              className="h-[80px] w-[80px] rounded-full object-cover mt-12"
              src="./mongo.png"
              alt="Mongo db"
            />
            <p className="text-2xl">Mongo db</p>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <img
              className="h-[80px] w-[80px] rounded-full object-cover mt-12"
              src="./github.png"
              alt="Github"
            />
            <p className="text-2xl">Git hub</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
