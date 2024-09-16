"use client"; 

import React, { useState } from 'react';
import './styles.css'; 

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your message has been sent!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-item">
          <h2>Phone:</h2>
          <p>(778) 908-7119</p>
        </div>
        <div className="contact-item">
          <h2>Physical Address:</h2>
          <p>3315 Siskin Drive,</p>
          <p>Abbotsford, B.C.</p>
        </div>
        <div className="contact-item">
          <h2>Email Address:</h2>
          <p><a href="mailto:Electricalproshiring@outlook.com">Electricalproshiring@outlook.com</a></p>
        </div>
      </div>
      <div className="get-in-touch">
        <h2>Get in Touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
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
            <label htmlFor="email">Email:</label>
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
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <footer className="footer">
        <p>Copyright © 2024 - Electrical-Pros</p>
      </footer>
    </div>
  );
}

export default ContactUs;
