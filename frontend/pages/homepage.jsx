import React from "react";

import Hero from "../src/components/Hero";
import AboutPage from "../src/components/About";
import Services from "../src/components/mywork";
import Contact from "../src/components/Contact";
import Projects from "../src/components/projects";

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutPage />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}
export default Home;
