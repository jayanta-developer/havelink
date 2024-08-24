import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";

export default function App() {
  const [activeNav, setActiveNav] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home activeNav={activeNav} setActiveNav={setActiveNav} />}
        />
        <Route
          path="/about"
          element={<About activeNav={activeNav} setActiveNav={setActiveNav} />}
        />
        <Route
          path="/blog"
          element={<Blog activeNav={activeNav} setActiveNav={setActiveNav} />}
        />
      </Routes>
    </>
  );
}
