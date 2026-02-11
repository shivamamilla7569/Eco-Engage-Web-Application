import React from "react";
import "../styles/About.css"; // Ensure this CSS file is linked correctly
import Button from "./Button";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-image">
        <img src="../assets/eco-friendly-plants.jpg" alt="EcoTech About" />
      </div>
      <div className="about-text">
        <h2>About EcoTech</h2>
        <p>
          At EcoTech Solutions, we are on a mission to create a positive impact 
          on the world by offering a wide range of eco-friendly products and 
          sustainable living solutions. Our commitment to innovation and 
          environmental responsibility drives us to provide you with the tools 
          and knowledge you need to make a difference.
        </p>
        <p>
          Join us on this journey towards a greener, cleaner, and more sustainable 
          future for all.
        </p>
        <Button displayedtext="Learn More"/>
      </div>
    </section>
  );
};

export default About;
