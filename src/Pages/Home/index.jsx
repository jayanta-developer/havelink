import React from "react";
import "./style.css";

//components
import { Box, Typography } from "@mui/material";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { BenefitCard } from "../../Components/Util";
import ReactPlayer from "react-player";

//images
import brainImg from "../../Assets/Images/brainImg.png";
import HomeLine from "../../Assets/Images/Home_line.png";
import homeLineCenter from "../../Assets/Images/Home_line_center.png";
import AiCardImg from "../../Assets/Images/aiCardImg.png";
import rightBtn from "../../Assets/Images/right (1) 2.png";
import leftBtn from "../../Assets/Images/left (1) 1.png";
import testoMoniBg from "../../Assets/Images/textominiBg.png";
import start from "../../Assets/Images/start.png";
import cote from "../../Assets/Images/cote.png";
import caseImg1 from "../../Assets/Images/caseImg1.png";
import caseImg2 from "../../Assets/Images/caseImg2.png";
import caseImg3 from "../../Assets/Images/caseimg3.png";
import caseImg4 from "../../Assets/Images/caseImg4.png";
import Avatar from "../../Assets/Images/avatar.png";
import calenderIcon from "../../Assets/Images/calenderIcon.png";
import DGArrow from "../../Assets/Images/DGarrow.png";
import userIcon from "../../Assets/Images/userIcon.png";
import textIcon from "../../Assets/Images/textIcon.png";
import mailIcom from "../../Assets/Images/mailIcon.png";
import sideLine from "../../Assets/Images/sideLine.png";
import earthInHand from "../../Assets/Images/earthInHandeImg.png";
import valueBg from "../../Assets/Images/valueBg.png";
import aisoliotionBg from "../../Assets/Images/aiSolutaionBg.png";
import benefitBg from "../../Assets/Images/benefitBg.png";
import testimoni from "../../Assets/Images/testimoBg.png";
import studiesBg from "../../Assets/Images/studiesBg.png";
import contactBg from "../../Assets/Images/contactBg.png";
import card1 from "../../Assets/Images/Card1.svg"
import card2 from "../../Assets/Images/Card2.svg"
import card3 from "../../Assets/Images/cardB3.svg"
import card4 from "../../Assets/Images/card3.svg"
import aiSectionCardLogo from "../../Assets/Images/aiSectionCardLogo.svg"

