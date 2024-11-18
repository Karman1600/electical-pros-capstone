'use client';

import React, { useState } from "react";

// Service data with detailed information
const services = [
  {
    id: 1,
    name: "Consulting Services",
    description: "Strategic advice and technical expertise for all industries.",
    isCommercial: true,
    minBudget: 1000,
    maxArea: 5000,
  },
  {
    id: 2,
    name: "Solution Design",
    description:
      "Tailored electrical solutions for commercial, residential, and industrial spaces.",
    isCommercial: true,
    minBudget: 3000,
    maxArea: 10000,
  },
  {
    id: 3,
    name: "Electrical Engineering Drawing",
    description:
      "Detailed engineering drawings ensuring safety and compliance.",
    isCommercial: false,
    minBudget: 1500,
    maxArea: 3000,
  },
  {
    id: 4,
    name: "Maintenance Services",
    description:
      "Regular and corrective maintenance for all electrical systems.",
    isCommercial: false,
    minBudget: 500,
    maxArea: 2000,
  },
  {
    id: 5,
    name: "System Analysis",
    description:
      "Comprehensive analysis of electrical systems to enhance performance.",
    isCommercial: true,
    minBudget: 2000,
    maxArea: 8000,
  },
  {
    id: 6,
    name: "Project Consulting",
    description:
      "End-to-end consulting services for successful project execution.",
    isCommercial: true,
    minBudget: 2500,
    maxArea: 6000,
  },
  {
    id: 7,
    name: "Training and Development",
    description:
      "Specialized training programs to develop technical expertise.",
    isCommercial: false,
    minBudget: 1000,
    maxArea: 4000,
  },
];

export default function Recommendations() {
  const [budget, setBudget] = useState("");
  const [area, setArea] = useState("");
  const [isCommercial, setIsCommercial] = useState(false);
  const [filteredServices, setFilteredServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [image, setImage] = useState(null);

  const costEstimate = 500; // Hardcoded example cost
  const timeEstimate = "3-5 business days"; // Hardcoded example time

  const handleSubmit = (e) => {
    e.preventDefault();
    const recommendations = services.filter((service) => {
      return (
        service.isCommercial === isCommercial &&
        service.minBudget <= budget &&
        service.maxArea >= area
      );
    });
    setFilteredServices(recommendations);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">Service Recommendations</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label htmlFor="budget" className="block text-lg font-semibold mb-2">
            Budget ($):
          </label>
          <input
            type="number"
            id="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="area" className="block text-lg font-semibold mb-2">
            Area (sq ft):
          </label>
          <input
            type="number"
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Is the property commercial?</label>
          <input
            type="checkbox"
            checked={isCommercial}
            onChange={(e) => setIsCommercial(e.target.checked)}
            className="mr-2"
          />
          <span>Yes</span>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-lg"
        >
          Get Recommendations
        </button>
      </form>
      <div className="mt-10">
        {filteredServices.length > 0 ? (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-6">Recommended Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-5 rounded-lg shadow-md cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                >
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-lg">No services match your criteria.</p>
        )}
      </div>
      {selectedService && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Upload an Image for {selectedService.name}
          </h2>
          <input
            type="file"
            onChange={handleImageChange}
            className="block mx-auto p-2 border rounded-lg"
          />
          {image && (
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">Uploaded Image</h3>
              <img src={image} alt="Uploaded" className="max-w-xs mx-auto" />
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Cost and Time Estimate</h3>
                <p>Estimated Cost: ${costEstimate}</p>
                <p>Estimated Time: {timeEstimate}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
