import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="footer-text"
          >
            <h3 className="footer-logo">Yogasunder S</h3>
            <p>Full Stack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="footer-links"
          >
            <div className="link-group">
              <h4>Quick Links</h4>
              <a href="/#home">Home</a>
              <a href="/#about">About</a>
              <a href="/#projects">Projects</a>
              <a href="/#contact">Contact</a>
            </div>
            
            {/* <div className="link-group">
              <h4>Services</h4>
              <button className="footer-link-button" onClick={() => console.log('Web Development')}>Web Development</button>
              <button className="footer-link-button" onClick={() => console.log('AI/ML Solutions')}>AI/ML Solutions</button>
              <button className="footer-link-button" onClick={() => console.log('Data Visualization')}>Data Visualization</button>
              <button className="footer-link-button" onClick={() => console.log('UI/UX Design')}>UI/UX Design</button>
            </div> */}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <p>
            © {currentYear} Yogasunder S. All rights reserved. | Made with <Heart size={16} /> using React
          </p>
          <div className="footer-legal">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;