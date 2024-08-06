import React from 'react';
import "./style.css"

//components
import { Box, Typography } from '@mui/material';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { BenefitCard } from "../../Components/Util";

//images
import bnfIcon1 from "../../Assets/Images/bnfIcon1.png";
import bnfIcon2 from "../../Assets/Images/bnfIcon2.png";
import bnfIcon3 from "../../Assets/Images/bnfIcon3.png";
import bnfIcon4 from "../../Assets/Images/bnfIcon4.png";




export default function About({ activeNav, setActiveNav }) {
  setActiveNav(2)
  return (
    <>
      <Box className="aboutPage">
        <NavBar activeNav={activeNav} setActiveNav={setActiveNav} />


        {/* benefits section */}
        <Box className="benefitSection">
          <Typography className='sectionHeader'>Values</Typography>
          <Box className="benefitCardBox">
            {BenefitCard({ icon: bnfIcon1, title: "Customizable AI Models", summery: "Our Gen AI tool can be customized to align with your industry-specific requirements, ensuring it delivers maximum value and efficiency" })}
            {BenefitCard({ icon: bnfIcon2, title: "Advanced Predictive Analytics", summery: "Leverage our AI's powerful predictive capabilities to anticipate market trends, optimize operations, and drive strategic decisions." })}
            {BenefitCard({ icon: bnfIcon3, title: "Expertise in AI Customization", summery: "Our team of AI experts specializes in creating customized solutions that align perfectly with your specific needs and goals." })}
            {BenefitCard({ icon: bnfIcon4, title: "Commitment to Security", summery: "We prioritize the security and privacy of your data, ensuring that our solutions comply with the highest standards and regulatory requirements." })}
          </Box>
        </Box>

        <Footer />
      </Box>
    </>
  )
}
