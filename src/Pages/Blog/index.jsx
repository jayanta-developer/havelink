import React, { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom"
import Axios from "axios"

//components
import { Box, Typography, Button } from "@mui/material";
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";

//images
import blogBg from "../../Assets/Images/blogBg.png";
import Avatar from "../../Assets/Images/userImg.png";
import blogBimg1 from "../../Assets/Images/blogBImg1.png";
import blogBimg2 from "../../Assets/Images/blogBimg2.png";
import calenderIcon from "../../Assets/Images/calenderIcon.png";
import blogLastBg from "../../Assets/Images/blogLastBg.png";

// import { BlogData } from "../../Assets/Data";

const itemsPerPage = 6;
export default function Blog({ activeNav, setActiveNav }) {
  const Navigate = useNavigate()
  const [blogData, setBlogData] = useState([])


  useEffect(() => {
    if (!blogData.length) {
      Axios.get("http://localhost:4000/api/blogs").then((response) => {
        const parsedData = typeof response?.data === 'string' ? JSON.parse(response?.data) : response?.data;
        setBlogData(parsedData)
      }).catch((er) => {
        console.log(er);
      })
    }
  })


  setActiveNav(3);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogData.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentData = blogData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  const storeBlogIndex = (i) => {
    localStorage.setItem("blogIndex", i)
    Navigate("/Blog-details")
  }


  const BlogBCard = ({ img, title, subtitle }) => {
    return (
      <Box className="blogBCard" onClick={() => Navigate("/blog-details")}>
        <img src={img} className="bbCardImg" />
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

  const blogCard = ({ img, title, subtitle, key, id }) => {
    return (
      <Box onClick={() => {
        Navigate("/blog-details")
        storeBlogIndex(id)
        window.scrollTo({ top: 0, behavior: "smooth" })
      }} className="blogCard" key={key}>
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
      <Box className="blogPage">
        <NavBar activeNav={activeNav} setActiveNav={setActiveNav} />
        <img src={blogBg} className="blogBg" />

        <Box className="blogMainSection">
          <Typography className="sectionHeader">Latest Blogs</Typography>


          <Box className="blogBcardBox">
            {BlogBCard({
              img: blogBimg1,
              title:
                "There are many variations of passages of Lorem Ipsum available.",
              subtitle:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
            })}
            {BlogBCard({
              img: blogBimg2,
              title:
                "There are many variations of passages of Lorem Ipsum available.",
              subtitle:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.",
            })}
          </Box>

          <Box className="blogCardBox">
            {currentData?.map((el, i) =>
              blogCard({
                img: el.img,
                title: el.title,
                subtitle: el.subTitle,
                key: i,
                id: el.id
              })
            )}
          </Box>

          <Box className="pagination">
            {Array.from({ length: totalPages }, (_, i) => (
              <Box
                className={
                  currentPage === i + 1
                    ? "paginationBtn"
                    : "paginationBtn paginationBtnActive"
                }
                key={i}
                onClick={() => handleClick(i + 1)}
              >
                <p>{i + 1}</p>
              </Box>
            ))}
          </Box>
          <img src={blogLastBg} className="blogLastBg" />
        </Box>
        <Footer />
      </Box>
    </>
  );
}
