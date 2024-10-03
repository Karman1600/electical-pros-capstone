"use client";
import React from 'react';

function Services() {
  return (
    <div className="font-sans text-gray-800 bg-[#d4d1bb] p-5">
      {/* Services Section */}
      <section className="max-w-3xl mx-auto p-10 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-5 text-gray-800">Our Services</h1>
        <p className="text-lg leading-8 mb-4">
          We offer a comprehensive range of professional services tailored to meet the unique needs of each client. Our expertise spans from consulting to hands-on project implementation, ensuring your electrical systems are both robust and efficient.
        </p>
      </section>

      {/* Service Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-3">Commercial Electrical Design</h2>
          <p className="text-lg leading-8">
            Complete electrical design for commercial buildings, ensuring all systems are efficient and up to modern standards.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-3">Residential Electrical Installation</h2>
          <p className="text-lg leading-8">
            Electrical installation services for residential complexes, focusing on safety, efficiency, and sustainability.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-3">Industrial Power Systems</h2>
          <p className="text-lg leading-8">
            Comprehensive power system design for industrial sites, providing robust and scalable solutions.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-3">Home Electrical Repairs</h2>
          <p className="text-lg leading-8">
            Repair and maintenance of electrical systems in homes, ensuring safety and longevity.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-3">Factory Power Distribution</h2>
          <p className="text-lg leading-8">
            Electrical distribution system setup for factories, optimizing for reliability and energy efficiency.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-3">Electrical System Consultation</h2>
          <p className="text-lg leading-8">
            Consultation services for complex electrical systems, offering expert advice and solutions.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-3">Smart Home Wiring</h2>
          <p className="text-lg leading-8">
            Setup of smart home wiring and IoT devices for modern, connected living spaces.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-3">Solar Panel Installation</h2>
          <p className="text-lg leading-8">
            Installation and maintenance of industrial-scale solar panels for sustainable energy solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
