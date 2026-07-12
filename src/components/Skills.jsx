// import React from 'react';
// import { motion } from 'framer-motion';
// import { skills } from '../data';
// import { Code2, Palette, Database, LineChart, Cpu } from 'lucide-react';

// const Skills = () => {
//   const skillCategories = [
//     { icon: <Code />, title: "Programming", items: skills.programming },
//     { icon: <Code />, title: "Frontend", items: skills.frontend },
//     { icon: <Database />, title: "Backend", items: skills.backend },
//     { icon: <Palette />, title: "AI", items: skills.ai },
//     // { icon: <LineChart />, title: "Data Visualization", items: skills.dataViz },
//     // { icon: <Cpu />, title: "AI/ML", items: skills.aiMl }
//   ];

//   return (
//     <section id="skills" className="skills">
//       <div className="container">
//         <h2 className="section-title">Skills</h2>
        
//         <div className="skills-grid">
//           {skillCategories.map((category, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               viewport={{ once: true }}
//               className="skill-category"
//             >
//               <div className="category-header">
//                 <div className="category-icon">
//                   {category.icon}
//                 </div>
//                 <h3>{category.title}</h3>
//               </div>
              
//               <div className="category-skills">
//                 {category.items.map((skill, idx) => (
//                   <div key={idx} className="skill-item">
//                     <span className="skill-name">{skill}</span>
//                     <div className="skill-bar">
//                       <motion.div
//                         className="skill-level"
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${80 + Math.random() * 15}%` }}
//                         transition={{ duration: 1, delay: 0.2 }}
//                         viewport={{ once: true }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';
import { Code2, Palette, Database, Server } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    { name: 'Programming', icon: Code2, skills: skills.programming },
    { name: 'Frontend', icon: Palette, skills: skills.frontend },
    { name: 'Backend', icon: Server, skills: skills.backend },
    { name: 'AI & Tools', icon: Database, skills: skills.ai }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="skill-category card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="category-header">
                <div className="category-icon">
                  <category.icon size={30} />
                </div>
                <h3>{category.name}</h3>
              </div>
              <div className="skill-items">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-bar">
                      <div 
                        className="skill-level" 
                        style={{ width: `${Math.random() * 40 + 60}%` }}
                      ></div>
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