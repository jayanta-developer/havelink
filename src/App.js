import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//pages
import Home from "./Pages/Home";

export default function App() {
  const [activeNav, setActiveNav] = useState(0);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home activeNav={activeNav} setActiveNav={setActiveNav} />}
        />
      </Routes>
    </>
  );
}
