"use client";
import React, { useState } from 'react';
function SafetyInspection() {
    // State for cost estimation form
    const [estimate, setEstimate] = useState(null);
    const [inputValues, setInputValues] = useState({
        area: 0, // Area of the house in square meters
    });

    // Define fixed inspection cost per square meter
    const inspectionCostPerSquareMeter = 13; // Example inspection cost per square meter

    // Handle form submission
    const handleEstimate = (event) => {
        event.preventDefault();
        
        const totalCost = inspectionCostPerSquareMeter * inputValues.area; // Total cost formula

        setEstimate({
            totalCost,
        });
    };

    return (
        <div className="font-sans text-gray-800 bg-[#f9f9f9] p-5">
            {/* Service Detail */}
            <section className="max-w-5xl mx-auto p-10 bg-white rounded-lg shadow-md text-center">
                <h1 className="text-4xl font-bold mb-5 text-gray-800">Safety Inspections</h1>
                <p className="text-lg leading-8 mb-4">
                Our Safety Inspections service ensures that your electrical systems are up to code and safe for use. We conduct thorough inspections of wiring, outlets, panels, and other electrical components to identify potential hazards and recommend necessary upgrades or repairs. Regular safety inspections can prevent electrical fires, reduce the risk of electrocution, and ensure the longevity of your electrical systems.
                </p>
            </section>

            {/* Cost Estimation Section */}
            <section className="max-w-5xl mx-auto p-10 bg-white rounded-lg shadow-md mt-10">
                <h2 className="text-3xl font-bold mb-5 text-gray-800">Cost Estimation</h2>
                <form onSubmit={handleEstimate}>
                    <div className="mb-4">
                        <label className="block text-lg mb-2">Area of the House (in square meters)</label>
                        <input
                            type="number"
                            value={inputValues.area}
                            onChange={(e) => setInputValues({ ...inputValues, area: e.target.value })}
                            className="border p-2 w-full rounded"
                            required
                        />
                    </div>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Estimate Cost
                    </button>
                </form>

                {/* Display the estimate */}
                {estimate && (
                    <div className="mt-5">
                        <h3 className="text-2xl font-bold mt-3">Estimated Total Cost: ${estimate.totalCost}</h3>
                    </div>
                )}
            </section>
        </div>
    );
}

export default SafetyInspection;