// app/shared/UploadForm.jsx
import React, { useState } from 'react';

const UploadForm = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      onImageUpload(file);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Upload Your Site Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="border border-gray-300 p-2 rounded-md"
      />
      {image && (
        <div className="mt-4">
          <img src={image} alt="Uploaded Preview" className="w-full h-auto rounded-lg" />
        </div>
      )}
    </div>
  );
};

export default UploadForm;
