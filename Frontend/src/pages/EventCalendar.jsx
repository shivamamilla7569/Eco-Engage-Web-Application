import React, { useState } from "react";
import "../styles/dashboardstyles/EventCalendar.css"; 
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const events = [
  { date: new Date(2025, 3, 10), title: "Tree Plantation Drive" },
  { date: new Date(2025, 3, 15), title: "Beach Cleanup" },
  { date: new Date(2025, 3, 20), title: "Recycling Workshop" },
];

function EventCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const filteredEvents = events.filter(
    (event) =>
      event.date.toDateString() === selectedDate.toDateString()
  );

  return (
    <div className="calendar-wrapper">
      <div className="calendar-left">
        <h2>Event Calendar</h2>
        <Calendar onChange={setSelectedDate} value={selectedDate} />
        
      </div>
      <div className="calendar-right">
        <h2>Events on {selectedDate.toDateString()}</h2>
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, idx) => (
            <div key={idx} className="event-card">
              {event.title}
            </div>
          ))
        ) : (
          <p className="no-events">No events for this date.</p>
        )}
      </div>
    </div>
  );
}

export default EventCalendar;
