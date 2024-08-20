import React, { useState, useEffect } from 'react';
import "./style.css"
import { useNavigate } from "react-router-dom";


import { Box, Typography } from '@mui/material';

//images
import Clogo from "../../Assets/Images/Clogo.png";
import MenuIcon from "../../Assets/Images/menuIcon.png"
import backIcon from "../../Assets/Images/backIcon.png";
//component


export default function NavBar({ activeNav, setActiveNav }) {
  const navigate = useNavigate();
  const [sideMenu, setSideMenu] = useState(false);
  const [menuVisibility, setMenuVisibility] = useState(true)


  useEffect(() => {
    if (sideMenu) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        setMenuVisibility(true)
      }, 200)
    } else {
      document.body.style.overflow = '';
      setTimeout(() => {
        setMenuVisibility(false)
      }, 300)
    }
  }, [sideMenu])


  return (
    <>
      <Box className="NavBar">
        <Box className="cLogoBox"><img src={Clogo} /></Box>
        <img src={MenuIcon} className='menuIcon' onClick={() => setSideMenu(!sideMenu)} />


        {/* side menu icon */}
        <Box className={menuVisibility ? "sideMenu" : "sideMenu subItemDeactivate"} sx={{ width: sideMenu ? "100%" : "0px" }}>
          <img src={backIcon} className='backIcon' onClick={() => setSideMenu(false)} />

          <Box className={activeNav === 0 ? "navItem navItemActive" : "navItem"} onClick={() => {
            setActiveNav(0)
            navigate("/")
            setSideMenu(false)
          }}>
            <Typography>Home</Typography>
          </Box>
          <Box className={activeNav === 1 ? "navItem navItemActive" : "navItem"} onClick={() => setActiveNav(1)}>
            <Typography>Solutions</Typography>
          </Box>
          <Box className={activeNav === 2 ? "navItem navItemActive" : "navItem"} onClick={() => {
            setSideMenu(false)
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
