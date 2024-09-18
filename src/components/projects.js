// src/components/Projects.js
import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase my projects and skills.',
      imageUrl: 'https://example.com/portfolio-image.jpg',
      projectUrl: 'https://your-portfolio.com'
    },
    {
      title: 'E-commerce Website',
      description: 'An e-commerce website built with React and Django, featuring product listings, cart, and checkout.',
      imageUrl: 'https://example.com/ecommerce-image.jpg',
      projectUrl: 'https://your-ecommerce.com'
    },
    {
      title: 'Blog Application',
      description: 'A full-featured blog application with user authentication, comment section, and post categories.',
      imageUrl: 'https://res.cloudinary.com/dqvewferm/image/upload/v1726632444/blogs_app_pic_mf7rjj.png',
      projectUrl: 'https://your-blog.com'
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="projects-section">
        <div className='project-content'>
      <h2>Projects</h2>
      <div className="intro-text">
        <p>A glimpse into my completed software development projects</p>
      </div>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={`${project.title} screenshot`} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Projects;
