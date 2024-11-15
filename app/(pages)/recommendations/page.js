'use client';

import { useState } from 'react';
import ServiceSelection from './ServiceSelection';  // Service selection component
import ImageUpload from './ImageUpload';  // Image upload component
import ThreeDModel from './ThreeDModel';  // 3D model rendering component

const RecommendationsPage = () => {
  const [selectedService, setSelectedService] = useState(null);  // State for selected service
  const [uploadedImage, setUploadedImage] = useState(null);  // State for uploaded image

  // Handle the service selection
  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  // Handle image upload
  const handleImageUpload = (image) => {
    setUploadedImage(image);
  };

  return (
    <div>
      <h1>Electrical Consultancy Services</h1>
      
      {/* Service selection */}
      {!selectedService && <ServiceSelection onSelect={handleServiceSelect} />}

      {/* If a service is selected, show the service details and image upload */}
      {selectedService && (
        <div>
          <h2>{selectedService.name}</h2>
          <p>{selectedService.description}</p>
          
          {/* Image upload component */}
          <ImageUpload onImageUpload={handleImageUpload} />

          {/* Show the 3D model once an image is uploaded */}
          {uploadedImage ? (
            <div>
              <p>Uploaded image: {uploadedImage.name}</p>
              <ThreeDModel modelPath={selectedService.modelPath} />
            </div>
          ) : (
            <p>Please upload an image to render the 3D model.</p>
          )}
        </div>
      )}
      
      {/* Display a message if no service is selected */}
      {!selectedService && (
        <p>Please select a service to proceed.</p>
      )}
    </div>
  );
};

export default RecommendationsPage;
