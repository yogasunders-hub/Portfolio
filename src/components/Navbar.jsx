import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react'; // Add these back

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Home', 'About', 'Education', 'Experience', 'Projects', 'Skills', 'Achievements', 'Contact'];

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-container">
          <motion.div 
            className="logo"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="logo-text">Yogasunder S</span>
          </motion.div>

          <div className="nav-desktop">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="nav-link"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Mobile menu toggle - NOW UNCOMMENTED */}
          <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isOpen && (
            <motion.div 
              className="nav-mobile"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;