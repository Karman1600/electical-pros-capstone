// components/Quiz.js
'use client'; // This directive ensures that the component is rendered on the client side

// Importing React and the useState hook for managing component state
import React, { useState } from 'react';

// Importing a custom component named RoomModel from the specified path
import RoomModel from 'app/_components/RoomModel'; 

// Defining the Quiz component
const Quiz = () => {
  // State variable for storing the selected appliance; initialized as an empty string
  const [appliance, setAppliance] = useState('');

  // State variable for storing the selected wiring type; initialized as an empty string
  const [wiring, setWiring] = useState('');

  // State variable to determine whether to show the room model; initialized as false
  const [showRoomModel, setShowRoomModel] = useState(false);

  // Function to handle the form submission
  const handleSubmit = () => {
    // Check if both appliance and wiring are selected
    if (appliance && wiring) {
      // If selections are valid, set showRoomModel to true to display the room model
      setShowRoomModel(true);
    } else {
      // If either selection is missing, show an alert to the user
      alert("Please select both appliance and wiring type.");
    }
  };

  // The return statement defines the UI layout of the component
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mt-10">
      {/* Conditionally render content based on whether the room model should be shown */}
      {!showRoomModel ? (
        <>
          {/* Heading for the quiz */}
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Select Your Appliances and Wiring
          </h2>

          {/* Dropdown for selecting an appliance */}
          <label className="block mb-3">
            <span className="text-gray-700">Select Appliance:</span>
            <select 
              value={appliance} 
              onChange={(e) => setAppliance(e.target.value)} // Update appliance state on change
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              {/* Option to prompt the user to choose */}
              <option value="">Choose an appliance</option>
              {/* Specific appliance options */}
              <option value="projector">Projector</option>
              <option value="heatingSystem">Heating System</option>
              <option value="airConditioner">Air Conditioner</option>
              <option value="soundSystem">Sound System</option>
            </select>
          </label>

          {/* Dropdown for selecting wiring type */}
          <label className="block mb-3">
            <span className="text-gray-700">Select Wiring:</span>
            <select 
              value={wiring} 
              onChange={(e) => setWiring(e.target.value)} // Update wiring state on change
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              {/* Option to prompt the user to choose */}
              <option value="">Choose wiring type</option>
              {/* Specific wiring options */}
              <option value="standardWiring">Standard Wiring</option>
              <option value="smartWiring">Smart Wiring</option>
            </select>
          </label>

          {/* Button to submit the form */}
          <button 
            onClick={handleSubmit} // Call handleSubmit function when clicked
            className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Generate 3D Model
          </button>
        </>
      ) : (
        // If showRoomModel is true, render the RoomModel component with the selected props
        <RoomModel appliance={appliance} wiring={wiring} />
      )}
    </div>
  );
};

// Exporting the Quiz component to be used in other parts of the application
export default Quiz;
