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
          <h2 className="text-3xl font-bold mb-3">Consulting Services</h2>
          <p className="text-lg leading-8">
            Our consulting services are designed to help clients in the oil and gas industry navigate complex challenges and achieve operational excellence. We provide strategic advice, technical expertise, and innovative solutions tailored to meet specific needs.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-3">Solution Design</h2>
          <p className="text-lg leading-8">
            We specialize in designing electrical systems for commercial, residential, and industrial buildings, as well as public infrastructure. Our solutions are crafted to ensure efficiency and sustainability.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-3">Electrical Engineering Drawing</h2>
          <p className="text-lg leading-8">
            We provide detailed engineering drawings essential for the efficient setup, maintenance, and operation of electrical systems, ensuring safety and compliance with industry standards.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-3">Maintenance Services</h2>
          <p className="text-lg leading-8">
            Our maintenance services ensure that your electrical systems operate efficiently and safely. We offer both regular and corrective maintenance to address potential issues proactively.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
