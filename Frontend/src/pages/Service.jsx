import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Service.css";

const Service = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Eco-Friendly Transport",
      description: "Promoting sustainable travel solutions like EVs, biking, and public transport.",
      icon: "🚲",
      route: "/eco-friendly-transport",
    },
    {
      title: "Waste Management",
      description: "Helping communities reduce, reuse, and recycle waste efficiently.",
      icon: "♻️",
    },
    {
      title: "Volunteer Opportunities",
      description: "Helping communities connect with meaningful volunteer work.",
      icon: "🤝",
    },
    {
      title: "Renewable Energy",
      description: "Supporting solar, wind, and green energy adoption in daily life.",
      icon: "☀️",
    },
    {
      title: "Green Business Consulting",
      description: "Helping businesses implement sustainable practices for a better future.",
      icon: "🌱",
    },
  ];

  return (
    <div className="service-container">
      <h2>Our Eco-Friendly Services</h2>
      <p>We are committed to making the planet greener with innovative and sustainable solutions.</p>
      <div className="service-grid">
        {services.map((service, index) => (
          <div
            className="service-card"
            key={index}
            onClick={() => service.route && navigate(service.route)}
            style={{ cursor: service.route ? "pointer" : "default" }}
          >
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
