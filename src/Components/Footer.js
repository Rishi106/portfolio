import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa";
import "./FooterStyle.css";
import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-content">
            <div className="left">
                <div className="location"> 
                <FaHome size={20} style={{color: "#fff" , marginRight:"2rem"}}/>
                <div>
                    <p>Hyderabad</p>
                    <p>India.</p>
                </div>
                </div>
                <div className="phone">
               <h4><FaPhone size={20} style={{color: "#fff" , marginRight:"2rem"}}/>
                9381888246</h4>
                </div>
                <div className="email">
               <h4><FaMailBulk size={20} style={{color: "#fff" , marginRight:"2rem"}}/>
                errishi545@gmail.com</h4>
                </div>
            </div>
                <div className="right">
                <h4>About me </h4>
                <p>
                    this is my portfolio
                </p>
                <div className="social">
            
  <a href="https://www.facebook.com/rishikesh.gosvami.9/" target="_blank" rel="noopener noreferrer">
    <FaFacebook size={40} style={{ color: "#1877F2", marginRight: "1rem" }} />
  </a>
  <a href="https://www.linkedin.com/in/rishikesh-kr-7481jh/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin size={40} style={{ color: "#0A66C2", marginRight: "1rem" }} />
  </a>
  <a href="https://www.instagram.com/rishikeshgosvami/?__pwa=1" target="_blank" rel="noopener noreferrer">
    <FaInstagram size={40} style={{ color: "#E4405F", marginRight: "1rem" }} />
  </a>
</div>
                </div>

        </div>
    </div>
  )
}

export default Footer