// ThreeDModel.js
import { useEffect } from 'react';

const ThreeDModel = ({ modelPath, selectedService, uploadedImage }) => {
  useEffect(() => {
    if (modelPath) {
      // Logic to load the 3D model using the modelPath
      console.log("Loading 3D model from:", modelPath);
      // You might use libraries like Three.js here to load and display the 3D model
    }
  }, [modelPath]);

  return (
    <div>
      {selectedService && uploadedImage ? (
        <>
          <p>Selected service: {selectedService.name}</p>
          <p>Uploaded image: {uploadedImage.name}</p>
          <p>Rendering model from {modelPath}</p>
        </>
      ) : (
        <p>Model not found.</p>
      )}
    </div>
  );
};

export default ThreeDModel;
