import React, { useState } from "react";
import "./style.css";
import axios from 'axios';

//components
import { Box, Typography } from "@mui/material";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";

//images
import contactBanner from "../../Assets/Images/contactbanner.png";
import userIcon from "../../Assets/Images/userIcon.png";
import textIcon from "../../Assets/Images/textIcon.png";
import mailIcom from "../../Assets/Images/mailIcon.png";
import addressIcon from "../../Assets/Images/icon-address.svg";
import phoneIcon from "../../Assets/Images/icon-phone.svg";
import emailIcon from "../../Assets/Images/icon-email.svg";
import mapImg from "../../Assets/Images/map.png";
import DropIcon from "../../Assets/Images/dropIcon.png"

export default function Contact({ activeNav, setActiveNav }) {
  const [interestDrop, setInterestDrop] = useState(false)
  const [interestDropVal, setInterestDropVal] = useState("For Size of the company")

  const [responseMessage, setResponseMessage] = useState('');
  const [formData, setFormData] = useState({
    to: '',
    subject: '',
    text: '',
    html: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3001/send-email', formData);
      setResponseMessage(response.data.message);
    } catch (error) {
      setResponseMessage('Failed to send email.');
      console.error('Error sending email:', error);
    }
  };

  return (
    <>
      <Box className="contactPage">
        <NavBar activeNav={activeNav} setActiveNav={setActiveNav} />
        <img src={contactBanner} className="contactBanner" />

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
              <Box className="inputBox dropBox">
                {/* <select name="" id="">
                  <option className="interestDrop" value="">For Size of the company</option>
                  <option className="interestDrop" value="">Turnover and intrest in</option>
                </select> */}
                <img className="dropIcon" src={DropIcon} onClick={() => setInterestDrop(!interestDrop)} />
                <Typography>{interestDropVal}</Typography>

                <div className="DropMainBox" style={{ display: interestDrop ? "flex" : "none" }}>
                  <div className="DropItem" onClick={() => {
                    setInterestDrop(!interestDrop)
                    setInterestDropVal("For Size of the company")
                  }}>
                    <p>For Size of the company</p>
                  </div>
                  <div className="DropItem" onClick={() => {
                    setInterestDrop(!interestDrop)
                    setInterestDropVal("Turnover and intrest in")
                  }}>
                    <p>Turnover and intrest in</p>
                  </div>
                </div>

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
