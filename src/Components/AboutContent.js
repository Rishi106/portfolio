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
            I'm a full-stack java Developer. I create responsive secure website for my clients.
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