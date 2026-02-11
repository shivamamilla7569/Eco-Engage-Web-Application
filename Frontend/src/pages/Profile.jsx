import React, { useEffect, useState } from "react";
import "../styles/dashboardstyles/Profile.css";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details from local storage or API
    const userData = JSON.parse(localStorage.getItem("user")) || {
      firstname: "Shiva",
      lastname: "krishna",
      username: "shiva123",
      email: "Shivakrishna@gmail.com",
      dateOfBirth: "1995-06-15",
      gender: "Male",
    };
    setUser(userData);
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-box">
      <h1 className="profile-title">User Profile</h1>
        {user ? (
          <div className="profile-details">
            <p><strong>First Name:</strong> {user.firstname}</p>
            <p><strong>Last Name:</strong> {user.lastname}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Date of Birth:</strong> {user.dateOfBirth}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
