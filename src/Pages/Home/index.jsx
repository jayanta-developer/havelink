import React from 'react';
import "./style.css";

//components
import { Box, Typography } from '@mui/material';
import NavBar from '../../Components/NavBar';

//images
import brainImg from "../../Assets/Images/brainImg.png";
import HomeLine from "../../Assets/Images/Home_line.png"

export default function Home({ activeNav, setActiveNav }) {
  return (
    <>
      <Box className="homeContainer">
        <NavBar activeNav={activeNav} setActiveNav={setActiveNav} />
        <Box className="heroSection">
          <img src={brainImg} className='brainImg' />

          <Typography className="heroHeader1">Unleash Your Productivity Creativity Potential Business</Typography>
          <Typography className="heroHeader2">Unleash your creative potential</Typography>
          <Typography className="heroHeader3">with HaveLink</Typography>

          <Box className="HeroBtn">
            <Typography>Get Your Personalized Solution !</Typography>
            <img src={HomeLine} />
          </Box>
        </Box>


      </Box>
    </>
  )
}
