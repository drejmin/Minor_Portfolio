import './ProjectsPage.css';
import React from 'react';

const ProjectCard = ({ title, description, imageUrl, demoUrl, sourceUrl }) => {
    return (
      <div className="project-card">
        <img src={imageUrl} alt={title} className="project-image" />
        <div className="project-info">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <div className="project-links">
            {demoUrl && <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="project-demo-link">Live Demo</a>}
            {sourceUrl && <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="project-source-link">Source Code</a>}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  