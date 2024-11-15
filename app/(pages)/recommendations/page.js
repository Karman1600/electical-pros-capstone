// recommendations/RecommendationsPage.js
'use client';

import { useState } from 'react';
import ServiceSelection from './ServiceSelection';
import ImageUpload from './ImageUpload';
import ServiceRoomModel from './ServiceRoomModel'; // Updated import

const RecommendationsPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleImageUpload = (image) => {
    setUploadedImage(image);
  };

  return (
    <div>
      <h1>Electrical Consultancy Services</h1>
      
      {/* Service Selection */}
      {!selectedService && <ServiceSelection onSelect={handleServiceSelect} />}

      {/* Display Selected Service and 3D Model */}
      {selectedService && (
        <div>
          <h2>{selectedService.name}</h2>
          <p>{selectedService.description}</p>

          {/* Image Upload */}
          <ImageUpload onImageUpload={handleImageUpload} />

          {/* Display 3D model only if an image is uploaded */}
          {uploadedImage && (
            <ServiceRoomModel service={selectedService.name} />
          )}
        </div>
      )}
    </div>
  );
};

export default RecommendationsPage;
