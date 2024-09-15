import { useState } from "react";
import Navbar from "./components/navbar";
import MoreInfo from "./components/moreinfo";
import HomePage from "../pages/homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/more-info" element={<MoreInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
