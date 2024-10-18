"use client"; 
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS for the date picker

function AppointmentPage() {
  const [service, setService] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [selectedDate, setSelectedDate] = useState(null); // State for the selected date
  const [isBooked, setIsBooked] = useState(false);

  const handleServiceChange = (e) => {
    setService(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (service && fullName && email && mobile && selectedDate) {
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
    setSelectedDate(null); // Reset selected date
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: 'url("https://t3.ftcdn.net/jpg/02/99/23/72/360_F_299237262_Cj3wYz3HK7Aak1qNW4biP268qL1wphOr.jpg")' }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold mb-6 text-white">Book an Appointment</h1>
        <form 
          className="w-full max-w-lg bg-white bg-opacity-80 p-6 rounded-lg shadow-lg space-y-4" 
          onSubmit={handleFormSubmit}
        >
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">Select Service</label>
            <select 
              id="service" 
              value={service} 
              onChange={handleServiceChange} 
              className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">--Select a Service--</option>
              <option value="Consulting Services">Consulting Services</option>
              <option value="Solution Design">Solution Design</option>
              <option value="Electrical Engineering Drawing">Electrical Engineering Drawing</option>
              <option value="System Analysis">System Analysis</option>
              <option value="Project Consulting">Project Consulting</option>
              <option value="Maintenance Services">Maintenance Services</option>
              <option value="Training and Development">Training and Development</option>
            </select>
          </div>

          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input 
              type="text" 
              id="fullName" 
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
              className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input 
              type="tel" 
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
              className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Select Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              placeholderText="Select a date"
              dateFormat="yyyy/MM/dd"
              minDate={new Date()} // Prevent selection of past dates
              className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Book Appointment
          </button>
        </form>

        {isBooked && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 text-center">
              <h2 className="text-2xl font-semibold">Appointment Confirmed</h2>
              <p>Your appointment has been booked for <strong>{selectedDate ? selectedDate.toLocaleDateString() : ''}</strong> for <strong>{service}</strong>!</p>
              <button 
                onClick={closePopup} 
                className="bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AppointmentPage;