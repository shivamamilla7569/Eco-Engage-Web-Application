import React from "react";
import "../styles/dashboardstyles/DashboardNavbar.css";
import { useNavigate } from "react-router-dom";
import { User, LogOutIcon } from "lucide-react";

const DashboardNavbar = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  return (
    <nav className="dashboard-navbar">
      <div className="navbar-title">Eco Engage</div>
      <div className="navbar-buttons">
        <button onClick={() => navigate("/profile")} className="profile-button">
          <User size={16} className="icon" /> Profile
        </button>
        <button onClick={() => navigate("/")} className="logout-button">
          <LogOutIcon size={16} className="icon" /> Logout
        </button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;




