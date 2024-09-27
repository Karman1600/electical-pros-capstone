"use client"; 
import React, { useState } from 'react';


function AppointmentPage() {
  const [service, setService] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (service && fullName && email && mobile) {
      setIsBooked(true);
    } else {
      alert('Please fill out all fields.');
    }
  };

  const closePopup = () => {
    setIsBooked(false);
    setService('');
    setFullName('');
    setEmail('');
    setMobile('');
  };

  return (
    <div className="appointment-container">
      <h1>Book an Appointment</h1>
      <form className="appointment-form" onSubmit={handleFormSubmit}>
        <label htmlFor="service">Select Service</label>
        <select id="service" value={service} onChange={handleServiceChange}>
          <option value="">--Select a Service--</option>
          <option value="Consulting Services">Consulting Services</option>
          <option value="Solution Design">Solution Design</option>
          <option value="Electrical Engineering Drawing">Electrical Engineering Drawing</option>
          <option value="System Analysis">System Analysis</option>
          <option value="Project Consulting">Project Consulting</option>
          <option value="Maintenance Services">Maintenance Services</option>
          <option value="Training and Development">Training and Development</option>
        </select>

        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter your full name"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label htmlFor="mobile">Mobile Number</label>
        <input
          type="tel"
          id="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Enter your mobile number"
        />

        <button type="submit">Book Appointment</button>
      </form>

      {isBooked && (
        <div className="popup">
          <div className="popup-content">
            <h2>Appointment Confirmed</h2>
            <p>Your appointment for <strong>{service}</strong> has been successfully booked!</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AppointmentPage;
