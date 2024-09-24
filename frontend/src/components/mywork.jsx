// import React from "react";
// import "./mywork.css";

// function Services() {
//   return (
//     <div id="projects" className="projects">
//       <div>
//         <h3 className="extra font-bold">What I Have Done</h3>
//         <br />
//         <p className="big text-center ">My Portfolio</p>
//       </div>
//       <div className="my_projects">
//         <div>
//           <img
//             className="project_one"
//             src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=800"
//           />
//           <p className="text-xl font-bold text-center p-2">Project ABC</p>
//         </div>
//         <div>
//           <img
//             className="project_one"
//             src="https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&w=800"
//           />
//           <p className="text-xl font-bold text-center p-2">Real time chat</p>
//         </div>
//         <div>
//           <img
//             className="project_one"
//             src="https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&w=800"
//           />
//           <p className="text-xl font-bold text-center p-2">To Do's</p>
//         </div>
//       </div>
//       {/* <div>
//         <h1>Tools i use</h1>
//       </div> */}
//     </div>
//   );
// }
// export default Services;

import React from "react";
import "./mywork.css";

function Services() {
  return (
    <div id="projects" className="projects px-4 md:px-8 lg:px-16 py-8">
      <div className="text-center mb-8">
        <h3 className="extra font-bold text-3xl md:text-5xl">
          What I Have Done
        </h3>
        <br />
        <p className="big text-center text-xl md:text-3xl">My Portfolio</p>
      </div>

      <div className="my_projects  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <img
            className="project_one w-full h-80   object-cover rounded-lg"
            src="https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Project ABC"
          />
          <p className="text-xl font-bold text-center p-2">Project ABC</p>
        </div>
        <div>
          <img
            className="project_one w-full h-80 object-cover rounded-lg"
            src="https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Real time chat"
          />
          <p className="text-xl font-bold text-center p-2">Real time chat</p>
        </div>
        <div>
          <img
            className="project_one w-full h-80 object-cover rounded-lg"
            src="https://images.pexels.com/photos/1114690/pexels-photo-1114690.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="To Do's"
          />
          <p className="text-xl font-bold text-center p-2">To Do's</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
