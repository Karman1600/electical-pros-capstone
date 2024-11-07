'use client';

import { useState } from 'react';

const Controls = ({ onChange }) => {
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);

  const handleRotationChange = (e) => {
    const newRotation = e.target.value;
    setRotation(newRotation);
    onChange({ rotation: newRotation, scale });
  };

  const handleScaleChange = (e) => {
    const newScale = e.target.value;
    setScale(newScale);
    onChange({ rotation, scale: newScale });
  };

  return (
    <div className="space-y-4 p-4 bg-white rounded shadow-md max-w-sm mx-auto">
      <div>
        <label className="block text-sm font-medium text-gray-700">Rotation (Degrees)</label>
        <input
          type="range"
          min="0"
          max="360"
          value={rotation}
          onChange={handleRotationChange}
          className="w-full"
        />
        <p className="text-center">{rotation}°</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Scale</label>
        <input
          type="range"
          min="0.5"
          max="3"
          step="0.1"
          value={scale}
          onChange={handleScaleChange}
          className="w-full"
        />
        <p className="text-center">{scale}x</p>
      </div>
    </div>
  );
};

export default Controls;
