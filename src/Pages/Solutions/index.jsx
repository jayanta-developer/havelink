import React from "react";
import "./style.css";

//components
import { Box, Typography } from "@mui/material";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";

//images
import solutionsBanner from "../../Assets/Images/solutionsbanner.png";
import solutionsIcon01 from "../../Assets/Images/solution-icon-01.svg";
import solutionsIcon02 from "../../Assets/Images/solution-icon-02.svg";
import solutionsIcon03 from "../../Assets/Images/solution-icon-03.svg";
import solutionsImg01 from "../../Assets/Images/solution-img-01.png";
import IIcon from '../../Assets/Images/IIcon.svg';
import tikIcon from "../../Assets/Images/tikIcon.svg"

import { PriceTableData } from "../../Assets/Data"

export default function Solutions({ activeNav, setActiveNav }) {
  return (
    <>
      <Box className="solutionsPage">
        <NavBar activeNav={activeNav} setActiveNav={setActiveNav} />
        {/* <img src={solutionsBanner} className="solutionsBanner" /> */}

        <Box className="solutionsMainSection">
          <Typography className="sectionHeader">Our AI Solutions</Typography>
          <Typography className="nSummeryText">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </Typography>
        </Box>

        <Box className="solutionsThreeSection">
          <Box className="column">
            <figure>
              <img src={solutionsIcon01} />
            </figure>
            <Typography variant="h3">On Demand</Typography>
            <Typography>
              Videtics propose une suite logicielle qui facilite la surveillance des zones protégées, l'investigation à postériori et la prise de décision en utilisant les caméras IP existantes de votre parc vidéo.
            </Typography>
            <Box className="WhiteBtn">
              <Typography>See more</Typography>
            </Box>
          </Box>
          <Box className="column">
            <figure>
              <img src={solutionsIcon02} />
            </figure>
            <Typography variant="h3">EVA Lite </Typography>
            <Typography>
              Videtics propose une suite logicielle qui facilite la surveillance des zones protégées, l'investigation à postériori et la prise de décision en utilisant les caméras IP existantes de votre parc vidéo.
            </Typography>
            <Box className="WhiteBtn">
              <Typography>See more</Typography>
            </Box>
          </Box>
          <Box className="column">
            <figure>
              <img src={solutionsIcon03} className="comingS" />
            </figure>
            <Typography variant="h3">EVA </Typography>
            <Typography>
              Videtics propose une suite logicielle qui facilite la surveillance des zones protégées, l'investigation à postériori et la prise de décision en utilisant les caméras IP existantes de votre parc vidéo.
            </Typography>
            <Box className="WhiteBtn">
              <Typography>COMING SOON</Typography>
            </Box>
          </Box>
        </Box>
        {/* <Box className="solutionstwoSection">
          <figure>
            <img src={solutionsImg01} />
          </figure>
          <article>
            <Typography variant="h2" gutterBottom>
              Unleash Your Productivity Creativity Potential Business
            </Typography>
            <Typography gutterBottom>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet.
            </Typography>
            <Typography>
              It uses a dictionary of over 200 Latin words, combined with a
              handful of model sentence structures, to generate Lorem Ipsum
              which looks reasonable. The generated Lorem Ipsum is therefore
              always free from repetition, injected humour, or
              non-characteristic words etc.
            </Typography>
          </article>
        </Box> */}

        <p className="priceTableHeader">Pricing</p>

        <div className="PriceTableBig">
          <div className="priceTaleBorder">
            <div className="PriceMainTable">
              <div className="pTHeaderRow">
                <div className="ptHCell">
                  <p></p>
                </div>
                <div className="ptHCell ptCenter">
                  <p>On Demand</p>
                </div>
                <div className="ptHCell ptCenter">
                  <p>Basic</p>
                </div>
                <div className="ptHCell ptCenter">
                  <p>Pro</p>
                </div>
              </div>

              <div className="ptValueBox">
                {
                  PriceTableData?.map((el, i) => (
                    <div key={i} className="pTHeaderRow">
                      <div className="ptNCell">
                        <p>{el.title} <img style={{ marginLeft: "10px" }} src={IIcon} /></p>
                      </div>
                      <div className="ptNCell ptCenter">
                        <p>{el.OnDemand}</p>
                      </div>
                      <div className="ptNCell ptCenter">
                        <p>{el.Basic === "true" ? <img src={tikIcon} /> : el.Basic}</p>
                      </div>
                      <div className="ptNCell ptCenter">
                        <p>{el.Pro === "true" ? <img src={tikIcon} /> : el.Pro}</p>
                      </div>
                    </div>
                  ))
                }





              </div>


            </div>
          </div>


        </div>

        <Footer />
      </Box>
    </>
  );
}
