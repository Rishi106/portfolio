import React from 'react';
import Navbar from './Navbar';
 
import './SkillsDataStyle.css';  

const SkillsData = () => {
  const skills = [
    { name: 'Java', level: 'Advanced' },
    { name: 'Spring Boot', level: 'Advanced' },
    { name: 'Microservices', level: 'Intermediate' },
    { name: 'RESTful API', level: 'Advanced' },
    { name: 'HTML', level: 'Advanced' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Bootstrap', level: 'Intermediate' },
    { name: 'SQL', level: 'Intermediate' },
    { name: 'Git', level: 'Intermediate' },
    { name: 'Postman', level: 'Intermediate' },
    { name: 'JSM', level: 'Intermediate' },
    { name: 'Kafka', level: 'Intermediate' },
    {name: 'Spring Boot Radis', level: 'Intermediate' },
    { name: 'MongoDB', level: 'Intermediate' },


  ];

  return (
    <div>
      <Navbar />
      
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>

     </div>
  );
};

export default SkillsData;
