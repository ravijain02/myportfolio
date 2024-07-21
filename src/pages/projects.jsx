import React from 'react';
import '../styles/project.css'

const projects = [
  {
    id: 1,
    title: 'React Dashboard',
    description: 'A dashboard application built with React, featuring various charts and data visualization.',
    codeLink: 'https://github.com/yourusername/react-dashboard',
    liveLink: 'https://yourdomain.com/react-dashboard',
  },
  {
    id: 2,
    title: 'MERN E-commerce',
    description: 'An e-commerce application using MERN stack, including product management and user authentication.',
    codeLink: 'https://github.com/yourusername/mern-ecommerce',
    liveLink: 'https://yourdomain.com/mern-ecommerce',
  },
  {
    id: 3,
    title: 'React Portfolio',
    description: 'A personal portfolio website built with React, showcasing projects and skills.',
    codeLink: 'https://github.com/yourusername/react-portfolio',
    liveLink: 'https://yourdomain.com/react-portfolio',
  },
  {
    id: 4,
    title: 'MERN Blog Platform',
    description: 'A blogging platform developed with MERN stack, with features for post creation and commenting.',
    codeLink: 'https://github.com/yourusername/mern-blog-platform',
    liveLink: 'https://yourdomain.com/mern-blog-platform',
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-buttons">
              <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-code">View Code</a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-live">Live Preview</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
