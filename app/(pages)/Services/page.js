import React from 'react';
import './styles.css';

function Services() {
  return (
    <div className="services-container">
      <div className="services-header">
        <h1>Services</h1>
      </div>
      <div className="services-content">
        <div className="service-container">
          <h2>Consulting Services</h2>
          <p>Our consulting services are designed to help clients in the oil and gas industry navigate complex challenges and achieve operational excellence. We provide strategic advice, technical expertise, and innovative solutions tailored to meet the specific needs of each client.</p>
        </div>
        <div className="service-container">
          <h2>Solution Design</h2>
          <p>Design of electrical systems for commercial, residential, and industrial buildings, as well as public infrastructure.</p>
        </div>
        <div className="service-container">
          <h2>Electrical Engineering Drawing</h2>
          <p>We provide precise documentation and detailed designs necessary for the efficient setup, maintenance, and operation of electrical systems.</p>
        </div>
        <div className="service-container">
          <h2>System Analysis</h2>
          <p>From power distribution systems to load calculations, we ensure your electrical infrastructure is robust and efficient.</p>
        </div>
        <div className="service-container">
          <h2>Project Consulting</h2>
          <p>Professional electrical engineering consulting services to help clients adhere to best practices and comply with industry standards.</p>
        </div>
        <div className="service-container">
          <h2>Maintenance Services</h2>
          <p>Regular and corrective maintenance solutions to keep your electrical systems running smoothly and efficiently.</p>
        </div>
        <div className="service-container">
          <h2>Training and Development</h2>
          <p>Comprehensive programs to enhance the skills and knowledge of your team, including technical training, leadership development, and safety training.</p>
        </div>
      </div>
      <footer className="footer">
        <p>Copyright © 2024 - Electrical-Pros</p>
      </footer>
    </div>
  );
}

export default Services;
