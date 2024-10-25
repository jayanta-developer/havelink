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
import linkedin from "../../Assets/Images/linkedin-letters.svg"
import addressIcon from "../../Assets/Images/icon-address.svg";
import phoneIcon from "../../Assets/Images/icon-phone.svg";
import emailIcon from "../../Assets/Images/icon-email.svg";
import mapImg from "../../Assets/Images/map.png";
import DropIcon from "../../Assets/Images/dropIcon.png"
//data
import { interestedList } from "../../Assets/Data"

export default function Contact({ activeNav, setActiveNav }) {
  const [interestDrop, setInterestDrop] = useState(false)
  const [interestDropVal, setInterestDropVal] = useState("For Size of the company")
  const [formValue, setFormValue] = useState();
  const [emailError, setEmailError] = useState('');

  const restrictedDomains = [
    'gmail.com',
    'yahoo.com',
    'outlook.com',
    'hotmail.com',
    'gmail.fr',
    // Add more public domains if needed
  ];

  const validateEmail = (email) => {
    const domain = email.split('@')[1];

    // Check if the domain is in the restricted list
    if (restrictedDomains.includes(domain)) {
      return false;
    }

    const companyEmailPattern = /^[a-zA-Z0-9._%+-]+@(?!gmail\.com|yahoo\.com|outlook\.com)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return companyEmailPattern.test(email);
  };

  const handelInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'email') {
      if (!validateEmail(value)) {
        setEmailError('Please enter a valid company email (e.g., name@company.com).');
      } else {
        setEmailError('');
      }
    }

    setFormValue({
      ...formValue,
      [name]: value
    });
  };


  console.log(formValue);

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
        {/* <img src={contactBanner} className="contactBanner" /> */}

        <Box className="contactMainSection">
          <Typography className="sectionHeader">We Are Here For You</Typography>
          <Typography className="nSummeryText">
            Unleash Your Productivity Creativity Potential Business
          </Typography>
        </Box>

        <Box className="contacSection">
          <Box className="contactTextBox">
            <Box className="contactIfoBox">
              <Box className="icon">
                <img src={linkedin} />
              </Box>
              <Typography variant="h4">LinkedIn</Typography>
              <Typography>
                <a href="https://www.linkedin.com/company/havelink/"></a>
                https://www.linkedin.com/company/<br />havelink/
              </Typography>
            </Box>
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
                  <input name="FirstName" type="text" placeholder="First Name" onChange={handelInputChange} />
                  <img src={userIcon} />
                </Box>
              </Box>

              <Box className="inputWl">
                <Typography>Last Name</Typography>
                <Box className="inputBox">
                  <input name="lastName" type="text" placeholder="Last Name" onChange={handelInputChange} />
                  <img src={userIcon} />
                </Box>
              </Box>
            </Box>

            <Box className="inputWl">
              <Typography>Company</Typography>
              <Box className="inputBox">
                <input name="company" type="text" placeholder="Company" onChange={handelInputChange} />
                <img src={textIcon} />
              </Box>
            </Box>

            <Box className="inputFBox">
              <Box className="inputWl">
                <Typography>Size of the Company</Typography>
                <Box className="inputBox left-20">
                  <input name="CompanySize" type="text" placeholder="Size of the Company" onChange={handelInputChange} />
                </Box>
              </Box>

              <Box className="inputWl">
                <Typography>Turnover of the company</Typography>
                <Box className="inputBox left-20">
                  <input name="TurnoverCompany" type="text" placeholder="Turnover of the company" onChange={handelInputChange} />
                </Box>
              </Box>
            </Box>

            <Box className="inputWl">
              <Typography>Email</Typography>
              <Box className="inputBox">
                <input name="email" type="text" placeholder="Mail" onChange={handelInputChange} />
                <img src={mailIcom} />
              </Box>
              {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
            </Box>
            <Box className="inputWl">
              <Typography>Interest in</Typography>
              <Box className="inputBox dropBox">
                <img className="dropIcon" src={DropIcon} onClick={() => setInterestDrop(!interestDrop)} />
                <span>{interestDropVal}</span>
                <div className="DropMainBox" style={{ display: interestDrop ? "flex" : "none" }}>
                  {
                    interestedList?.map((el, i) => (
                      <div key={i} className="DropItem" onClick={() => {
                        setInterestDrop(!interestDrop)
                        setInterestDropVal(el)
                      }}>
                        <p>{el}</p>
                      </div>
                    ))
                  }
                </div>
              </Box>
            </Box>

            <Box className="inputWl messageBox">
              <Typography>Message</Typography>
              <Box className="inputBox">
                <textarea name="message" onChange={handelInputChange} />
              </Box>
            </Box>

            <Box className="HeroBtn">
              <Typography>Submit now</Typography>
            </Box>
          </Box>
        </Box>

        {/* <Box className="mapSection">
          <img src={mapImg} />
        </Box> */}

        <Footer />
      </Box>
    </>
  );
}
