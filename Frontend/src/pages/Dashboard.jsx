import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";
import axios from "axios";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get("https://eco-engage-server-1.onrender.com/users");
        setUsers(data);
      } catch (error) {
        setError(error.response?.data?.message || "Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };
  
    fetchUsers();
  }, []);

  const handleUpdate = (user) => {
    navigate("/register", { state: user }); // Redirects to registration page with user details
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://eco-engage-server-1.onrender.com/users/${id}`);
  
      // Update state after successful deletion
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      setError(error.response?.data?.message || "Failed to delete user");
    }
  };

  const handleLogout = () => {
    navigate("/"); // Redirect to home page
  };

  if (loading) return <p className="loading">Loading user data...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  return (
    <div className="container">
      
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <button className="update-button" onClick={() => handleUpdate(user)}>Update</button>
                <button className="delete-button" onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
          </div>
  );
}

export default Dashboard;
