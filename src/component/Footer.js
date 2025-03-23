import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa'; // Import icons
import { AiFillHome } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Social Media Links */}
        <div className="social-media">
          <h3>Follow Me</h3>
          <div className="social-icons">
            <a href="https://github.com/Rishi106" target="_blank" rel="noopener noreferrer">
              <FaGithub className="icon" />
            </a>
            <a href="https://www.linkedin.com/in/rishikesh-kr-7481jh/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="icon" />
            </a>
            <a href="https://www.instagram.com/rishikeshgosvami/?__pwa=1" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a href="mailto:errishi545@gmail.com">
              <FaEnvelope className="icon" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/"><AiFillHome /> &nbsp; Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Contact Info</h3>
          <ul>
            <li>
              <span role="img" aria-label="email">
                📧
              </span>{' '}
              your.errishi545@gmail.com
            </li>
            <li>
              <span role="img" aria-label="phone">
                📞
              </span>{' '}
              +91 9381 888 246
            </li>
            <li>
              <span role="img" aria-label="location">
                📍
              </span>{' '}
              City : Hyderabad, Country : India
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} I'm Rishi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;