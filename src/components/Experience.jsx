import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-grid">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="experience-card"
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <Briefcase size={24} />
                </div>
                <div className="experience-title">
                  <h3>{exp.title}</h3>
                  <p className="company">{exp.company}</p>
                </div>
              </div>
              
              <div className="experience-details">
                <div className="detail">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
                <div className="detail">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>
              
              <p className="experience-description">{exp.description}</p>
              
              <div className="experience-achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>
                      <CheckCircle size={16} />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="experience-tags">
                <span className="tag">Machine Learning</span>
                <span className="tag">Deep Learning</span>
                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;