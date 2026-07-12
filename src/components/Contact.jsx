// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { personalInfo, languages } from '../data';
// import { Mail, Phone, MapPin, Globe, Send } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here
//     console.log('Form submitted:', formData);
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <section id="contact" className="contact">
//       <div className="container">
//         <h2 className="section-title">Get In Touch</h2>
        
//         <div className="contact-content">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="contact-info"
//           >
//             <div className="info-card">
//               <h3>Contact Information</h3>
              
//               <div className="info-items">
//                 <div className="info-item">
//                   <Mail size={20} />
//                   <div>
//                     <h4>Email</h4>
//                     <p>{personalInfo.email}</p>
//                   </div>
//                 </div>
                
//                 <div className="info-item">
//                   <MapPin size={20} />
//                   <div>
//                     <h4>Location</h4>
//                     <p>{personalInfo.location}</p>
//                   </div>
//                 </div>
                
//                 <div className="info-item">
//                   <Globe size={20} />
//                   <div>
//                     <h4>Languages</h4>
//                     <p>{languages.join(', ')}</p>
//                   </div>
//                 </div>

//                  <div className="info-item">
//                   <Phone size={20} />
//                   <div>
//                     <h4>Mobile Number</h4>
//                     <p>+91 8524867725</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="contact-form"
//           >
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
              
//               <div className="form-group">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
              
//               <div className="form-group">
//                 <input
//                   type="text"
//                   name="subject"
//                   placeholder="Subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
              
//               <div className="form-group">
//                 <textarea
//                   name="message"
//                   placeholder="Your Message"
//                   rows="5"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>
              
//               <button type="submit" className="btn">
//                 <Send size={18} />
//                 <span>Send Message</span>
//               </button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from 'react';
import { personalInfo } from '../data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Send email using Gmail with proper content
  const sendEmailViaGmail = (name, email, message) => {
    // Create email content
    const subject = `Portfolio Contact from ${name}`;
    const body = `
Name: ${name}
Email: ${email}
Date: ${new Date().toLocaleString()}

Message:
${message}

---
This message was sent from Yogasunder's Portfolio website.
    `;
    
    // Create Gmail compose link with proper encoding
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open Gmail in new tab
    window.open(gmailLink, '_blank');
  };

  // Send WhatsApp message with complete details
  const sendWhatsAppMessage = (name, email, message) => {
    // Your WhatsApp number with country code (India: +91)
    const phoneNumber = "8524867725"; // Replace with your number
    
    // Create detailed WhatsApp message
    const whatsappMessage = `📬 *New Contact Form Submission*

👤 *Name:* ${name}
📧 *Email:* ${email}
🕐 *Time:* ${new Date().toLocaleString()}

📝 *Message:*
${message}

---
From: Yogasunder's Portfolio Website`;
    
    // Create WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappLink, '_blank');
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { name, email, message } = formData;
    
    // Validate form
    if (!name || !email || !message) {
      setSubmitStatus({ type: 'error', message: '⚠️ Please fill in all fields' });
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus({ type: 'error', message: '⚠️ Please enter a valid email address' });
      setTimeout(() => setSubmitStatus(null), 3000);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: 'info', message: '⏳ Opening Gmail & WhatsApp...' });

    try {
      // Send email via Gmail with the form data
      sendEmailViaGmail(name, email, message);
      
      // Send WhatsApp message with the form data
      sendWhatsAppMessage(name, email, message);
      
      // Success message
      setSubmitStatus({ 
        type: 'success', 
        message: '✅ Message sent! Check Gmail and WhatsApp.' 
      });
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
      }, 1000);
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: '❌ Error sending message. Please try again.' 
      });
      setTimeout(() => setSubmitStatus(null), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          {/* Contact Info */}
          <div className="info-card card">
            <h3>Contact Information</h3>
            <div className="info-items">
              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>{personalInfo.email}</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>{personalInfo.location}</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">📱</span>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+91 8524867725</p>
                </div>
              </div>
              <div className="info-item">
                <span className="info-icon">💼</span>
                <div>
                  <h4>Availability</h4>
                  <p>Open to opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form card">
            <h3>Send a Message</h3>
            <p style={{ color: 'var(--gray-light)', marginBottom: '25px', fontSize: '0.95rem' }}>
              Fill in the details below and I'll get back to you via email.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label htmlFor="name">Your Name</label>
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  required
                />
                <label htmlFor="email">Your Email</label>
              </div>
              
              <div className="form-group">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder=" "
                  rows="5"
                  required
                />
                <label htmlFor="message">Your Message</label>
              </div>

              {submitStatus && (
                <div className={`submit-status ${submitStatus.type}`}>
                  {submitStatus.message}
                </div>
              )}

              <button type="submit" className="btn" disabled={isSubmitting}>
                {isSubmitting ? '⏳ Sending...' : '✉️ Send Message'}
              </button>
              
              <div className="contact-note">
                <p>📌 Message will be sent via <strong>Gmail</strong></p>
                <p style={{ fontSize: '0.8rem', opacity: 0.7, marginTop: '5px' }}>
                  You'll be redirected to compose emails
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;