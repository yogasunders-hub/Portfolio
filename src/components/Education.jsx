import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-timeline">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-icon">
                    <GraduationCap size={24} />
                  </div>
                  <div className="timeline-title">
                    <h3>{edu.degree}</h3>
                    <p className="institution">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="timeline-details">
                  <div className="detail">
                    <Calendar size={16} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="detail">
                    <Award size={16} />
                    <span>{edu.cgpa}</span>
                  </div>
                </div>
                
                <div className="timeline-progress">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${parseFloat(edu.cgpa.split(': ')[1]) * 10}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">{edu.cgpa.split(': ')[1]}/10</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;