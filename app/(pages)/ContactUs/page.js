"use client"; 
import React, { useState } from 'react';

function ContactUs() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (fullName && email && message) {
      setIsSubmitted(true);
    } else {
      alert('Please fill out all fields.');
    }
  };

  const closePopup = () => {
    setIsSubmitted(false);
    setFullName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen flex items-center bg-gray-100 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: 'url("https://t3.ftcdn.net/jpg/02/99/23/72/360_F_299237262_Cj3wYz3HK7Aak1qNW4biP268qL1wphOr.jpg")' }}
      />
      <div className="relative z-10 flex w-full">
        {/* Contact Info Section */}
        <div className="w-1/2 p-8 flex flex-col justify-center text-black">
          <h1 className="text-4xl font-semibold mb-6">Contact Information</h1>
          <p>If you have any questions, feel free to reach out!</p>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Email</h2>
            <p>Electricalproshiring@outlook.com</p>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Phone</h2>
            <p>(778) 908-7119</p>
          </div>
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Address</h2>
            <p>3315 Siskin Drive, Abbotsford, B.C.</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-1/3 p-8 bg-white bg-opacity-80 rounded-lg shadow-lg ml-8">
          <h1 className="text-4xl font-semibold mb-6">Contact Us</h1>
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-black">Full Name</label>
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
              <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
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
              <label htmlFor="message" className="block text-sm font-medium text-black">Message</label>
              <textarea 
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                rows="4"
                className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-2 rounded-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>

          {isSubmitted && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 text-center">
                <h2 className="text-2xl font-semibold">Message Sent</h2>
                <p>Your message has been successfully sent!</p>
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
    </div>
  );
}

export default ContactUs;
