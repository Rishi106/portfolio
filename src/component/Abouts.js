import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import './Abouts.css';

const Abouts = () => {
  return (
    <div className="about-me">
      <h1>About Me</h1>
      <div className="about-container">
        {/* About Me Section */}
        <div className="about-section">
          <h2>Java Full-Stack Developer</h2>
          <p>
            Passionate Java Full-Stack Developer skilled in Java, Spring Boot, Microservices, and RESTful APIs.
          </p>
          <p>
            Experienced with MySQL, Oracle, and AWS. I love building scalable, user-friendly applications and learning new technologies.
          </p>
          <p>
            Ready to contribute and grow with a dynamic team, I focus on creating efficient and maintainable solutions.
          </p>
        </div>

        {/* Experience Highlights Section */}
        <div className="experience-section">
          <h2>Experience Highlights</h2>
          <div className="experience">
            <div className="experience-item">
              <p><FontAwesomeIcon icon={faLaptopCode} className="icon" />Java Full-Stack Developer Training</p>
              <p>Naresh | Technologies, Hyderabad</p>
              <h3>01/2024 - Present</h3>
            </div>
            <div className="experience-item">
              <p><FontAwesomeIcon icon={faLaptopCode} className="icon" />Software Developer Intern</p>
              <p>Worldsoft Technologies Pvt. Ltd, Bhopal</p>
              <h3>01/2022 - 07/2023</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abouts;