import React from "react";
import "./About.css";

function AboutPage() {
  return (
    <div id="about" className="w-full h-[100vh] bg-gray-700">
      <div className="relative container mx-auto flex h-[780px] px-20 gap-6">
        <div className="flex flex-col mt-11 gap-7 w-1/3">
          <div className="uniq text-4xl gap-4 tracking-widest font-extrabold flex flex-col">
            {/* <span>
              P <span className="text-purple-400">O</span> R T
            </span>
            <span>
              <span className="text-purple-400">F</span> O L{" "}
              <span className="text-purple-400">I O</span>
            </span> */}
            <span>P O R T</span>
            <span>F O L I O</span>
          </div>
          <img
            className="h-[400px] object-cover mt-12"
            src="./me.png"
            alt="Diksha"
          />
        </div>
        <div className="flex w-2/3 flex-col mt-20  ms-16 gap-2">
          <h1 className="text-[80px] font-bold tracking-wider">
            AB<span className="text-purple-300">O</span>UT M
            <span className="text-purple-300">E</span>
          </h1>

          <div className="flex flex-col gap-6 tracking-wider ">
            <p className="text-xl">
              Hi,i'm Diksha Muktan a passionate Full Stack Developer who loves
              turning ideas into real, scalable digital products. With a strong
              understanding of both front-end and back-end development, I enjoy
              building applications that are fast, user-friendly, and visually
              appealing. I work confidently with modern JavaScript frameworks,
              databases, APIs, and UI technologies to create smooth,
              high-performance experiences.
              {/* I enjoy solving complex problems,
              optimizing functionality, and writing clean, maintainable code. */}
            </p>
            <p className="text-xl">
              I’m always learning new tools, experimenting with better
              solutions, and improving my skills to stay aligned with modern
              tech trends.
            </p>
            <p className="text-2xl font-bold text-purple-300">
              Lets connect and create something awesome!
            </p>
          </div>
          <div className="mt-2">
            {" "}
            <button className="bg-purple-300 p-2 text-white rounded-md text-2xl font-semibold tracking-wider">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
