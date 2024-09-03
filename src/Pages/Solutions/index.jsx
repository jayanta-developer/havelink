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

export default function Solutions({ activeNav, setActiveNav }) {
  return (
    <>
      <Box className="solutionsPage">
        <NavBar activeNav={activeNav} setActiveNav={setActiveNav} />
        <img src={solutionsBanner} className="solutionsBanner" />

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
            <Typography variant="h3">Customizable AI Solutions</Typography>
            <Typography>
              Videtics propose une suite logicielle qui facilite la surveillance
              des zones protégées, l'investigation à postériori et la prise de
              décision en utilisant les caméras IP existantes de votre parc
              vidéo.
            </Typography>
          </Box>
          <Box className="column">
            <figure>
              <img src={solutionsIcon02} />
            </figure>
            <Typography variant="h3">Discover EVA Solution</Typography>
            <Typography>
              Videtics propose une suite logicielle qui facilite la surveillance
              des zones protégées, l'investigation à postériori et la prise de
              décision en utilisant les caméras IP existantes de votre parc
              vidéo.
            </Typography>
          </Box>
          <Box className="column">
            <figure>
              <img src={solutionsIcon03} />
            </figure>
            <Typography variant="h3">Discover EVA Lite Solution</Typography>
            <Typography>
              Videtics propose une suite logicielle qui facilite la surveillance
              des zones protégées, l'investigation à postériori et la prise de
              décision en utilisant les caméras IP existantes de votre parc
              vidéo.
            </Typography>
          </Box>
        </Box>
        <Box className="solutionstwoSection">
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
        </Box>

        <Footer />
      </Box>
    </>
  );
}
