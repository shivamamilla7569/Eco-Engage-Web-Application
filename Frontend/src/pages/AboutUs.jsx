import React from "react";
import "../styles/AboutUs.css"; // Import styles

const AboutUs = () => {
  return (
    <div className="aboutus-container">
      <div className="aboutus-content">
        <h2>About <span className="highlight">Eco-Engage</span></h2>
        <p>
          At Eco-Engage, we are committed to promoting sustainability and environmental awareness. 
          Our goal is to provide innovative solutions that help individuals and businesses adopt eco-friendly practices.
        </p>
        <p>
          We believe that every small effort counts toward making a positive impact on the planet. 
          Through our services, we empower communities to embrace sustainable living and reduce their carbon footprint.
        </p>
      </div>

      <div className="aboutus-image">
        <img src="/public/eco3.jpeg" alt="Eco Engage Team" />
      </div>
    </div>
  );
};

export default AboutUs;
