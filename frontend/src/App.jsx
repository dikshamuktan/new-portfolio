import { useState } from "react";
import Navbar from "./components/Navbar";
import MoreInfo from "./components/moreinfo";
import HomePage from "../pages/homepage";
import AboutPage from "./components/About";
import Services from "./components/mywork";
import Contact from "./components/Contact";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="projects" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/more-info" element={<MoreInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
