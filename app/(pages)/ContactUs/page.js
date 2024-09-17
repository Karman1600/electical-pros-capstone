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
    <section id="contact" className="contact">
      <div className="contact-form">
        <h2>Contact Us</h2>
        <div className="container">
          <form action="action_page.php">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." />

            <label htmlFor="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

            <label htmlFor="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{height: '200px'}}></textarea>

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <footer id="contact">
        <p>
          Contact Us: <a href="mailto:info@electrical-pros.com">info@electrical-pros.com</a>
        </p>
      </footer>
    </section>
  );
}

export default ContactUs;
