import React from 'react';
import '../styles/dashboardstyles/UserProfile.css'; // Assuming you have a CSS file for styling

const UserProfile = () => {
    return (
      <div className="dashboard-container">
  
        {/* Main Dashboard */}
        <div className="dashboard-content">
          <header className="dashboard-header">
            <h1>Impact Overview</h1>
            <button className="settings-btn">⚙</button>
          </header>
  
          {/* Impact Stats */}
          <div className="impact-stats">
            <div className="stat-card">
              <h3>Hours Volunteered</h3>
              <p>120</p>
            </div>
            <div className="stat-card">
              <h3>Activities Completed</h3>
              <p>15</p>
            </div>
            <div className="stat-card">
              <h3>Badges Earned</h3>
              <p>5</p>
            </div>
          </div>
  
          {/* Program Performance */}
          <div className="progress-section">
            <h2>Volunteer Performance</h2>
            <div className="progress-bar">
              <p>Tree Plantation: 80%</p>
              <div className="bar">
                <div className="fill" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="progress-bar">
              <p>Beach Cleanup: 60%</p>
              <div className="bar">
                <div className="fill" style={{ width: "60%" }}></div>
              </div>
            </div>
            <div className="progress-bar">
              <p>Recycling Awareness: 40%</p>
              <div className="bar">
                <div className="fill" style={{ width: "40%" }}></div>
              </div>
            </div>
          </div>
  
          {/* Roadmap */}
          <div className="roadmap">
            <h2>Upcoming Activities</h2>
            <ul>
              <li>🌱 Tree Plantation - April 10</li>
              <li>🌊 Beach Cleanup - April 15</li>
              <li>♻ Recycling Awareness - April 20</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default UserProfile;