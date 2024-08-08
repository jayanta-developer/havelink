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
import pageBg1 from "../../Assets/Images/aboutPageBG1.png"
import teamImg1 from "../../Assets/Images/teamImg1.png";
import teamImg2 from "../../Assets/Images/teamImag2.png";
import teamImg3 from "../../Assets/Images/teamImg3.png";
import teamImg4 from "../../Assets/Images/TeamImg4.png";
import facebookIcon from "../../Assets/Images/facebook-logo.png";
import TwitterIcon from "../../Assets/Images/twitter.png";
import LinkdinIcon from "../../Assets/Images/linkdin.png";
import InstaIcon from "../../Assets/Images/instaIcon.png";
import partnerImg1 from "../../Assets/Images/partnerImg1.png";
import partnerImg2 from "../../Assets/Images/partnerImg2.png";
import partnerImg3 from "../../Assets/Images/partnerImg3.png";
import partnerImg4 from "../../Assets/Images/partnerImg4.png";
import partnerImg5 from "../../Assets/Images/partnerImg5.png";
import partnerImg6 from "../../Assets/Images/partnerImg6.png";
import partnerImg7 from "../../Assets/Images/partnerImg7.png";
import partnerImg8 from "../../Assets/Images/partnerImg8.png";




export default function About({ activeNav, setActiveNav }) {
  setActiveNav(2)

  const partnerImg = [
    partnerImg1,
    partnerImg2,
    partnerImg3,
    partnerImg4,
    partnerImg5,
    partnerImg6,
    partnerImg7,
    partnerImg8,
  ]

  const TeamCard = ({ title, sub1, sub2, sub3, img }) => {
    return (
      <Box className="teamCard">
        <img src={img} className='teamBg' />
        <Box className="TeamCardFBox">
          <Typography className='tcfbHeader'>{title}</Typography>
          <Typography className='tcfbSubHeader'>{sub1}</Typography>
          <Box className="socialMBox">
            <img src={facebookIcon} className='fIcon' />
            <img src={TwitterIcon} />
            <img src={LinkdinIcon} />
            <img src={InstaIcon} />
          </Box>
        </Box>
        <Box className="TeamCardSBox">
          <Typography className='tcfbHeader'>{title}</Typography>
          <Typography className='tcfbSubHeader'>{sub2}</Typography>
          <Typography className='tcfbSubHeader'>{sub3}</Typography>
          <Box className="socialMBox">
            <img src={facebookIcon} className='fIcon' />
            <img src={TwitterIcon} />
            <img src={LinkdinIcon} />
            <img src={InstaIcon} />
          </Box>
        </Box>
      </Box>
    )
  }



  return (
    <>
      <Box className="aboutPage">
        <NavBar activeNav={activeNav} setActiveNav={setActiveNav} />

        <Box className='whoWeareSection'>
          {/* <img src={pageBg1} className='aboutFBg' /> */}
          <Typography className='sectionHeader'>Who We Are</Typography>
          <Typography className='nSummeryText2'>Unleash Your Productivity Creativity Potential Business</Typography>
          <Typography my={4} className='aboutNText'>UThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </Typography>
          <Typography className='aboutNText'>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Typography>
        </Box>

        <Box className="ourStorySection">
          <Typography className='sectionHeader'>Our Story</Typography>
          <Typography my={3} className='aboutNText'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. </Typography>
          <Typography className='aboutNText'>It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</Typography>
        </Box>


        {/* behind Team Section */}
        <Box className="behindTeamSection">
          <Typography className='sectionHeader'>Meet the Team Behind Havelink</Typography>
          <Box className="teamCardBox">
            {TeamCard({ title: "JUSTIN STIVEN", sub1: "It uses a dictionary of over 200 Latin words", sub2: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures", sub3: "combined with a handful of model sentence structures", img: teamImg1 })}
            {TeamCard({ title: "JUSTIN STIVEN", sub1: "It uses a dictionary of over 200 Latin words", sub2: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures", sub3: "combined with a handful of model sentence structures", img: teamImg2 })}
            {TeamCard({ title: "JUSTIN STIVEN", sub1: "It uses a dictionary of over 200 Latin words", sub2: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures", sub3: "combined with a handful of model sentence structures", img: teamImg3 })}
            {TeamCard({ title: "JUSTIN STIVEN", sub1: "It uses a dictionary of over 200 Latin words", sub2: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures", sub3: "combined with a handful of model sentence structures", img: teamImg4 })}
          </Box>
        </Box>

        {/* Partners */}
        <Box className="partnerSection">
          <Typography className='sectionHeader'>Partners</Typography>
          <Box className="partnerCardBox">
            {
              partnerImg?.map((el, i) => (
                <Box key={i} className="partnerCard">
                  <img src={el} />
                </Box>
              ))
            }



          </Box>


        </Box>


        {/* benefits section */}
        <Box mb={5} className="benefitSection">
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
