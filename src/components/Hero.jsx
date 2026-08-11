import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {

  const downloadResume = async () => {
    try {
      const response = await fetch('/Resume.pdf'); // Update this path to your actual resume file
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Resume.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading resume:', error);
    }

  };

  return (
    <section id="home" className="hero" style={{ paddingTop: '80px' }}>
      <div className="container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            {/* Keep all your existing hero text content */}
            <span className="hero-greeting">Hello, I'm</span>
            <h1 className="hero-name">{personalInfo.name}</h1>
            <h2 className="hero-title">{personalInfo.title}</h2>
            <p className="hero-description">{personalInfo.summary}</p>
            
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-outline">
                View Projects
              </a>
            </div>

            <div className="hero-social">
              {/* Keep all your existing social links */}
              <a 
                href="https://github.com/yogasunders-hub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/yogasunder-s-059ba6265/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin size={20} />
              </a>
              <a href={`mailto:yogasunders@gmail.com`} className="social-link">
                <Mail size={20} />
              </a>
              
              <button 
                onClick={downloadResume}
                className="social-link"
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: 0,
                  font: 'inherit',
                  color: 'inherit'
                }}
                >
                <Download size={20} />
                <span>Resume</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image"
          >
            <div className="image-placeholder style={{ paddingLeft: '60px' }}">
              <div className="image-frame">
                <div className="image-content" >
                  {/* REPLACE THE TECH TAGS WITH YOUR PHOTO */}
                  <img 
                   src="/images/Yoga.png" // Update this path to your actual photo
                  //  src="/images/Image.png" // Update this path to your actual photo  
                  alt={personalInfo.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: '80% 10%',
                      borderRadius: 'inherit', // This will maintain the morphing shape
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;