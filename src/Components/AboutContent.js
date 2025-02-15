import  "./AboutContentStyle.css"
import React from 'react'
import { Link } from "react-router-dom"
import React01 from "../asites/react.jpg"
 import Java01 from "../asites/java01.jpeg"
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
        <h1>Who Am I?</h1>
        <p>
        I'm Rishi, a Full-Stack Java Developer with a passion for building robust, 
        scalable, and efficient web applications. With a strong foundation in Java,
         Spring Boot, Hibernate, and RESTful APIs, I specialize in crafting high-performance back-end systems.
          On the front-end, I bring ideas to life using modern technologies like React, JavaScript, 
          and responsive design. Whether it's designing seamless user experiences, 
          optimizing database performance, or deploying cloud-based solutions,
           I thrive on solving complex problems and delivering end-to-end solutions.
            Explore my projects, learn more about my skills, and let's collaborate to turn your vision into reality.
        </p>
        <Link to="/contect">
        <button className="btn">Contact</button>
        </Link>
    </div>
    <div className="right">
    <div className="img-container">
    <img src={Java01} className ="img" alt="true"/>

    </div>
         <div className="img-container">
        <img src={React01}
         className ="img" alt="true"/>
    </div>
    </div>
    </div>
  )
}

export default AboutContent