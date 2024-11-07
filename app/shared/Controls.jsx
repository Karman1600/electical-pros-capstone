// app/shared/Controls.jsx
import React from 'react';

const Controls = ({ onModelPositionChange }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">3D Model Controls</h3>
      <div className="flex justify-between">
        <button
          className="bg-blue-500 text-white p-2 rounded-lg"
          onClick={() => onModelPositionChange('left')}
        >
          Move Left
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-lg"
          onClick={() => onModelPositionChange('right')}
        >
          Move Right
        </button>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-blue-500 text-white p-2 rounded-lg"
          onClick={() => onModelPositionChange('up')}
        >
          Move Up
        </button>
        <button
          className="bg-blue-500 text-white p-2 rounded-lg"
          onClick={() => onModelPositionChange('down')}
        >
          Move Down
        </button>
      </div>
    </div>
  );
};

export default Controls;
