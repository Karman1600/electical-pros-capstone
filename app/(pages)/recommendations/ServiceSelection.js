"use client";
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
    description: "Tailored electrical solutions for commercial, residential, and industrial spaces.",
    isCommercial: true,
    minBudget: 3000,
    maxArea: 10000,
  },
  {
    id: 3,
    name: "Electrical Engineering Drawing",
    description: "Detailed engineering drawings ensuring safety and compliance.",
    isCommercial: false,
    minBudget: 1500,
    maxArea: 3000,
  },
  {
    id: 4,
    name: "Maintenance Services",
    description: "Regular and corrective maintenance for all electrical systems.",
    isCommercial: false,
    minBudget: 500,
    maxArea: 2000,
  },
];

// Service names only
const servicesData = [
  { id: 1, name: "Consulting Services" },
  { id: 2, name: "Solution Design" },
  { id: 3, name: "Electrical Engineering Drawing" },
  { id: 4, name: "System Analysis" },
  { id: 5, name: "Project Consulting" },
  { id: 6, name: "Maintenance Services" },
  { id: 7, name: "Training and Development" },
];

export default function Recommendations() {
  const [budget, setBudget] = useState("");
  const [area, setArea] = useState("");
  const [isCommercial, setIsCommercial] = useState(false);
  const [filteredServices, setFilteredServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [image, setImage] = useState(null);

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
      setImage(URL.createObjectURL(file)); // Create a URL for the image file
    }
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">Service Recommendations</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2 text-black" htmlFor="budget">Budget ($):</label>
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
          <label className="block text-lg font-semibold mb-2 text-black" htmlFor="area">Area (sq ft):</label>
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
          <label className="block text-lg font-semibold mb-2 text-black">Is the property commercial?</label>
          <input
            type="checkbox"
            checked={isCommercial}
            onChange={(e) => setIsCommercial(e.target.checked)}
            className="mr-2"
          />
          <span className="text-black">Yes</span>
        </div>

        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded-lg">
          Get Recommendations for your services
        </button>
      </form>

      <div className="mt-10">
        {filteredServices.length > 0 ? (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-6 text-black">Recommended Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-5 rounded-lg shadow-md cursor-pointer"
                  onClick={() => handleServiceClick(service)}
                >
                  <h3 className="text-xl font-bold text-black">{service.name}</h3>
                  <p className="text-black">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center text-lg text-black">No services match your criteria.</p>
        )}
      </div>

      {/* Display image upload and 3D model for selected service */}
      {selectedService && (
        <div className="mt-10">
          <h2 className="text-2xl font-semibold text-center mb-6 text-black">
            Upload an Image for {selectedService.name}
          </h2>
          <input
            type="file"
            onChange={handleImageChange}
            className="block mx-auto p-2 border rounded-lg"
          />

          {image && (
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-black">Uploaded Image</h3>
              <img src={image} alt="Uploaded" className="max-w-xs mx-auto" />
            </div>
          )}

          {/* Add 3D model display here */}
          {image && (
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-black">3D Model</h3>
              {/* Placeholder for 3D model display */}
              <div
                id="modelContainer"
                style={{ width: "400px", height: "400px", background: "#e0e0e0" }}
              >
                {/* You can integrate a 3D rendering library like Three.js here */}
                {/* Example placeholder */}
                <p>3D model of {selectedService.name}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
