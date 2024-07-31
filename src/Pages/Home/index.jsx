import React from 'react';
import "./style.css";

//components
import { Box } from '@mui/material';
import NavBar from '../../Components/NavBar';

//images
import brainImg from "../../Assets/Images/brainImg.png"

export default function Home({ activeNav, setActiveNav }) {
  return (
    <>
      <Box className="homeContainer">
        <NavBar activeNav={activeNav} setActiveNav={setActiveNav} />
        <Box className="heroSection">
          <img src={brainImg} />
        </Box>


      </Box>
    </>
  )
}
