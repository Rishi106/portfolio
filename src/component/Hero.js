import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>
            Hi, I'm Rishikesh Kumar, a Full-Stack Developer passionate about
            building amazing web applications.
          </p>
          <motion.a
            href="#about"
            className="cta-button"
            aria-label="Learn more about me"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} // Add a tap effect
          >
            Learn More
          </motion.a>
        </div>
      </section>

      <section className="resume-section">
        <div className="resume-download">
          <motion.a
            href="https://drive.google.com/drive/folders/118iOAspudCwTY8s9NUE4CatWHTbMF_CM"
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
            aria-label="Show my resume"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }} // Add a tap effect
          >
            Show My Resume
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Hero;