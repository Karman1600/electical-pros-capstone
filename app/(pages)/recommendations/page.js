"use client";
import React, { useState } from 'react';
import UploadForm from '../shared/UploadForm';
import Viewer3D from '../shared/Viewer3D';
import Controls from '../shared/Controls';

const recommendationsData = [
  { id: 1, name: 'Lighting Installation', description: 'Install customized lighting for your space.', budget: 'low', area: 'small', weather: 'dry', projectType: 'residential' },
  { id: 2, name: 'Electrical Wiring', description: 'Upgrade or install electrical wiring in your building.', budget: 'medium', area: 'medium', weather: 'wet', projectType: 'commercial' },
  { id: 3, name: 'Solar Panel Installation', description: 'Install solar panels for energy efficiency.', budget: 'high', area: 'large', weather: 'sunny', projectType: 'commercial' },
];

const RecommendationsPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [modelUrl, setModelUrl] = useState(null);

  // Filter criteria states
  const [budget, setBudget] = useState('');
  const [area, setArea] = useState('');
  const [weather, setWeather] = useState('');
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
    return (
      (budget ? service.budget === budget : true) &&
      (area ? service.area === area : true) &&
      (weather ? service.weather === weather : true) &&
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
        
        <select value={area} onChange={(e) => setArea(e.target.value)} className="p-2 border rounded">
          <option value="">Select Area</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <select value={weather} onChange={(e) => setWeather(e.target.value)} className="p-2 border rounded">
          <option value="">Select Weather</option>
          <option value="dry">Dry</option>
          <option value="wet">Wet</option>
          <option value="sunny">Sunny</option>
        </select>

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
