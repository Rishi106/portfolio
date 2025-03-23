import React, { useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const projects = [
    {
      id: 1,
      imgsrc: "https://cdn.pixabay.com/photo/2015/08/17/20/29/whatsapp-892926_640.jpg",
      title: "WhatsApp Chatting Application",
      text: "Built a WhatsApp-inspired chat app using Java, Spring Boot, WebSocket, React.js, and MySQL. Enabled real-time messaging, group chats, and media sharing for 1,000+ users. Deployed on AWS using Docker, ensuring scalability and 90%+ uptime.",
      view: "https://github.com/Rishi106/Whatsapp-chatting-website",
      tags: ["Java", "Spring Boot", "WebSocket", "React.js", "MySQL"],
    },
    {
      id: 2,
      imgsrc: "https://media.istockphoto.com/id/900301626/photo/brown-wooden-shelfs-fully-packed-with-books-in-a-library.jpg?s=1024x1024&w=is&k=20&c=BOqCBQKwFdfhXP1w75Rc0vQToKHLh07EGMXGgXQDj1Y=",
      title: "Book Store Web Application",
      text: "Built a CRUD-enabled book store web application, automating inventory management and order processing, improving operational efficiency by 20%. Tech Stack: Java, Spring Boot, MySQL, JSP, HTML, CSS, JavaScript.",
      view: "https://github.com/Rishi106/Book-Store-website",
      tags: ["Java", "Spring Boot", "MySQL", "JSP", "JavaScript"],
    },
    {
      id: 3,
      imgsrc: "https://img.freepik.com/free-vector/product-inventory-isometric-landing-page-logistics-order-processing-warehouse-tasking-stock-supply-planning-concept-tiny-supplier-filling-form-huge-mobile-phone-screen-3d-vector-web-banner_107791-7836.jpg?t=st=1740893326~exp=1740896926~hmac=2f46f5abc19637dccc0e4f7dc9a34585baa6b5b9014fe07f5fee09f8d669db60&w=1060",
      title: "Personal Inventory Management System",
      text: "Developed a personal inventory management system to track items and generate reports, reducing manual tracking errors by 50%. Tech Stack: Java Servlets, JSP, MySQL, HTML5, CSS3, JavaScript.",
      view: "https://github.com/Rishi106/PIS-web-Project",
      tags: ["Java Servlets", "JSP", "MySQL", "HTML5", "CSS3"],
    },
    {
      id: 4,
      imgsrc: "https://media.istockphoto.com/id/1215812761/photo/internet-shopping-with-laptop.jpg?s=1024x1024&w=is&k=20&c=cO7GUlxT4HR7v-EDjelC92RfNLqbR_7DH9reoGuPE1g=",
      title: "Online Shopping Website",
      text: "Developed and maintained a fully functional online shopping website with a user-friendly interface, enabling seamless browsing and purchasing experiences for over 2 monthly active users.",
      view: "https://githut.com",
      tags: ["Java", "Spring Boot", "React.js", "MySQL"],
    },
    {
      id: 5,
      imgsrc: "https://media.istockphoto.com/id/1405279677/photo/close-up-of-people-pointing-to-a-graph-with-data.jpg?s=1024x1024&w=is&k=20&c=IUP5cjK_7b-ZUNGyJQffIZVXEEcMerxpZCCwhgwTx-g=",
      title: "Data Analytics Dashboard",
      text: "Developed a personal inventory management system to track items and generate reports, reducing manual tracking errors by 50%. Tech Stack: Java Servlets, JSP, MySQL, HTML5, CSS3, JavaScript.",
      view: "https://githut.com",
      tags: ["Java", "Data Visualization", "MySQL", "JavaScript"],
    },
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className={`project-card ${expanded[project.id] ? "expanded" : ""}`}>
            <img src={project.imgsrc} alt={project.title} className="project-image" />
            <h2>{project.title}</h2>
            <p>
              {expanded[project.id] ? project.text : project.text.slice(0, 100) + "..."}
            </p>
            <span className="read-more" onClick={() => toggleReadMore(project.id)}>
              {expanded[project.id] ? "Read Less" : "Read More"}
            </span>
            <div className="tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div><br/>
            <a href={project.view} target="_blank" rel="noopener noreferrer" className="view-button">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
