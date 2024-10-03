"use client";
import React from 'react';
import Link from 'next/link';

function ServicesPage() {
  return (
    <div className="font-sans text-gray-800 bg-[#f9f9f9] p-5">
      <section className="max-w-5xl mx-auto p-10 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-5 text-gray-800">Services</h1>
        <p className="text-lg leading-8 mb-4">
          Our electrical consultancy services offer a range of expert solutions to meet your specific electrical needs.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 max-w-5xl mx-auto">
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-3">
            <Link href="/Services/electrical-installations">Electrical Installations & Upgrades</Link>
          </h2>
          <p className="text-lg leading-8">
            We specialize in wiring, panels, lighting, and appliance installations for both homes and businesses.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-3">Electrical Safety Inspections</h2>
          <p className="text-lg leading-8">
            We provide comprehensive inspections to ensure compliance with safety codes and identify potential hazards.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-3">Home Automation & Smart Systems</h2>
          <p className="text-lg leading-8">
            Enhance your lifestyle with smart lighting, security, and energy management systems.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-3">Surge Protection & Backup Generators</h2>
          <p className="text-lg leading-8">
            Protect your home and business from power surges and ensure backup power during outages.
          </p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-3">Lighting Design & Installation</h2>
          <p className="text-lg leading-8">
          Enhance the aesthetics and functionality of your space with tailored indoor and outdoor lighting solutions.Enhance the aesthetics and functionality of your space with tailored indoor and outdoor lighting solutions.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-3">EV Charger Installation</h2>
          <p className="text-lg leading-8">
            We install electric vehicle charging stations for both residential and commercial properties.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServicesPage;