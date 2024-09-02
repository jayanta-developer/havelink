import React from "react";
import "./style.css";

//components
import { Box, Typography } from "@mui/material";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";

//images
import userIcon from "../../Assets/Images/userIcon.png";
import textIcon from "../../Assets/Images/textIcon.png";
import mailIcom from "../../Assets/Images/mailIcon.png";
import addressIcon from "../../Assets/Images/icon-address.svg";
import phoneIcon from "../../Assets/Images/icon-phone.svg";
import emailIcon from "../../Assets/Images/icon-email.svg";
import mapImg from "../../Assets/Images/map.png";

export default function Contact({ activeNav, setActiveNav }) {
  return (
    <>
      <Box className="contactPage">
        <NavBar activeNav={activeNav} setActiveNav={setActiveNav} />

        <Box className="contactMainSection">
          <Typography className="sectionHeader">We're Here to Help</Typography>
          <Typography className="nSummeryText">
            Unleash Your Productivity Creativity Potential Business
          </Typography>
        </Box>

        <Box className="contacSection">
          <Box className="contactTextBox">
            <Box className="contactIfoBox">
              <Box className="icon">
                <img src={addressIcon} />
              </Box>
              <Typography variant="h4">Office Addresses</Typography>
              <Typography>
                Yu Hotel, Survey No 179/5, Duglo Madda, Candolim, Goa 403515
              </Typography>
            </Box>
            <Box className="contactIfoBox">
              <Box className="icon">
                <img src={phoneIcon} />
              </Box>
              <Typography variant="h4">Office Addresses</Typography>
              <Typography>+62 361 750158</Typography>
            </Box>
            <Box className="contactIfoBox">
              <Box className="icon">
                <img src={emailIcon} />
              </Box>
              <Typography variant="h4">Office Addresses</Typography>
              <Typography>info@havelink.com</Typography>
            </Box>
          </Box>

          <Box className="contactInputBox">
            <Box className="inputFBox">
              <Box className="inputWl">
                <Typography>First Name</Typography>
                <Box className="inputBox">
                  <input type="text" placeholder="First Name" />
                  <img src={userIcon} />
                </Box>
              </Box>

              <Box className="inputWl">
                <Typography>Last Name</Typography>
                <Box className="inputBox">
                  <input type="text" placeholder="Last Name" />
                  <img src={userIcon} />
                </Box>
              </Box>
            </Box>

            <Box className="inputWl">
              <Typography>Company</Typography>
              <Box className="inputBox">
                <input type="text" placeholder="Company" />
                <img src={textIcon} />
              </Box>
            </Box>

            <Box className="inputFBox">
              <Box className="inputWl">
                <Typography>Size of the Company</Typography>
                <Box className="inputBox left-20">
                  <input type="text" placeholder="Size of the Company" />
                </Box>
              </Box>

              <Box className="inputWl">
                <Typography>Turnover of the company</Typography>
                <Box className="inputBox left-20">
                  <input type="text" placeholder="Turnover of the company" />
                </Box>
              </Box>
            </Box>

            <Box className="inputWl">
              <Typography>Email</Typography>
              <Box className="inputBox">
                <input type="text" placeholder="Mail" />
                <img src={mailIcom} />
              </Box>
            </Box>

            <Box className="inputWl">
              <Typography>Interest in</Typography>
              <Box className="inputBox">
                <select name="" id="">
                  <option value="">Developement</option>
                </select>
              </Box>
            </Box>

            <Box className="inputWl messageBox">
              <Typography>Message</Typography>
              <Box className="inputBox">
                <textarea />
              </Box>
            </Box>

            <Box className="HeroBtn">
              <Typography>Submit now</Typography>
            </Box>
          </Box>
        </Box>

        <Box className="mapSection">
          <img src={mapImg} />
        </Box>

        <Footer />
      </Box>
    </>
  );
}
