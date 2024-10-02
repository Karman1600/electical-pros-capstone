"use client"; 

import React, { useState } from 'react';

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
    <section id="contact" className="py-10 bg-gray-100">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
        <div className="container">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fname" className="block text-sm font-medium text-gray-700">First Name</label>
              <input 
                type="text" 
                id="fname" 
                name="firstname" 
                placeholder="Your name.." 
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="lname" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input 
                type="text" 
                id="lname" 
                name="lastname" 
                placeholder="Your last name.." 
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
              <textarea 
                id="subject" 
                name="subject" 
                placeholder="Write something.." 
                style={{ height: '200px' }} 
                className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>

            <div>
              <input 
                type="submit" 
                value="Submit" 
                className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </form>
        </div>
      </div>

      <footer className="text-center mt-10">
        <p>
          Contact Us: <a href="mailto:info@electrical-pros.com" className="text-indigo-600 underline">info@electrical-pros.com</a>
        </p>
      </footer>
    </section>
  );
}

export default ContactUs;
