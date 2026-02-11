import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePage.css"; // Import styles

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to <span className="highlight">Eco Engage</span></h1>
        <p>
          Join us in making a positive impact on the environment by adopting sustainable practices. 
          Together, we can create a greener future!
        </p>
        <Link to="/login" className="cta-button">Get Started</Link>
      </div>
      <div className="home-image">
        <img src="/public/eco1.jpeg" alt="Eco Engage" />
      </div>
    </div>
  );
};

export default HomePage;
