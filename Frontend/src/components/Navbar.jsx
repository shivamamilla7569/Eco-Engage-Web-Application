import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const navLinks = ["Home", "Services", "AboutUS", "ContactUS"];

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status when component mounts
  useEffect(() => {
    const user = localStorage.getItem("user"); // Assume user data is stored in localStorage
    setIsLoggedIn(!!user); // Convert to boolean
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data
    setIsLoggedIn(false);
    navigate("/"); // Redirect to home page
  };

  return (
    <nav className="navbar">
      <h1 className="logo">EcoTech</h1>
      <ul className="nav-links">
        {navLinks.map((tab) => (
          <li key={tab}>
            <NavLink 
              to={`/${tab.toLowerCase()}`} 
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {tab}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="nav-buttons">
        {!isLoggedIn ? (
          <button onClick={() => navigate("/login")} className="login-btn">
            Login/Signup
          </button>
        ) : (
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        )}
        <button className="cart-btn">🛒</button>
      </div>
    </nav>
  );
};

export default Navbar;
