import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { Code, Calendar, Award } from 'lucide-react'; // Removed ExternalLink

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="project-card"
            >
              <div className="project-header">
                <div className="project-icon">
                  <Code size={24} />
                </div>
                <div>
                  <h3>{project.title}</h3>
                  <div className="project-period">
                    <Calendar size={14} />
                    <span>{project.period}</span>
                  </div>
                </div>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              {project.achievement && (
                <div className="project-achievement">
                  <Award size={16} />
                  <span>{project.achievement}</span>
                </div>
              )}
              
              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tag">{tech}</span>
                ))}
              </div>

              {/* Project links are commented out until ready to use
              <div className="project-links">
                <a href="#" className="project-link">
                  <Code size={16} />
                  <span>View Code</span>
                </a>
                <a href="#" className="project-link">
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              </div>
              */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;