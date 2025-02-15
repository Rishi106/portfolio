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
                    <p>123 Home Socity</p>
                    <p>India.</p>
                </div>
                </div>
                <div className="phone">
               <h4><FaPhone size={20} style={{color: "#fff" , marginRight:"2rem"}}/>
                9381888246</h4>
                </div>
                <div className="email">
               <h4><FaMailBulk size={20} style={{color: "#fff" , marginRight:"2rem"}}/>
                rishikk0143@gmail.com</h4>
                </div>
            </div>
                <div className="right">
                <h4>About me </h4>
                <p>
                    this is my portfolio
                </p>
                <div className="social">
                <FaFacebook size={40} style={{color: "#fff" , marginRight:"1rem"}}/>
                <FaLinkedin size={40} style={{color: "#fff" , marginRight:"1rem"}}/>
                <FaInstagram size={40} style={{color: "#fff" , marginRight:"1rem"}}/>
                </div>
                </div>

        </div>
    </div>
  )
}

export default Footer