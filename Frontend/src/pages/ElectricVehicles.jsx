import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/service/ElectricVehicles.css";


const ElectricVehicles = () => {
  const navigate = useNavigate();

  return (
    <div className="ev-container">
      <h1 className="ev-title">Electric Vehicles (EVs) 🚗⚡</h1>
      <p className="ev-subtitle">
        Switching to EVs reduces pollution and reliance on fossil fuels. Learn why they are the future of transportation!
      </p>

      {/* Benefits Section */}
      <div className="ev-section">
        <h2>🌍 Environmental Benefits</h2>
        <ul>
          <li><strong>Zero Tailpipe Emissions:</strong> No CO₂ or harmful gases, leading to cleaner air.</li>
          <li><strong>Lower Carbon Footprint:</strong> 50-70% fewer emissions compared to gasoline vehicles.</li>
          <li><strong>Less Noise Pollution:</strong> EVs are almost silent, reducing urban noise levels.</li>
        </ul>
      </div>

      {/* Comparison Table */}
      <div className="ev-section">
        <h2>⚖️ EVs vs. Gasoline Cars: Emission Comparison</h2>
        <table className="ev-table">
          <thead>
            <tr>
              <th>Vehicle Type</th>
              <th>CO₂ Emissions (Lifetime)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gasoline Car</td>
              <td>High emissions (~4.6 metric tons per year)</td>
            </tr>
            <tr>
              <td>Hybrid Car</td>
              <td>Lower emissions (about 30% less than gas cars)</td>
            </tr>
            <tr>
              <td><strong>Electric Car (EV)</strong></td>
              <td><strong>Very low emissions (up to 70% less than gas cars)</strong></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Battery and Charging Info */}
      <div className="ev-section">
        <h2>🔋 EV Batteries & Sustainability</h2>
        <p>EVs use <strong>lithium-ion batteries</strong> that last <strong>10-15 years</strong>. Battery recycling is improving to reduce waste.</p>
      </div>

      {/* How to Switch */}
      <div className="ev-section">
        <h2>🚗 How You Can Switch to EVs</h2>
        <ul>
          <li>💰 <strong>Explore Government Incentives:</strong> Many countries offer tax rebates for EV purchases.</li>
          <li>⚡ <strong>Charge with Renewable Energy:</strong> Use solar or wind power for charging.</li>
          <li>🚗 <strong>Carpool & Use Public EVs:</strong> Shared electric transport reduces emissions.</li>
        </ul>
      </div>

      {/* Back Button */}
      <button className="ev-back-button" onClick={() => navigate("/eco-friendly-transport")}>
        Back to Eco-Friendly Transport
      </button>
    </div>
  );
};

export default ElectricVehicles;
