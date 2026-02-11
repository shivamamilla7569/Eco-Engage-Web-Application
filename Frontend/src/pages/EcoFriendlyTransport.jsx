import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/EcoFriendlyTransport.css";

const EcoFriendlyTransport = () => {
  const navigate = useNavigate();

  return (
    <div className="transport-container">
      <h1 className="transport-title">Eco-Friendly Transport 🚲</h1>
      <p className="transport-description">
        Sustainable transportation options help reduce carbon footprints and promote a greener future.
      </p>

      <div className="transport-options">
        <div className="transport-card" onClick={() => navigate("/electricvehicles")}>
          <h2>Electric Vehicles (EVs) ⚡</h2>
          <p>Switching to EVs reduces pollution and reliance on fossil fuels.</p>
        </div>

        <div className="transport-card" onClick={() => navigate("/publictransport")}>
          <h2>Public Transport</h2>
          <p>Using buses, trains, and metros is an eco-friendly alternative to private vehicles.</p>
        </div>

        <div className="transport-card" onClick={() => navigate("/bikingwalking")}>
          <h2>Biking & Walking</h2>
          <p>Active transportation keeps you healthy while being completely sustainable.</p>
        </div>
      </div>

      <button className="back-button" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default EcoFriendlyTransport;
