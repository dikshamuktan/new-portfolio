import React from "react";
import "./mywork.css";

function Services() {
  const TechItem = ({ src, label }) => {
    return (
      <div className="group flex flex-col items-center min-w-[120px] h-[150px] ">
        <div className="h-[80px] w-[80px] flex items-center justify-center">
          <img
            className="h-full w-full rounded-full object-cover"
            src={src}
            alt={label}
          />
        </div>

        <p className="text-xl text-gray-700">{label}</p>
      </div>
    );
  };
  const TechItem2 = ({ src, label }) => {
    return (
      <div
        aria-hidden
        className="group flex flex-col items-center min-w-[120px] h-[150px] "
      >
        <div className="h-[80px] w-[80px] flex items-center justify-center">
          <img
            className="h-full w-full rounded-full object-cover"
            src={src}
            alt={label}
          />
        </div>

        <p className="text-xl text-gray-700">{label}</p>
      </div>
    );
  };
  const techData = [
    { src: "./react.png", label: "React" },
    { src: "./html.png", label: "HTML" },
    { src: "./css.png", label: "CSS" },
    { src: "./js.png", label: "JS" },
    { src: "./node.png", label: "Node" },
    { src: "./mongo.png", label: "Mongo DB" },
    { src: "./github.png", label: "GitHub" },
    { src: "./nextjs.svg", label: "Next js" },
    { src: "./figma.png", label: "figma" },
  ];
  const techData2 = [
    { src: "./react.png", label: "React" },
    { src: "./html.png", label: "HTML" },
    { src: "./css.png", label: "CSS" },
    { src: "./js.png", label: "JS" },
    { src: "./node.png", label: "Node" },
    { src: "./mongo.png", label: "Mongo DB" },
    { src: "./github.png", label: "GitHub" },
  ];
  return (
    <div
      id="projects"
      className="bg-purple-300 w-full h-[500px] justify-center flex  "
    >
      <div className="container flex flex-col px-20 mt-20 gap-6">
        <div className="text-[50px] text-gray-700 flex-col gap-5 flex tracking-wider font-extrabold">
          <h1>
            T<span className="text-white">OO</span>LS AND <br /> SY
            <span className="text-white">S</span>TE
            <span className="text-white">M</span>
          </h1>
        </div>

        <div className="scrollbar-hide w-full overflow-x-auto flex mt-4 gap-5">
          {techData.map((item, index) => (
            <TechItem key={index} src={item.src} label={item.label} />
          ))}
          {techData2.map((item, index) => (
            <TechItem2 key={index} src={item.src} label={item.label} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
