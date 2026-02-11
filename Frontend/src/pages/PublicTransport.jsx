import React from "react";
import "../styles/service/PublicTransport.css"; // Import the CSS file

const PublicTransport = () => {
  return (
    <div className="public-transport-container">
      <h1 className="title">🚆 Public Transport: A Sustainable Choice</h1>

      <p className="intro">
        Public transport, including buses, trains, metros, and trams, is a key solution for reducing traffic congestion, lowering carbon emissions, and promoting a more sustainable urban environment. By choosing public transportation over private vehicles, we can significantly cut down on fuel consumption and pollution.
      </p>

      <div className="benefits">
        <h2>🌍 Why Public Transport Matters</h2>
        <p>
          The transportation sector is one of the largest contributors to carbon emissions. Switching to public transit systems helps in various ways:
        </p>
        <ul>
          <li>
            <strong>🚇 Reduces Carbon Footprint:</strong> Public transportation produces far fewer greenhouse gas emissions per passenger compared to private vehicles.
          </li>
          <li>
            <strong>🛣️ Less Road Congestion:</strong> Fewer private cars mean less traffic congestion, leading to faster commutes and lower stress levels.
          </li>
          <li>
            <strong>💰 Saves Money:</strong> Public transit is more affordable than owning and maintaining a car, with reduced costs for fuel, insurance, and parking.
          </li>
          <li>
            <strong>🏙️ Improves Urban Planning:</strong> Encourages cities to develop walkable communities, reducing urban sprawl.
          </li>
          <li>
            <strong>🔋 Increases Energy Efficiency:</strong> Mass transit systems consume less energy per passenger, making them a greener alternative.
          </li>
          <li>
            <strong>🚶‍♂️ Promotes Active Lifestyles:</strong> Encourages walking and cycling to transit stations, improving overall health and well-being.
          </li>
        </ul>
      </div>

      <div className="contribution">
        <h2>💡 How You Can Make a Difference</h2>
        <p>
          Adopting public transport in your daily life can make a substantial impact on the environment. Here’s how you can contribute:
        </p>
        <ul>
          <li>✅ Use public transport for daily commutes to reduce single-occupancy vehicle trips.</li>
          <li>✅ Support policies that invest in better and more efficient public transit systems.</li>
          <li>✅ Encourage friends and family to use buses, trains, and metros instead of private cars.</li>
          <li>✅ Explore carpooling or ride-sharing to reduce traffic congestion.</li>
          <li>✅ Advocate for pedestrian-friendly infrastructure and bike lanes near transit stations.</li>
        </ul>
      </div>

      <div className="future">
        <h2>🚀 The Future of Public Transport</h2>
        <p>
          Innovations in transportation are making public transit even more eco-friendly. Many cities are investing in electric buses, high-speed rail systems, and smart transit solutions that reduce waiting times and energy consumption. By choosing public transport today, we contribute to a cleaner, more efficient future for our planet.
        </p>
      </div>
    </div>
  );
};

export default PublicTransport;
