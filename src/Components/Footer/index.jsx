import React from 'react'
import "./style.css"

//components
import { Box, Typography } from '@mui/material';

//images
import Clogo from "../../Assets/Images/Clogo.png";
import facebookIcon from "../../Assets/Images/facebook-logo.png";
import TwitterIcon from "../../Assets/Images/twitter.png";
import LinkdinIcon from "../../Assets/Images/linkdin.png";
import InstaIcon from "../../Assets/Images/instaIcon.png";
import G_mailIcom from "../../Assets/Images/G_mailIcon.png";
import footerBg from "../../Assets/Images/footerBg.png"
import footerIcon1 from "../../Assets/Images/FooterBIcon1.svg"
import footerIcon2 from "../../Assets/Images/FooterBIcon2.svg"
import footerIcon3 from "../../Assets/Images/FooterBIcon3.svg"
import footerIcon4 from "../../Assets/Images/FooterBIcon4.svg"

export default function Footer() {
  return (
    <>
      <Box className="footer">
        <img src={footerBg} className='footerBg' />
        <Box className="footerMainBox">
          <Box className="footerItemBox">
            <img src={Clogo} className='Fclogo' />
            <Typography my={3} className='footerNText'>
              Videtics propose une suite logicielle qui facilite la
              surveillance des zones protégées, l'investigation à
              postériori et la prise de décision.
            </Typography>
            <Box className="SmideaIconBox">
              <img src={facebookIcon} />
              <img src={TwitterIcon} />
              <img src={LinkdinIcon} />
              <img src={InstaIcon} />
            </Box>
          </Box>

          <Box className="footerItemBox">
            <Typography className='footerNText'>B-101, Tirupati Complex, Sai Dham, Saravali, Boisar – 401501</Typography>
            <Typography my={4} sx={{ textDecoration: "underline" }} className='footerNText'>havelink@gmail.com</Typography>
            <Typography className='footerNText'>+91 8850596802 <br /> +91 8291420806</Typography>
          </Box>

          <Box className="footerItemBox subscribeBox">
            <Typography className='subHeader'>SUBSCRIBE TO OUR NEWS LETTER</Typography>

            <Box className="subInnerBox">
              <Box className="inputBox">
                <input type="text" placeholder='Mail' />
                <img width={"13px"} src={G_mailIcom} />
              </Box>
              <Box className="HeroBtn">
                <Typography>SUBSCRIBE</Typography>
              </Box>
            </Box>
          </Box>

        </Box>
        <Box className="footerBottom1Box">
          <img src={footerIcon1} />
          <img src={footerIcon2} />
          <img src={footerIcon3} />
          <img src={footerIcon4} />
        </Box>
        <Box className="footerBottomBox">
          <Typography className='footerNText'>Copyright © 2024 . All rights reserved</Typography>
          <Typography className='footerNText'>Terms & Conditions    <span>|</span>    Privacy Policy    <span>|</span>    Cancellation and Refund Policy</Typography>
        </Box>
      </Box>
    </>
  )
}
