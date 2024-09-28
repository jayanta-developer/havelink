import React, { useState, useEffect } from "react";
import "./style.css";
import Axios from "axios"


//components
import { Box, Typography, Button } from "@mui/material";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import ReactPlayer from "react-player";

//images
import blogBg from "../../Assets/Images/blogBg.png";
import Avatar from "../../Assets/Images/userImg.png";
import calenderIcon from "../../Assets/Images/calenderIcon.png";
import blogLastBg from "../../Assets/Images/blogLastBg.png";
import blogDetailImg from "../../Assets/Images/blogDetailImg.png"

import { BlogData } from "../../Assets/Data";

const itemsPerPage = 6;
export default function BlogDetail({ activeNav, setActiveNav }) {
  setActiveNav(3);
  const BlogIndex = localStorage.getItem("blogIndex");
  const [blogData, setBlogData] = useState();
  const [subPValue, setSubPValue] = useState([])





  useEffect(() => {
    if (!blogData) {
      Axios.get(`http://localhost:4000/api/blog/${BlogIndex}`).then((response) => {
        const parsedData = typeof response?.data === 'string' ? JSON.parse(response?.data) : response?.data;
        setBlogData(parsedData)
      }).catch((er) => {
        console.log(er);
      })
    }
  })


  useEffect(() => {
    if (blogData) {
      const jsonData = JSON.parse(blogData?.subPoint || '[]');
      setSubPValue(jsonData);
    }
  }, [blogData]);

  console.log(subPValue);


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

          <Typography className="sectionHeader">{blogData?.title}</Typography>
          <Box className="CSUInfoBox">
            <Box className="CSUserInfoBox">
              <Box className="Avatar">
                <img src={blogData?.userImg} />
              </Box>
              <Typography>{blogData?.userName}</Typography>
            </Box>
            <Box className="CSDateBox">
              <img src={calenderIcon} />
              <Typography>02 April 2022</Typography>
            </Box>
          </Box>

          <Box className="blogCoverBox">
            <img src={blogData?.img} />
          </Box>

          <Typography className="bdNText">{blogData?.summery}</Typography>

          {subPValue?.map((el, i) => (
            <Box sx={{ width: "100%" }} key={i}>
              <Typography className="bdNHeaderText">{el?.header}</Typography>
              {el?.summery?.subSummaries?.map((sel, i) => (
                <Typography key={i} className="bdNText">{sel}</Typography>
              ))
              }
            </Box>
          ))
          }



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

          {/* <Box mb={4} className="blogCardBox">
            {currentData?.slice(-3).map((el, i) =>
              blogCard({
                img: el.img,
                title: el.title,
                subtitle: el.subTitle,
                key: i,
              })
            )}
          </Box> */}


        </Box>
        <Footer />
      </Box>
    </>
  );
}
