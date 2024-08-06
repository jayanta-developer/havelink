import React, { useState } from 'react';
import "./style.css"
import { useNavigate } from "react-router-dom";


import { Box, Typography } from '@mui/material';

//images
import Clogo from "../../Assets/Images/Clogo.png";


//component


export default function NavBar({ activeNav, setActiveNav }) {
  const navigate = useNavigate();

  return (
    <>
      <Box className="NavBar">
        <Box className="cLogoBox"><img src={Clogo} /></Box>

        <Box className="NavItemsBox">
          <Box className={activeNav === 0 ? "navItem navItemActive" : "navItem"} onClick={() => {
            setActiveNav(0)
            navigate("/")
          }}>
            <Typography>Home</Typography>
          </Box>
          <Box className={activeNav === 1 ? "navItem navItemActive" : "navItem"} onClick={() => setActiveNav(1)}>
            <Typography>Solutions</Typography>
          </Box>
          <Box className={activeNav === 2 ? "navItem navItemActive" : "navItem"} onClick={() => {
            setActiveNav(2)
            navigate("/about")

          }}>
            <Typography>About Us</Typography>
          </Box>
          <Box className={activeNav === 3 ? "navItem navItemActive" : "navItem"} onClick={() => setActiveNav(3)}>
            <Typography>Blog</Typography>
          </Box>
          <Box className={activeNav === 4 ? "navItem navItemActive" : "navItem"} onClick={() => setActiveNav(4)}>
            <Typography>Contact Us</Typography>
          </Box>
        </Box>


      </Box>
    </>
  )
}
