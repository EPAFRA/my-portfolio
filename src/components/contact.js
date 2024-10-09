// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully:', response);
        alert('Message sent! Thank you for reaching out.');
        setFormData({ name: '', email: '', message: '' }); // Reset form fields
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>

          <div className="contact-info">
            <p>You can also reach me at:</p>
            <ul>
              <li>Email: <a href="mailto:enockepafra141@gmail.com">enockepafra141@gmail.com</a></li>
              <li>LinkedIn: <a href="https://www.linkedin.com/in/enock-epafra-445909236/" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/enock-epafra</a></li>
              <li>GitHub: <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">your-github</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
