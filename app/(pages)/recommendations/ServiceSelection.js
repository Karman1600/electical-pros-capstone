import React, { useState } from 'react';

const services = [
  {
    id: 1,
    name: "Consulting Services",
    description: "Strategic advice and technical expertise for all industries.",
    isCommercial: true,
    minBudget: 1000,
    maxArea: 5000,
    costEstimate: 2000,
    timeEstimate: "5-7 business days",
    detailedAnalysis: "Provides a full analysis of your project's requirements, including expert recommendations for optimal performance.",
    maintenanceSchedule: "Annual maintenance required after the first year of implementation.",
  },
  {
    id: 2,
    name: "Solution Design",
    description: "Tailored electrical solutions for commercial, residential, and industrial spaces.",
    isCommercial: true,
    minBudget: 3000,
    maxArea: 10000,
    costEstimate: 3500,
    timeEstimate: "7-10 business days",
    detailedAnalysis: "Comprehensive design to ensure system efficiency and compliance with local regulations.",
    maintenanceSchedule: "Regular system checks every six months for optimal performance.",
  },
  {
    id: 3,
    name: "Electrical Engineering Drawing",
    description: "Detailed electrical schematics and drawings for building plans and electrical systems.",
    isCommercial: true,
    minBudget: 2000,
    maxArea: 7000,
    costEstimate: 2500,
    timeEstimate: "4-6 business days",
    detailedAnalysis: "Precise drawings to meet electrical safety standards and facilitate smooth installation.",
    maintenanceSchedule: "Periodic drawing updates required based on system upgrades or modifications.",
  },
  {
    id: 4,
    name: "System Analysis",
    description: "Thorough analysis of existing systems to identify inefficiencies and propose optimizations.",
    isCommercial: true,
    minBudget: 1500,
    maxArea: 5000,
    costEstimate: 1800,
    timeEstimate: "3-5 business days",
    detailedAnalysis: "Analyzes system components, identifies bottlenecks, and provides actionable recommendations for optimization.",
    maintenanceSchedule: "Biannual reviews to ensure continued efficiency and functionality of the system.",
  },
  {
    id: 5,
    name: "Project Consulting",
    description: "Guidance and expert advice throughout your project lifecycle, from planning to implementation.",
    isCommercial: true,
    minBudget: 5000,
    maxArea: 20000,
    costEstimate: 7000,
    timeEstimate: "2-3 weeks",
    detailedAnalysis: "In-depth project assessment with expert recommendations for resource allocation, timelines, and risk mitigation.",
    maintenanceSchedule: "Continuous consultation through project phases and post-implementation support.",
  },
  {
    id: 6,
    name: "Maintenance Services",
    description: "Comprehensive maintenance plans to ensure ongoing system performance and reliability.",
    isCommercial: true,
    minBudget: 1000,
    maxArea: 5000,
    costEstimate: 1500,
    timeEstimate: "Ongoing service",
    detailedAnalysis: "Ensures that all systems are regularly monitored and maintained to avoid unscheduled downtime.",
    maintenanceSchedule: "Ongoing maintenance with monthly checks and updates as necessary.",
  },
  {
    id: 7,
    name: "Training and Development",
    description: "Customized training programs for teams to improve skills and knowledge in system management and operations.",
    isCommercial: true,
    minBudget: 2000,
    maxArea: 10000,
    costEstimate: 3000,
    timeEstimate: "1-2 weeks",
    detailedAnalysis: "Training sessions tailored to client needs, ensuring team competence in managing new systems.",
    maintenanceSchedule: "Periodic training refreshers based on new system updates or employee turnover.",
  }
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
                <h3 className="text-lg font-semibold">Cost Estimate</h3>
                <p>Estimated Cost: ${selectedService.costEstimate}</p>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Time Estimate</h3>
                <p>Estimated Time: {selectedService.timeEstimate}</p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Detailed Analysis and Reports</h3>
                <p>{selectedService.detailedAnalysis}</p>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Maintenance Scheduling</h3>
                <p>{selectedService.maintenanceSchedule}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
