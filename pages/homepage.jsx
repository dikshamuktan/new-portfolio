import React from "react";

import Hero from "../src/components/Hero";
import AboutPage from "../src/components/About";
import Services from "../src/components/mywork";
import Contact from "../src/components/Contact";

function Home() {
  return (
    <div>
      <Hero />
      <AboutPage />
      <Services />
      <Contact />
    </div>
  );
}
export default Home;
