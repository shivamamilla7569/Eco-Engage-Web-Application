import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
import "../styles/dashboardstyles/EcoEngageDashboard.css";

const EcoEngageDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-wrapper">
      <DashboardNavbar />
      <div className="dashboard-container">
        <h1 className="dashboard-title">
          Welcome to Eco Engage! <span className="emoji">🌱</span>
        </h1>
        <p className="dashboard-subtitle">
          Make a difference by volunteering and promoting sustainability.
        </p>

        <div className="cards-container">
          <div className="card">
            <span className="card-icon">💚</span>
            <h2 className="card-title">Volunteer Opportunities</h2>
            <p className="card-description">
              Find local eco-friendly volunteering options.
            </p>
            <button className="card-button" onClick={() => navigate("/volunteer")}>
              Explore
            </button>
          </div>

          <div className="card">
            <span className="card-icon">🌍</span>
            <h2 className="card-title">Environment Awareness Hub</h2>
            <p className="card-description">
              Discover resources and events to stay informed about environmental issues.
            </p>
            <button className="card-button" onClick={() => navigate("/hub")}>
              Learn More
            </button>
          </div>

          <div className="card">
            <span className="card-icon">🌿</span>
            <h2 className="card-title">Community Updates</h2>
            <p className="card-description">
              Stay informed about sustainability events.
            </p>
            <button className="card-button" onClick={() => navigate("/calendar")}>
              View Updates
            </button>
          </div>

          <div className="card">
            <span className="card-icon">♻️</span>
            <h2 className="card-title">Impact Tracker</h2>
            <p className="card-description">
              Track your contributions to sustainability.
            </p>
            <button className="card-button" onClick={() => navigate("/impact")}>
              View Progress
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoEngageDashboard;
