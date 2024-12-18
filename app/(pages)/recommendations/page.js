'use client'; // Indicates this component is client-side rendered

import { useState } from 'react'; // Importing React's useState for state management
import ServiceSelection from './ServiceSelection'; // Component for selecting a service
import ImageUpload from './ImageUpload'; // Component for uploading an image
import ServiceRoomModel from './ServiceRoomModel'; // Component for displaying the 3D model of the service

const RecommendationsPage = () => {
  // State to store the selected service
  const [selectedService, setSelectedService] = useState(null);

  // State to store the uploaded image
  const [uploadedImage, setUploadedImage] = useState(null);

  // Function to handle the selection of a service
  const handleServiceSelect = (service) => {
    setSelectedService(service); // Updates the state with the selected service
  };

  // Function to handle the upload of an image
  const handleImageUpload = (image) => {
    setUploadedImage(image); // Updates the state with the uploaded image
  };

  return (
    <div>
      <h1>Electrical Consultancy Services</h1> {/* Page heading */}
      
      {/* Service Selection */}
      {/* If no service is selected, show the service selection component */}
      {!selectedService && <ServiceSelection onSelect={handleServiceSelect} />}

      {/* Display Selected Service and 3D Model */}
      {selectedService && (
        <div>
          {/* Display the selected service's name and description */}
          <h2>{selectedService.name}</h2>
          <p>{selectedService.description}</p>

          {/* Image Upload */}
          {/* Allow user to upload an image */}
          <ImageUpload onImageUpload={handleImageUpload} />

          {/* Display 3D model regardless of image upload */}
          <ServiceRoomModel service={selectedService.name} />
        </div>
      )}
    </div>
  );
};

export default RecommendationsPage;

export default RecommendationsPage;