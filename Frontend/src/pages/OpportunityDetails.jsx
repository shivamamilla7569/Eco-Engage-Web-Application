import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/dashboardstyles/OpportunityDetails.css";

const opportunitiesData = [
  { id: 1, title: "Tree Plantation Drive", description: "Join us in planting trees in Hyderabad.", location: "Hyderabad", type: "Tree Planting", date: "2025-04-10", contact: "hyderabad@greenearth.org", schedule: "9:00 AM - 2:00 PM" },
  { id: 2, title: "Beach Cleanup", description: "Help clean Hussain Sagar Lake and restore its ecosystem.", location: "Hyderabad", type: "Clean-up", date: "2025-04-12", contact: "cleanup@hyderabad.org", schedule: "8:00 AM - 12:00 PM" },
  { id: 3, title: "Recycling Awareness Program", description: "Spread awareness about proper waste management in Hyderabad.", location: "Hyderabad", type: "Recycling", date: "2025-04-15", contact: "recycle@hyderabad.org", schedule: "10:00 AM - 3:00 PM" },
  { id: 4, title: "Tree Plantation Drive", description: "Join us in a green mission to plant trees in Chennai.", location: "Chennai", type: "Tree Planting", date: "2025-04-18", contact: "chennai@greenearth.org", schedule: "9:00 AM - 2:00 PM" },
  { id: 5, title: "Beach Cleanup", description: "Participate in cleaning Marina Beach and preserving marine life.", location: "Chennai", type: "Clean-up", date: "2025-04-20", contact: "cleanup@chennai.org", schedule: "8:00 AM - 12:00 PM" },
  { id: 6, title: "Recycling Awareness Program", description: "Educate people on proper waste management and recycling methods.", location: "Chennai", type: "Recycling", date: "2025-04-25", contact: "recycle@chennai.org", schedule: "10:00 AM - 3:00 PM" },
  { id: 7, title: "Tree Plantation Drive", description: "Help plant trees in Bengaluru for a greener tomorrow.", location: "Bengaluru", type: "Tree Planting", date: "2025-04-28", contact: "bengaluru@greenearth.org", schedule: "9:00 AM - 2:00 PM" },
  { id: 8, title: "Beach Cleanup", description: "Contribute to cleaning Ulsoor Lake and protecting aquatic life.", location: "Bengaluru", type: "Clean-up", date: "2025-05-02", contact: "cleanup@bengaluru.org", schedule: "8:00 AM - 12:00 PM" },
  { id: 9, title: "Recycling Awareness Program", description: "Take part in spreading knowledge about recycling initiatives.", location: "Bengaluru", type: "Recycling", date: "2025-05-06", contact: "recycle@bengaluru.org", schedule: "10:00 AM - 3:00 PM" },
];

const OpportunityDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [opportunity, setOpportunity] = useState(null);
  const [filteredOpportunities, setFilteredOpportunities] = useState(opportunitiesData);

  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  useEffect(() => {
    const selectedOpportunity = opportunitiesData.find((opp) => opp.id === Number(id));
    setOpportunity(selectedOpportunity);
  }, [id]);

  useEffect(() => {
    let filtered = opportunitiesData;

    if (search) {
      filtered = filtered.filter((opp) =>
        opp.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (locationFilter) {
      filtered = filtered.filter((opp) => opp.location === locationFilter);
    }

    if (typeFilter) {
      filtered = filtered.filter((opp) => opp.type === typeFilter);
    }

    if (dateFilter) {
      filtered = filtered.filter((opp) => opp.date === dateFilter);
    }

    setFilteredOpportunities(filtered);
  }, [search, locationFilter, typeFilter, dateFilter]);

  return (
    <div className="opportunity-details-container">
      {opportunity ? (
        <>
          <h2 className="details-title">{opportunity.title}</h2>
          <p><strong>Description:</strong> {opportunity.description}</p>
          <p><strong>Location:</strong> {opportunity.location}</p>
          <p><strong>Type:</strong> {opportunity.type}</p>
          <p><strong>Date:</strong> {opportunity.date}</p>
          <p><strong>Schedule:</strong> {opportunity.schedule}</p>
          <p><strong>Contact:</strong> <a href={`mailto:${opportunity.contact}`}>{opportunity.contact}</a></p>

          <button className="signup-button" onClick={() => navigate(`/opportunity-form`)}>Sign Up</button>

          <h3 className="filter-title">Search & Filter Opportunities</h3>
          <div className="filters">
            <input
              type="text"
              placeholder="Search by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="filter-input"
            />
            <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)} className="filter-select">
              <option value="">Filter by Location</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Chennai">Chennai</option>
              <option value="Bengaluru">Bengaluru</option>
            </select>
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="filter-select">
              <option value="">Filter by Type</option>
              <option value="Tree Planting">Tree Planting</option>
              <option value="Clean-up">Clean-up</option>
              <option value="Recycling">Recycling</option>
            </select>
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="filter-input"
            />
          </div>

          <div className="opportunities-list">
            {filteredOpportunities.length > 0 ? (
              filteredOpportunities.map((opp) => (
                <div key={opp.id} className="opportunity-card">
                  <h3>{opp.title}</h3>
                  <p><strong>Location:</strong> {opp.location}</p>
                  <p><strong>Date:</strong> {opp.date}</p>
                  <button className="register-button" onClick={() => navigate(`/opportunity-form`)}>
                    Register 
                  </button>
                </div>
              ))
            ) : (
              <p className="no-results">No matching opportunities found.</p>
            )}
          </div>

          <button className="back-button" onClick={() => navigate("/volunteer")}>Back to Opportunities</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default OpportunityDetails;