export default function Home({ activeNav, setActiveNav }) {
  setActiveNav(0);

  const CaseCard = ({ BgImg }) => {
    return (
      <Box className="caseCard">
        <img src={BgImg} className="caseCardBg" />
        <Box className="gradiantBox">
          <Box className="CSUInfoBox">
            <Box className="CSUserInfoBox">
              <Box className="Avatar">
                <img src={Avatar} />
              </Box>
              <Typography>Jenny kiaa</Typography>
            </Box>
            <Box className="CSDateBox">
              <img src={calenderIcon} />
              <Typography>02 April 2022</Typography>
            </Box>
          </Box>
          <samp>Grad your spot fast before all the seats fill up.</samp>
          <span>
            Grad your spot fast before all the seats fill up, don’t miss it.....
          </span>
          <Box className="readMoretab">
            <Typography>Read More</Typography>
            <img src={DGArrow} />
          </Box>
        </Box>
      </Box>
    );
  };

  const AiSectionCard = ({ Rmargin, Lmargin }) => {
    return (
      <Box className={`CAiModelBox  ${Lmargin} ${Rmargin}`}>
        <Box className="aiCardImgBox">
          <img src={aiSectionCardLogo} />
        </Box>
        <Box className="aiTextB">
          <Typography className="aiCardHeader">
            EVA Lite
          </Typography>
          <Typography className="nSummeryText">
            All-in-one AI-driven platform to streamline and enhance business operations for mid-sized companies.
          </Typography>
          <div className="HomeBtnBox">
            <Box className="HeroBtn">
              <Typography>Try it now</Typography>
            </Box>
            <Box className="WhiteBtn">
              <Typography>See more</Typography>
            </Box>
          </div>
        </Box>

        {/* <img src={leftBtn} />
              <img src={rightBtn} /> */}
      </Box>
    )
  }

  return (
    <>
      <Box className="homeContainer">
        <NavBar activeNav={activeNav} setActiveNav={setActiveNav} />
        <Box className="heroSection">
          <img src={brainImg} className="brainImg" />

          <Typography className="heroHeader1">Your link to AI</Typography>
          <Typography className="heroHeader2">Unleash your business potential
            <span className="heroHeader3"> with HaveLink </span>
          </Typography>

          <Box className="HomelineBox">
            <div className="HomeBtnBox">
              <Box className="HeroBtn">
                <Typography>Try it now</Typography>
              </Box>
              <Box className="WhiteBtn">
                <Typography>Free demo</Typography>
              </Box>
            </div>

            <img src={HomeLine} className="homeLineImg" />
          </Box>
          <Box className="videoBox">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=63yr9dlI0cU"
              loop
            />
          </Box>
        </Box>




        {/*Client testimonials  */}
        {/* <Box className="testimonialSection">
          <img src={testimoni} className="testimoni" />
          <Typography className="sectionHeader">Client Testimonials</Typography>
          <Box className="testMonBox">
            <img src={testoMoniBg} className="testomoniBgImg" />
            <Box className="titleBox">
              <Typography className="titleText">Jhon Doe</Typography>
              <Typography className="testMonNtext">
                Videtics propose une suite logicielle.
              </Typography>
              <Box className="testMonGline"></Box>
              <img src={cote} className="coteImg" />
            </Box>

            <Box className="starBottomBox">
              <Box className="starBox">
                <img src={start} />
                <img src={start} />
                <img src={start} />
                <img src={start} />
                <img src={start} />
              </Box>
              <Typography className="testMonNtext">
                Kheops offre des fonctionnalités de co-édition en temps réel
                permettantà plusieurs utilisateurs de contribuer simultanément à
                la création decontenus assistés par l’I.A.Idéal pour le partage
                d’idées et la collaboration hybride, humain/I.A,avec la
                fonctionnalité « demande à mes données » qui permetl’interaction
                avec la base de connaissance de l’entreprise via l’I.A.
              </Typography>
            </Box>
          </Box>
          <img src={sideLine} className="rightSideLine" />
        </Box> */}

        {/* case studies */}
        {/* 
        <Box className="caseSection">
          <img src={studiesBg} className="studiesBg" />
          <Typography className="sectionHeader">Case studies</Typography>
          <Box className="caseCardBox">
            {CaseCard({ BgImg: caseImg1 })}
            {CaseCard({ BgImg: caseImg2 })}
            {CaseCard({ BgImg: caseImg3 })}
            {CaseCard({ BgImg: caseImg4 })}
          </Box>
        </Box> */}

        {/* your benefits section */}

        <div className="benefitsV1">
          <Typography className="sectionHeader">Your Benefits</Typography>
          <Typography className="nSummeryText">Videtics propose une suite logicielle qui facilite la surveillance des zones protégées, l'investigation à postériori et la prise de décision en utilisant les caméras IP existantes de votre parc vidéo.</Typography>

          <div className="moreESBox">
            <div className="moreESBoxItem">
              <p className="mesHeader">57%</p>
              <p className="mesHeader1">More Efficient <br /> <samp>Videtics propose une suite logicielle qui facilite la surveillance des zones protégées, l'investigation.</samp></p>
            </div>

            <div className="moreESBoxItem">
              <p className="mesHeader">57%</p>
              <p className="mesHeader1">More Secure <br /> <samp>Videtics propose une suite logicielle qui facilite la surveillance des zones protégées, l'investigation.</samp></p>
            </div>
          </div>

          <div className="moreESBottomBox">

            <div className="moreESBItem">
              <p className="mesHeader1">Affordable  <br /> <samp>Videtics propose une suite logicielle qui facilite la surveillance des zones protégées, l'investigation.</samp></p>
            </div>
            <div className="moreESBItem">
              <p className="mesHeader1">Scalable <br /> <samp>Videtics propose une suite logicielle qui facilite la surveillance des zones protégées, l'investigation.</samp></p>
            </div>
            <div className="moreESBItem">
              <p className="mesHeader1">Easy-to-Use <br /> <samp>Videtics propose une suite logicielle qui facilite la surveillance des zones protégées, l'investigation.</samp></p>
            </div>

          </div>
        </div>


        {/*ai section  */}

        <Box className="aiSection">
          <img src={aisoliotionBg} className="aisoliotionBg" />
          <Typography className="sectionHeader">Our AI Solutions</Typography>
          <Typography className="nSummeryText">
            Videtics propose une suite logicielle qui facilite la surveillance des zones protégées, l'investigation à postériori et la prise de décision en utilisant les caméras IP existantes de votre parc vidéo.
          </Typography>
          <div className="aiSectionSlideBox">
            <AiSectionCard Lmargin="Lmargin" />
            <AiSectionCard />
            <AiSectionCard Rmargin="Rmargin" />
          </div>
          <img src={sideLine} className="leftSideLine" />
          <img src={sideLine} className="rightSideLine" />
        </Box>



        {/* benefits section */}
        <Box className="benefitSection">
          <img src={benefitBg} className="valueBg" />
          <Typography className="sectionHeader">Our Services</Typography>
          <Typography className="nSummeryText">
            Videtics propose une suite logicielle qui facilite la surveillance des zones protégées, l'investigation à postériori et la prise de décision en utilisant les caméras IP existantes de votre parc vidéo.
          </Typography>

          <Box className="benefitCardBox">
            {BenefitCard({
              img: card1,
              title: "Customizable AI Models",
              summery:
                "Our Gen AI tool can be customized to align with your industry-specific requirements, ensuring it delivers maximum value and efficiency",
            })}
            {BenefitCard({
              img: card2,
              title: "Advanced Predictive Analytics",
              summery:
                "Leverage our AI's powerful predictive capabilities to anticipate market trends, optimize operations, and drive strategic decisions.",
            })}
            {BenefitCard({
              img: card3,
              title: "Expertise in AI Customization",
              summery:
                "Our team of AI experts specializes in creating customized solutions that align perfectly with your specific needs and goals.",
            })}
            {BenefitCard({
              img: card4,
              title: "Commitment to Security",
              summery:
                "We prioritize the security and privacy of your data, ensuring that our solutions comply with the highest standards and regulatory requirements.",
            })}
          </Box>
          <img src={sideLine} className="leftSideLine" />
          <img src={earthInHand} className="earthInHand" />
        </Box>

        {/* contact section */}
        <Box className="contacSection">
          <img src={contactBg} className="contactBg" />

          <Box className="contactTextBox">
            <Typography className="sectionHeader">
              Contact Us for a Free Consultation
            </Typography>
            <span>
              Videtics propose une suite logicielle qui facilite la surveillance
              des zones protégées, l'investigation à postériori et la prise de
              décision en utilisant les caméras IP existantes de votre parc
              vidéo.
            </span>
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

            <Box className="inputFBox CompanyBox">
              <Box className="inputWl">
                <Typography>Size of the Company</Typography>
                <Box className="inputBox">
                  <input type="text" placeholder="Size of the Company" />
                </Box>
              </Box>

              <Box className="inputWl">
                <Typography>Turnover of the company</Typography>
                <Box className="inputBox">
                  <input type="text" placeholder="turnover of the company" />
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
                <input type="text" placeholder="Developement" />
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
          <img src={sideLine} className="leftSideLine" />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
