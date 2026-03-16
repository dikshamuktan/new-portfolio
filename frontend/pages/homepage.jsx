import React from "react";

import Hero from "../src/components/Hero";
import AboutPage from "../src/components/About";
import Services from "../src/components/mywork";
import Contact from "../src/components/Contact";
import Projects from "../src/components/projects";

function Home() {
  return (
    <div className="overflow-hidden">
      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutPage />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section>
        <Services />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
export default Home;
