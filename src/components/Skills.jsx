import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';
import { Code, Palette, Database, LineChart, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    { icon: <Code />, title: "Programming", items: skills.programming },
    { icon: <Code />, title: "Frontend", items: skills.frontend },
    { icon: <Database />, title: "Backend", items: skills.backend },
    { icon: <Palette />, title: "AI", items: skills.ai },
    // { icon: <LineChart />, title: "Data Visualization", items: skills.dataViz },
    // { icon: <Cpu />, title: "AI/ML", items: skills.aiMl }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="skill-category"
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>
              
              <div className="category-skills">
                {category.items.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-level"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${80 + Math.random() * 15}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;