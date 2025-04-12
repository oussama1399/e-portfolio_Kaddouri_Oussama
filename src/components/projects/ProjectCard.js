import React from 'react';

function ProjectCard({ project, onOpenModal }) {
  return (
    <div className="col-md-6 col-lg-4 project-item" data-aos="zoom-in" data-category={project.category}>
      <div 
        className={`project-card card h-100 ${project.modalId ? 'project-modal-trigger' : ''}`}
        onClick={project.modalId ? () => onOpenModal(project.modalId) : undefined}
      >
        <img src={project.image} className="project-img card-img-top" alt={project.title} />
        <div className="card-body p-4">
          <h4>{project.title}</h4>
          <p className="card-text">{project.description}</p>
          <div className="mt-auto">
            {project.technologies.map((tech, index) => (
              <span key={index} className="skill-badge">{tech}</span>
            ))}
          </div>
        </div>
        <div className="project-overlay">
          <h4>{project.title}</h4>
          <p>{project.longDescription || project.description}</p>
          <div className="tech-stack">Technologies utilisées:</div>
          <div className="tech-list">
            {project.allTechnologies && project.allTechnologies.map((tech, index) => (
              <span key={index} className="skill-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
