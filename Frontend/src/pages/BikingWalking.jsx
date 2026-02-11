import React from "react";
import "../styles/service/BikingWalking.css"; // Import the CSS file

const BikingWalking = () => {
  return (
    <div className="biking-walking-container">
      <h1 className="title">🚴‍♂️🚶‍♀️ Biking & Walking: The Ultimate Green Transport</h1>

      <p className="intro">
        Active transportation like biking and walking not only reduces pollution but also promotes a healthier lifestyle. 
        It’s the most sustainable way to get around while improving physical and mental well-being.
      </p>

      <div className="benefits">
        <h2>🌿 Why Choose Biking & Walking?</h2>
        <ul>
          <li>
            <strong>🌍 Zero Carbon Emissions:</strong> Unlike cars, biking and walking produce no harmful emissions, making them the cleanest way to travel.
          </li>
          <li>
            <strong>💪 Improves Health:</strong> Regular physical activity reduces the risk of heart disease, obesity, and stress.
          </li>
          <li>
            <strong>🚦 Reduces Traffic Congestion:</strong> More people biking and walking means fewer cars on the road, leading to smoother traffic flow.
          </li>
          <li>
            <strong>💰 Saves Money:</strong> No fuel, no parking fees, and minimal maintenance costs compared to owning a vehicle.
          </li>
          <li>
            <strong>🏙️ Creates Livable Cities:</strong> Encourages urban areas to be more pedestrian- and bike-friendly with better infrastructure.
          </li>
          <li>
            <strong>🎯 Increases Productivity:</strong> People who bike or walk to work tend to feel more energized and focused.
          </li>
        </ul>
      </div>

      <div className="contribution">
        <h2>💡 How You Can Get Started</h2>
        <ul>
          <li>✅ Use a bicycle for short commutes and errands.</li>
          <li>✅ Walk to nearby destinations instead of driving.</li>
          <li>✅ Advocate for bike lanes and pedestrian-friendly spaces in your community.</li>
          <li>✅ Invest in a good quality bike and comfortable walking shoes.</li>
          <li>✅ Join local biking groups to stay motivated.</li>
        </ul>
      </div>

      <div className="future">
        <h2>🚀 The Future of Active Transportation</h2>
        <p>
          Many cities worldwide are investing in better biking and pedestrian infrastructure, such as dedicated bike lanes, car-free zones, and public bike-sharing programs. 
          By choosing biking and walking, we contribute to a cleaner, healthier future for all.
        </p>
      </div>
    </div>
  );
};

export default BikingWalking;
