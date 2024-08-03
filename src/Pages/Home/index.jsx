import React from 'react';
import "./style.css";

//components
import { Box, Typography } from '@mui/material';
import NavBar from '../../Components/NavBar';

//images
import brainImg from "../../Assets/Images/brainImg.png";
import HomeLine from "../../Assets/Images/Home_line.png";
import AiCardImg from "../../Assets/Images/aiCardImg.png";
import rightBtn from "../../Assets/Images/right (1) 2.png"
import leftBtn from "../../Assets/Images/left (1) 1.png";
import bnfIcon1 from "../../Assets/Images/bnfIcon1.png";
import bnfIcon2 from "../../Assets/Images/bnfIcon2.png";
import bnfIcon3 from "../../Assets/Images/bnfIcon3.png";
import bnfIcon4 from "../../Assets/Images/bnfIcon4.png";
import benefitCard from "../../Assets/Images/benefitsCard.png"

export default function Home({ activeNav, setActiveNav }) {

  const BenefitCard = ({ icon, title, summery }) => {
    return (
      <Box className="benefitCard">
        <img src={benefitCard} className='bnfBg' />
        <Box className="bnfCardLogoBox">
          <img src={icon} />
        </Box>
        <Typography>{title}</Typography>
        <span>{summery}</span>
      </Box>
    )
  }


  return (
    <>
      <Box className="homeContainer">
        <NavBar activeNav={activeNav} setActiveNav={setActiveNav} />
        <Box className="heroSection">
          <img src={brainImg} className='brainImg' />

          <Typography className="heroHeader1">Unleash Your Productivity Creativity Potential Business</Typography>
          <Typography className="heroHeader2">Unleash your creative potential</Typography>
          <Typography className="heroHeader3">with HaveLink</Typography>

          <Box className="HomelineBox">
            <Box className="HeroBtn">
              <Typography>Get Your Personalized Solution !</Typography>
            </Box>
            <img src={HomeLine} className='homeLineImg' />
          </Box>
        </Box>

        {/*ai section  */}

        <Box className="aiSection">
          <Typography className='sectionHeader'>AI Solutions</Typography>
          <Typography className='nSummeryText'>Videtics propose une suite logicielle qui facilite la surveillance des zones protégées, l'investigation à postériori et la prise de décision en utilisant les caméras IP existantes de votre parc vidéo.</Typography>

          <Box className="CAiModelBox">
            <Box className="aiCardImgBox">
              <img src={AiCardImg} />
            </Box>
            <Box className="aiTextB">
              <Typography className="aiCardHeader">Customizable AI Models</Typography>
              <Typography className='nSummeryText'>Videtics propose une suite logicielle qui facilite la surveillance des zones protégées, l'investigation à postériori et la prise de décision en utilisant les caméras IP existantes de votre parc vidéo.</Typography>
              <Box className="HeroBtn">
                <Typography>Get Your Personalized Solution !</Typography>
              </Box>
            </Box>

            <Box className="CaMBtnBox">
              <img src={leftBtn} />
              <img src={rightBtn} />
            </Box>

          </Box>
          <img src={HomeLine} className='homeLineImg' />

        </Box>


        {/* benefits section */}
        <Box className="benefitSection">
          <Typography className='sectionHeader'>Our Benefits</Typography>
          <Typography className='nSummeryText'>Videtics propose une suite logicielle qui facilite la surveillance des zones protégées, l'investigation à postériori et la prise de décision en utilisant les caméras IP existantes de votre parc vidéo.</Typography>

          <Box className="benefitCardBox">

            {BenefitCard({ icon: bnfIcon1, title: "Customizable AI Models", summery: "Our Gen AI tool can be customized to align with your industry-specific requirements, ensuring it delivers maximum value and efficiency" })}
            {BenefitCard({ icon: bnfIcon2, title: "Advanced Predictive Analytics", summery: "Leverage our AI's powerful predictive capabilities to anticipate market trends, optimize operations, and drive strategic decisions." })}
            {BenefitCard({ icon: bnfIcon3, title: "Expertise in AI Customization", summery: "Our team of AI experts specializes in creating customized solutions that align perfectly with your specific needs and goals." })}
            {BenefitCard({ icon: bnfIcon4, title: "Commitment to Security", summery: "We prioritize the security and privacy of your data, ensuring that our solutions comply with the highest standards and regulatory requirements." })}



          </Box>

        </Box>


      </Box>
    </>
  )
}
