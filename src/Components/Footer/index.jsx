import React from 'react'
import "./style.css"

//components
import { Box, Typography } from '@mui/material';

//images
import Clogo from "../../Assets/Images/Clogo.png";
import footerClog1 from "../../Assets/Images/footerColo1.png";
import footerClog2 from "../../Assets/Images/footerColo2.png";
import footerClog3 from "../../Assets/Images/footerColo3.png";
import footerClog4 from "../../Assets/Images/footerColo4.png";
import facebookIcon from "../../Assets/Images/facebook-logo.png";
import TwitterIcon from "../../Assets/Images/twitter.png";
import LinkdinIcon from "../../Assets/Images/linkdin.png";
import InstaIcon from "../../Assets/Images/instaIcon.png";
import G_mailIcom from "../../Assets/Images/G_mailIcon.png";

export default function Footer() {
  return (
    <>
      <Box className="footer">
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
            <Typography className='subHeader'>SUBSCRIBE TO OUR NEWS LETTER :</Typography>

            <Box>
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
          <img src={footerClog1} />
          <img src={footerClog2} />
          <img src={footerClog3} />
          <img src={footerClog4} />
        </Box>
        <Box className="footerBottomBox">
          <Typography className='footerNText'>Copyright © 2024 . All rights reserved</Typography>
          <Typography className='footerNText'>Terms & Conditions    <span>|</span>    Privacy-Policy    <span>|</span>    Cancellation and Refund Policy</Typography>
        </Box>
      </Box>
    </>
  )
}
