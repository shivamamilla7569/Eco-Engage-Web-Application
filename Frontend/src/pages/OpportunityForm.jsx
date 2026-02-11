import { useState } from "react";
import "../styles/dashboardstyles/OpportunityForm.css";
import { useNavigate } from "react-router-dom";

const OpportunityForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    interest: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Handle backend logic here (axios or fetch)
      console.log("Opportunity Form Submitted:", formData);
      setMessage("Successfully registered for opportunity!");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        preferredDate: "",
        interest: "",
      });

      setTimeout(() => navigate("/opportunities"), 2000);
    } catch (error) {
      console.error("Submission Error:", error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Opportunity Registration</h2>
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
            required
          />
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className="input-field"
            required
          />
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="input-field"
            required
          >
            <option value="" disabled>Select Opportunity Type</option>
            <option value="Tree Planting">Tree Planting</option>
            <option value="Clean-up">Clean-up</option>
            <option value="Recycling">Recycling</option>
          </select>

          <button type="submit" className="submit-button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default OpportunityForm;
