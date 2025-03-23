import React from 'react';
import './Educations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { FaUserGraduate } from 'react-icons/fa6';
import { LiaLanguageSolid } from 'react-icons/lia';

const Educations = () => {
  return (
    <section className="education">
       <h2>
        <FaUserGraduate /> Education & Skills
      </h2>

      <div className="education-container">
        {/* Education Section */}
        <div className="education-item"> 
          <h3>Bachelor of Engineering</h3>
          <p>Computer Science and Engineering</p>
          <p>Rabindranath Tagore University, Bhopal</p>
          <p>07/2019 - 08/2023</p>
          <p>CGPA: 8.35</p>
        </div>

        {/* Languages & Interests Section */}
        <div className="languages-interests">
          <h3> Languages & Interests</h3>

          {/* Languages */}
          <div className="languages">
            <h4><LiaLanguageSolid  className="icon" /> &nbsp; Languages</h4>
            <ul>
              <li>
                <strong>English</strong> - Full Professional Proficiency
              </li>
              <li>
                <strong>Hindi</strong> - Full Professional Proficiency
              </li>
              <li>
                <strong>Bhojpuri</strong> - Full Professional Proficiency
              </li>
            </ul>
          </div>

          {/* Horizontal Line */}
          <div className="separator"></div>

          {/* Interests */}
          <div className="interests">
            <h4>Interests</h4>
            <ul>
            <li>Web Development</li>
              <li>Software Development</li>
              <li>Full Stack Development</li>
              <li>Java Development</li>
              <li>Open Source Projects</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educations;