import { useState } from 'react';
import UploadForm from './components/UploadForm';
import Viewer3D from './components/Viewer3D';

const RecommendationsPage = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleUploadSuccess = (file) => {
    setUploadedFile(file);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center mb-8">Electrical Consultancy Recommendations</h1>
      {!uploadedFile ? (
        <UploadForm onUploadSuccess={handleUploadSuccess} />
      ) : (
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold">Your Uploaded Image</h2>
          <div className="text-center">
            <img
              src={`/uploads/${uploadedFile.filename}`}
              alt="Uploaded Site"
              className="max-w-full h-auto rounded-lg"
            />
          </div>
          <Viewer3D imageFile={uploadedFile} />
        </div>
      )}
    </div>
  );
};

export default RecommendationsPage;
