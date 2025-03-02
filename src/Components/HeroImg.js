import "./HeroImgStyle.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PROFILE from "../asites/PROFILE.jpg";  

const HeroImg = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_640.jpg",
    "https://cdn.pixabay.com/photo/2023/11/05/02/07/ai-generated-8366100_1280.jpg",
    "https://cdn.pixabay.com/photo/2017/07/31/14/45/code-2558224_640.jpg",
    "https://cdn.pixabay.com/photo/2024/02/22/02/45/computer-8589003_960_720.png",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);  

    return () => clearInterval(interval);  
  }, [images.length]);

  return (
    <div className="hero">
      <div className="mask">
        <img
          className="into-img fade-in"
          src={images[currentImage]}
          alt="intro"
        />
      </div>
      <div className="content">
        {/* Portfolio Image */}
        <img
          src={PROFILE}  
          alt="Rishi Portfolio"
          className="portfolio-image"
        />

        <p className="intro-text">HI, I'M RISHI</p>
        <h1 className="title">Java Full Stack  </h1>
        <div className="btn-container">
          <Link to="/projects" className="btn">Projects</Link>
          <Link to="/contect" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
