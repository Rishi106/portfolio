import "./HeroImgStyle.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import PROFILE from "../asites/PROFILE.jpg";  

const HeroImg = () => {
  const images = [
    "https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
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
        <h1 className="title">Full Stack Java Developer</h1>
        <div className="btn-container">
          <Link to="/projects" className="btn">Projects</Link>
          <Link to="/contect" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
