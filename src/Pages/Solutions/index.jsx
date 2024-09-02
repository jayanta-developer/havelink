import React from "react";
import "./style.css";

//components
import { Box, Typography } from "@mui/material";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";

//images

export default function Solutions({ activeNav, setActiveNav }) {
  return (
    <>
      <Box className="solutionsPage">
        <NavBar activeNav={activeNav} setActiveNav={setActiveNav} />

        <Footer />
      </Box>
    </>
  );
}
