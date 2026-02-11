import React from "react";
import "../styles/dashboardstyles/EnvironmentalAwareness.css";

const EnvironmentalAwareness = () => {
  return (
    <div className="awareness-container">
      <h2 className="awareness-title">Environmental Awareness Hub</h2>
      <p className="awareness-description">
        Explore articles, watch videos, and take on challenges to promote sustainability.
      </p>

      {/* Articles Section */}
      <div className="awareness-section">
        <h3>Latest Articles 📖</h3>
        <ul>
          <li>
            <a href="#">How to Reduce Plastic Waste</a>
          </li>
          <li>
            <a href="#">Sustainable Living: Tips & Tricks</a>
          </li>
          <li>
            <a href="#">Impact of Climate Change</a>
          </li>
        </ul>
      </div>

      {/* Videos Section */}
      <div className="awareness-section">
        <h3>Featured Videos 🎥</h3>
        <div className="video-container">
          <iframe
            width="320"
            height="180"
            src="https://www.youtube.com/embed/d-mZ3EuP19o"
            title="Sustainability Tips"
            allowFullScreen
          ></iframe>
          <iframe
            width="320"
            height="180"
            src="https://www.youtube.com/embed/Nw4cLAH7ftY"
            title="Eco-friendly Practices"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Challenges Section */}
      <div className="awareness-section">
        <h3>Sustainability Challenges 🌱</h3>
        <ul>
          <li>🚲 Ride a bike instead of driving for a week.</li>
          <li>♻️ Go zero-waste for a day.</li>
          <li>🌿 Plant a tree in your community.</li>
        </ul>
      </div>
    </div>
  );
};

export default EnvironmentalAwareness;
