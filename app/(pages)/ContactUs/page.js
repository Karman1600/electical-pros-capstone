"use client";
import React, { useState } from 'react';

function ContactUsPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (fullName && email && mobile && message) {
      setIsSent(true);
    } else {
      alert('Please fill out all fields.');
    }
  };

  const closePopup = () => {
    setIsSent(false);
    setFullName('');
    setEmail('');
    setMobile('');
    setMessage('');
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-between p-6 h-screen">
      {/* Left side: Contact information */}
      <div className="absolute bottom-0 left-0 mb-4 ml-4 w-1/2 md:w-1/4">
        <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
        <p><strong>Phone:</strong> (778)908-7119</p>
        <p className="mt-2"><strong>Physical Address:</strong><br />
          3315 SISKIN DRIVE, <br />
          ABBOTSFORD, B.C.
        </p>
        <p className="mt-2"><strong>Email Address:</strong><br />
          Electricalproshiring@outlook.com
        </p>
      </div>

      {/* Right side: Contact form */}
      <div className="w-full md:w-1/2 ml-auto">
        <h1 className="text-3xl font-bold mb-6 text-right">Send Us a Message</h1>
        <form className="space-y-4" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="fullName" className="block font-medium">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="mobile" className="block font-medium">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your mobile number"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2"
              rows="4"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>

        {isSent && (
          <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md text-center space-y-4">
              <h2 className="text-xl font-semibold">Message Sent</h2>
              <p>Your message has been sent successfully!</p>
              <button
                onClick={closePopup}
                className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
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

export default ContactUsPage;
