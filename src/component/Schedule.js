import React, { useState } from "react";
import "../style/Schedule.scss";

const Schedule = () => {
    const events = {
        Saturday: [
          {
            id: 1,
            title: "Opening Ceremony",
            startTime: "10:00 AM",
            endTime: "11:00 AM",
            location: "Main Hall",
            description: "Kick-off event for the weekend.",
            organizationType: "University",
            organizationName: "Event Planning Committee",
            contacts: ["contact@event.com"],
          },
          {
            id: 2,
            title: "Keynote Speech",
            startTime: "12:00 PM",
            endTime: "1:00 PM",
            location: "Auditorium",
            description: "Inspirational talk by our guest speaker.",
            organizationType: "Corporate",
            organizationName: "Tech Innovators",
            contacts: ["info@techinnovators.com"],
          },
          {
            id: 4,
            title: "Panel Discussion: Future of AI",
            startTime: "1:30 PM",
            endTime: "3:00 PM",
            location: "Conference Room 1",
            description: "Industry experts discuss the future of Artificial Intelligence.",
            organizationType: "Tech Industry",
            organizationName: "AI Solutions",
            contacts: ["ai@solutions.com", "contact@aisolutions.com"],
          },
          {
            id: 5,
            title: "Networking Lunch",
            startTime: "1:00 PM",
            endTime: "2:30 PM",
            location: "Cafeteria",
            description: "Join us for lunch and network with industry professionals.",
            organizationType: "Corporate",
            organizationName: "Event Planning Committee",
            contacts: ["networking@event.com"],
          },
          {
            id: 6,
            title: "Workshop: Digital Marketing Trends",
            startTime: "3:30 PM",
            endTime: "5:00 PM",
            location: "Room 101",
            description: "Explore the latest trends in digital marketing.",
            organizationType: "Educational",
            organizationName: "Marketing Institute",
            contacts: ["info@marketinginstitute.com"],
          },
        ],
        Sunday: [
          {
            id: 3,
            title: "Workshop: Coding 101",
            startTime: "9:00 AM",
            endTime: "11:00 AM",
            location: "Lab A",
            description: "Learn coding basics with hands-on activities.",
            organizationType: "Educational",
            organizationName: "Code Academy",
            contacts: ["support@codeacademy.com", "mentor@codeacademy.com"],
          },
          {
            id: 7,
            title: "Roundtable Discussion: The Future of Remote Work",
            startTime: "11:30 AM",
            endTime: "1:00 PM",
            location: "Room 202",
            description: "A deep dive into the future of remote work and its challenges.",
            organizationType: "Corporate",
            organizationName: "Workplace Innovations",
            contacts: ["remote@workplace.com"],
          },
          {
            id: 8,
            title: "Lunch and Learn: Mental Health at Work",
            startTime: "1:00 PM",
            endTime: "2:00 PM",
            location: "Conference Room 2",
            description: "Discussion on mental health and wellness in the workplace.",
            organizationType: "Healthcare",
            organizationName: "Wellness Co.",
            contacts: ["wellness@co.com"],
          },
          {
            id: 9,
            title: "Fireside Chat: Leadership in Crisis",
            startTime: "2:30 PM",
            endTime: "4:00 PM",
            location: "Main Auditorium",
            description: "Leadership strategies for navigating crisis situations.",
            organizationType: "Corporate",
            organizationName: "Leaders Forum",
            contacts: ["leadership@forum.com", "info@leadersforum.com"],
          },
          {
            id: 10,
            title: "Closing Ceremony",
            startTime: "4:30 PM",
            endTime: "5:30 PM",
            location: "Main Hall",
            description: "Wrap-up and thank you note to all participants and speakers.",
            organizationType: "University",
            organizationName: "Event Planning Committee",
            contacts: ["contact@event.com"],
          },
        ],
      };
      

  const [selectedDay, setSelectedDay] = useState("Saturday");
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleTabChange = (day) => {
    setSelectedDay(day);
    setSelectedEvent(null);
  };

  return (
    <div id="schedule">
      {/* Tabs for selecting day */}
      <div id="tabs">
        {["Saturday", "Sunday"].map((day) => (
          <button
            key={day}
            className={`tab_button ${selectedDay === day ? "active" : ""}`}
            onClick={() => handleTabChange(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Main content area */}
      <div id="main_content">
        {/* Left Section: Event List */}
        <div id="event_list">
          <div className="scrollable_content">
            {events[selectedDay].map((event) => (
              <div
                key={event.id}
                className={`event_item ${
                  selectedEvent?.id === event.id ? "selected" : ""
                }`}
                onClick={() => setSelectedEvent(event)}
              >
                <h4>{event.title}</h4>
                <p>
                  {event.startTime} - {event.endTime}
                </p>
                <p>{event.location}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Event Details */}
        <div id="event_details">
          {selectedEvent ? (
            <>
              <h2>{selectedEvent.title}</h2>
              <p>
                <strong>Time:</strong> {selectedEvent.startTime} -{" "}
                {selectedEvent.endTime}
              </p>
              <p>
                <strong>Location:</strong> {selectedEvent.location}
              </p>
              <p>
                <strong>Description:</strong> {selectedEvent.description}
              </p>
              <p>
                <strong>Organization Type:</strong>{" "}
                {selectedEvent.organizationType}
              </p>
              {selectedEvent.organizationName && (
                <p>
                  <strong>Organization Name:</strong>{" "}
                  {selectedEvent.organizationName}
                </p>
              )}
              <p>
                <strong>Contact:</strong>{" "}
                {selectedEvent.contacts.map((contact, index) => (
                  <span key={index}>{contact}</span>
                ))}
              </p>
            </>
          ) : (
            <p>Select an event to view details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
