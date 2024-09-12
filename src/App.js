import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "./Pages/Home";
import Solutions from "./Pages/Solutions";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetails";
import Contact from "./Pages/Contact";

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
          path="/solutions"
          element={
            <Solutions activeNav={activeNav} setActiveNav={setActiveNav} />
          }
        />
        <Route
          path="/about"
          element={<About activeNav={activeNav} setActiveNav={setActiveNav} />}
        />
        <Route
          path="/blog"
          element={<Blog activeNav={activeNav} setActiveNav={setActiveNav} />}
        />
        <Route
          path="/blog-details"
          element={
            <BlogDetail activeNav={activeNav} setActiveNav={setActiveNav} />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact activeNav={activeNav} setActiveNav={setActiveNav} />
          }
        />
      </Routes>
    </>
  );
}
