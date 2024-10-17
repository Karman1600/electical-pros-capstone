"use client";
import React, { useState } from "react";

function ElectricalInstallations() {
  const [estimate, setEstimate] = useState(null);
  const [plan, setPlan] = useState("basic");
  const [inputValues, setInputValues] = useState({
    area: 0,
    appliances: [],
  });

  // Define costs
  const laborCostPerSquareMeter = 5;
  const materialCostPerSquareMeter = 10;
  const applianceCosts = {
    projector: 100,
    heatingSystem: 200,
    airConditioner: 150,
    soundSystem: 120,
  };

  //to handle the estimates
  const handleEstimate = (event) => {
    event.preventDefault();

    let laborCost = laborCostPerSquareMeter * inputValues.area;
    let materialCost = materialCostPerSquareMeter * inputValues.area;
    let totalCost = laborCost + materialCost;

    if (plan === "advanced") {
      let applianceCost = inputValues.appliances.reduce(
        (total, appliance) => total + applianceCosts[appliance],
        0
      );
      totalCost += applianceCost;
      setEstimate({
        laborCost,
        materialCost,
        applianceCost,
        totalCost,
      });
    } else {
      setEstimate({
        laborCost,
        materialCost,
        totalCost,
      });
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-[#f9f9f9] p-5">
      <section className="max-w-5xl mx-auto p-10 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-4xl font-bold mb-5 text-gray-800">Electrical Installations & Upgrades</h1>
        <p className="text-lg leading-8 mb-4">
          Our Electrical Installations & Upgrades service covers complete wiring, panel upgrades, and installation of outlets and switches for both new constructions and existing properties.
        </p>
      </section>

      <section className="max-w-5xl mx-auto p-10 bg-white rounded-lg shadow-md mt-10">
        <h2 className="text-3xl font-bold mb-5 text-gray-800">Cost Estimation</h2>
        <form onSubmit={handleEstimate}>
          {/* Plan Selection */}
          <div className="mb-4">
            <label className="block text-lg mb-2">Select Plan</label>
            <select
              value={plan}
              onChange={(e) => {setPlan(e.target.value);
                                setEstimate(null)}}
              className="border p-2 w-full rounded"
            >
              <option value="basic">Basic Plan (Essential Appliances)</option>
              <option value="advanced">Advanced Plan (Additional Appliances)</option>
            </select>
          </div>

          {/* Plan Description */}
          {plan === "basic" && (
            <div className="mb-4 p-4 bg-gray-100 rounded">
              <p className="text-lg">
                <strong>Basic Plan:</strong> Covers essential appliances such as:
              </p>
              <ul className="list-disc list-inside">
                <li>Switches</li>
                <li>Bulbs</li>
                <li>Main Electric Control Panel</li>
              </ul>
            </div>
          )}

          {plan === "advanced" && (
            <div className="mb-4 p-4 bg-gray-100 rounded">
              <p className="text-lg">
                <strong>Advanced Plan:</strong> Includes the Basic Plan and allows you to select up to 4 additional appliances for cost estimation:
              </p>
              <ul className="list-disc list-inside">
                <li>Projector</li>
                <li>Heating System</li>
                <li>Air Conditioner</li>
                <li>Sound System</li>
              </ul>
              <p className="mt-2">
                If you need more appliances, please book an appointment with us for a custom estimate.
              </p>
            </div>
          )}

          {/* Area Input */}
          <div className="mb-4">
            <label className="block text-lg mb-2">Area of the House (in square meters)</label>
            <input
            type="number"
            value={inputValues.area}
            min={0}
            onChange={(e) => {
                const value = Math.max(0, parseInt(e.target.value, 10) || 0);
                setInputValues({ ...inputValues, area: value });
            }}
            className="border p-2 w-full rounded"
            required
            />
          </div>

          {/* Appliances Selection (Only for Advanced Plan) */}
          {plan === "advanced" && (
            <>
              <div className="mb-4">
                <label className="block text-lg mb-2">Select Appliances</label>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="projector"
                      onChange={(e) => {
                        const selectedAppliances = inputValues.appliances.includes(e.target.value)
                          ? inputValues.appliances.filter((appliance) => appliance !== e.target.value)
                          : [...inputValues.appliances, e.target.value];
                        setInputValues({ ...inputValues, appliances: selectedAppliances });
                      }}
                    /> Projector
                  </label>
                  <label className="ml-4">
                    <input
                      type="checkbox"
                      value="heatingSystem"
                      onChange={(e) => {
                        const selectedAppliances = inputValues.appliances.includes(e.target.value)
                          ? inputValues.appliances.filter((appliance) => appliance !== e.target.value)
                          : [...inputValues.appliances, e.target.value];
                        setInputValues({ ...inputValues, appliances: selectedAppliances });
                      }}
                    /> Heating System
                  </label>
                  <label className="ml-4">
                    <input
                      type="checkbox"
                      value="airConditioner"
                      onChange={(e) => {
                        const selectedAppliances = inputValues.appliances.includes(e.target.value)
                          ? inputValues.appliances.filter((appliance) => appliance !== e.target.value)
                          : [...inputValues.appliances, e.target.value];
                        setInputValues({ ...inputValues, appliances: selectedAppliances });
                      }}
                    /> Air Conditioner
                  </label>
                  <label className="ml-4">
                    <input
                      type="checkbox"
                      value="soundSystem"
                      onChange={(e) => {
                        const selectedAppliances = inputValues.appliances.includes(e.target.value)
                          ? inputValues.appliances.filter((appliance) => appliance !== e.target.value)
                          : [...inputValues.appliances, e.target.value];
                        setInputValues({ ...inputValues, appliances: selectedAppliances });
                      }}
                    /> Sound System
                  </label>
                </div>
              </div>
            </>
          )}

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Estimate Cost
          </button>
        </form>

        {/* Display the estimate */}
        {estimate && (
          <div className="mt-5">
            <h3 className="text-2xl font-bold">Labor Cost: ${estimate.laborCost}</h3>
            <h3 className="text-2xl font-bold">Material Cost: ${estimate.materialCost}</h3>
            {plan === "advanced" && (
              <h3 className="text-2xl font-bold">Appliance Cost: ${estimate.applianceCost}</h3>
            )}
            <h3 className="text-2xl font-bold mt-3">Total Estimated Cost: ${estimate.totalCost}</h3>
          </div>
        )}
      </section>
    </div>
  );
}

export default ElectricalInstallations;
