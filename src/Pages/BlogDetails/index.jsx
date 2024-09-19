import React, { useState } from "react";
import "./style.css";

//components
import { Box, Typography, Button } from "@mui/material";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import ReactPlayer from "react-player";

//images
import blogBg from "../../Assets/Images/blogBg.png";
import Avatar from "../../Assets/Images/userImg.png";
import blogBimg1 from "../../Assets/Images/blogBImg1.png";
import blogBimg2 from "../../Assets/Images/blogBimg2.png";
import calenderIcon from "../../Assets/Images/calenderIcon.png";
import blogLastBg from "../../Assets/Images/blogLastBg.png";
import blogDetailImg from "../../Assets/Images/blogDetailImg.png"

import { BlogData } from "../../Assets/Data";

const itemsPerPage = 6;
export default function BlogDetail({ activeNav, setActiveNav }) {
  setActiveNav(3);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(BlogData.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentData = BlogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );



  const blogCard = ({ img, title, subtitle, key }) => {
    return (
      <Box className="blogCard" key={key}>
        <img src={img} />
        <Box className="blogBCardTextSection">
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
          <Typography className="bbCardMainText">{title}</Typography>
          <Typography className="bbCardSubText">{subtitle}</Typography>
        </Box>
      </Box>
    );
  };

  return (
    <>
      <Box className="blogPage blogDetailPage">
        <NavBar activeNav={activeNav} setActiveNav={setActiveNav} />
        <img src={blogBg} className="blogBg" />

        <Box className="blogMainSection">

          <Typography className="sectionHeader">There are many variations of passages of Lorem Ipsum available.</Typography>
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

          <Box className="blogCoverBox">
            <img src={blogDetailImg} />
          </Box>

          <Typography className="bdNText">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Typography>

          <Typography className="bdNHeaderText">It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </Typography>

          <Typography className="bdNText">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Typography>

          <Typography className="bdNText">Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Typography>

          <Typography className="bdNHeaderText">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't.</Typography>
          <Typography className="bdNText">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Typography>

          <Box className="bdImgRowBox">
            <Box className="videoBox">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=0SRVJaOg9Co&pp=ygUIYWkgcm9ib3Q%3D"
                loop
              />
            </Box>

            <Box className="videoBox">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=63yr9dlI0cU"
                loop
              />
            </Box>
          </Box>


          <Typography className="bdNHeaderText">WORKSPACE ADMINISTRATION</Typography>
          <Typography className="bdNText">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</Typography>
          <Typography className="bdNText">Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</Typography>


          <Box mb={4} className="blogCardBox">
            {currentData?.slice(-3).map((el, i) =>
              blogCard({
                img: el.img,
                title: el.title,
                subtitle: el.subTitle,
                key: i,
              })
            )}
          </Box>


        </Box>
        <Footer />
      </Box>
    </>
  );
}
