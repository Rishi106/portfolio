import React from 'react';
import './SkillsData.css';

const SkillsData = () => {
  const backendSkills = [
    { name: 'Java 8', proficiency: 95 },
    { name: 'Spring Boot', proficiency: 90 },
    { name: 'Microservices', proficiency: 85 },
    { name: 'RESTful APIs', proficiency: 90 },
    { name: 'MySQL / Oracle', proficiency: 90 },
  ];

  const frontendSkills = [
    { name: 'React.js', proficiency: 85 },
    { name: 'HTML5 & CSS3', proficiency: 95 },
    { name: 'Git / Docker', proficiency: 75 },
    { name: 'AWS', proficiency: 70 },
    { name: 'MongoDB', proficiency: 75 },
  ];

  return (
    <section className="skills">
      <h2>Technical Skills</h2>

      <div className="skills-container">
        {/* Backend Development Section */}
        <div className="skills-category">
          <h3>Backend Development</h3>
          {backendSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill.name}</span>
              <div className="skill-progress">
                <div
                  className="progress-bar"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.proficiency}%</span>
            </div>
          ))}
        </div>

        {/* Frontend & Other Skills Section */}
        <div className="skills-category">
          <h3>Frontend & Other Skills</h3>
          {frontendSkills.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill.name}</span>
              <div className="skill-progress">
                <div
                  className="progress-bar"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <span className="skill-percentage">{skill.proficiency}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsData;