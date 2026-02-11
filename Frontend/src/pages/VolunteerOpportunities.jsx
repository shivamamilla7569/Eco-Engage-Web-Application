import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/dashboardstyles/VolunteerOpportunities.css";

const opportunities = [
  {
    id: 1,
    title: "Tree Plantation Drive",
    description: "Join us in planting trees in your local community.",
    type: "Tree Planting",
  },
  {
    id: 2,
    title: "Beach Cleanup",
    description: "Help remove plastic waste and save marine life.",
    type: "Clean-up",
  },
  {
    id: 3,
    title: "Recycling Awareness",
    description: "Spread awareness about proper waste management.",
    type: "Recycling",
  },
];

const VolunteerOpportunities = () => {
  const navigate = useNavigate();

  return (
    <div className="volunteer-container">
      <h1 className="volunteer-title">Volunteer Opportunities 🌍</h1>
      <p className="volunteer-subtitle">
        Find local eco-friendly volunteering options and make a difference!
      </p>

      <div className="volunteer-list">
        {opportunities.map((opp) => (
          <div key={opp.id} className="volunteer-card">
            <h2>{opp.title}</h2>
            <p>{opp.description}</p>
            <button
              className="volunteer-button"
              onClick={() => navigate(`/opportunity/${opp.id}`)}
            >
              Explore
            </button>
          </div>
        ))}
      </div>

      <button className="back-button" onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
    </div>
  );
};

export default VolunteerOpportunities;
