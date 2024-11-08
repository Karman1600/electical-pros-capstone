"use client";
import React, { useState } from 'react';
import UploadForm from '../shared/UploadForm';
import Viewer3D from '../shared/Viewer3D';
import Controls from '../shared/Controls';

// Define realistic area values in square meters for each recommendation
const recommendationsData = [
  { id: 1, name: 'Lighting Installation', description: 'Install customized lighting for your space.', budget: 'low', areaRange: [10, 50], projectType: 'residential' },
  { id: 2, name: 'Electrical Wiring', description: 'Upgrade or install electrical wiring in your building.', budget: 'medium', areaRange: [50, 200], projectType: 'commercial' },
  { id: 3, name: 'Solar Panel Installation', description: 'Install solar panels for energy efficiency.', budget: 'high', areaRange: [100, 500], projectType: 'commercial' },
];

// Setting Up State Variables
const RecommendationsPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [modelUrl, setModelUrl] = useState(null);

  // Filter criteria states
  const [budget, setBudget] = useState('');
  const [area, setArea] = useState(''); // Area input field for custom value
  const [projectType, setProjectType] = useState('');

  const handleRecommendationSelect = (service) => {
    setSelectedService(service);
    // Load 3D model based on selected service
    if (service.name === 'Lighting Installation') {
      setModelUrl('/models/lighting.gltf');
    } else if (service.name === 'Electrical Wiring') {
      setModelUrl('/models/wiring.gltf');
    } else if (service.name === 'Solar Panel Installation') {
      setModelUrl('/models/solar_panel.gltf');
    }
  };

  const handleImageUpload = (file) => {
    setImageFile(file);
  };

  const handleModelPositionChange = (direction) => {
    // Add logic to move the 3D model position if needed
  };

  // Filter services based on the selected criteria
  const filteredRecommendations = recommendationsData.filter((service) => {
    const minArea = service.areaRange[0];
    const maxArea = service.areaRange[1];
    const areaValue = parseFloat(area);

    return (
      (budget ? service.budget === budget : true) &&
      (area ? areaValue >= minArea && areaValue <= maxArea : true) && // Filter based on entered area
      (projectType ? service.projectType === projectType : true)
    );
  });

  return (
    <div className="space-y-8">
      <div className="flex gap-4">
        <select value={budget} onChange={(e) => setBudget(e.target.value)} className="p-2 border rounded">
          <option value="">Select Budget</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>

        {/* Input for specific area in square meters */}
        <input 
          type="number" 
          placeholder="Enter area (e.g., 20 for small or 300 for large)" 
          value={area} 
          onChange={(e) => setArea(e.target.value)} 
          className="p-2 border rounded"
          min="0"
        />

        <select value={projectType} onChange={(e) => setProjectType(e.target.value)} className="p-2 border rounded">
          <option value="">Select Project Type</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>
      </div>

      {/* Render filtered recommendations */}
      <div className="space-y-4 mt-8">
        {filteredRecommendations.length === 0 && (
          <p>No recommendations match your selected criteria.</p>
        )}
        {filteredRecommendations.map((service) => (
          <div
            key={service.id}
            className="p-4 border rounded cursor-pointer hover:bg-gray-100"
            onClick={() => handleRecommendationSelect(service)}
          >
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p>{service.description}</p>
            <p>Suggested area: {service.areaRange[0]} - {service.areaRange[1]} m²</p>
          </div>
        ))}
      </div>

      {selectedService && (
        <>
          <h2 className="text-2xl font-semibold">You Selected: {selectedService.name}</h2>
          <UploadForm onImageUpload={handleImageUpload} />
          {imageFile && (
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Preview Your Site</h3>
              <Viewer3D modelUrl={modelUrl} />
              <Controls onModelPositionChange={handleModelPositionChange} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RecommendationsPage;
