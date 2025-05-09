import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import axios from 'axios';

function App() {
  const [events, setEvents] = useState([]);
  const userId = "user123"; // hardcoded for now

  const fetchEvents = async () => {
    const res = await axios.get(`http://localhost:5000/events/${userId}`);
    setEvents(res.data);
  };

  const handleDateClick = async (info) => {
    const title = prompt("Enter event title:");
    if (title) {
      await axios.post('http://localhost:5000/events', {
        title,
        start: info.date,
        end: info.date,
        userId
      });
      fetchEvents();
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Calendar App</h1>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
      />
    </div>
  );
}

export default App;
