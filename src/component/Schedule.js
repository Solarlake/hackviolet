import React, { useState } from "react";
import "../style/Schedule.scss";
import ScheduleData from "../content/schedule.json";
import { FaMapMarkerAlt } from "react-icons/fa";

const eventTypeColors = {
    HackViolet: "#6a4c9c",
    Club: "#ff6347",
    Meal: "#28a745",
    MLH: "#00bcd4",
};

const Schedule = () => {
    const [selectedDay, setSelectedDay] = useState("Saturday");
    const [selectedEventType, setSelectedEventType] = useState("All");

    const handleEventTypeFilter = (type) => {
        setSelectedEventType(type);
    };

    const filteredEvents = ScheduleData[selectedDay.toLowerCase()].filter((event) => {
        return selectedEventType === "All" || event.type === selectedEventType;
    });

    return (
        <div className="schedule">
            <div className="buttons_container">
                <div className="tabs">
                    {["Saturday", "Sunday"].map((day) => (
                        <button
                            key={day}
                            className={`tab_button ${selectedDay === day ? "active" : ""}`}
                            onClick={() => setSelectedDay(day)}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Filter buttons */}
                <div className="event_filters">
                    {["All", "HackViolet", "Club", "Meal", "MLH"].map((eventType) => (
                        <button
                            key={eventType}
                            className={`filter_button ${selectedEventType === eventType ? "active" : ""} ${eventType}`}
                            onClick={() => handleEventTypeFilter(eventType)}
                        >
                            {eventType}
                        </button>
                    ))}
                </div>
            </div>

            <div className="event_list">
                <div className="scrollable_content">
                    {filteredEvents.length === 0 ? (
                        <div className="event_item">
                            <p>Nothing here!</p>
                        </div>
                    ) : (
                        filteredEvents.map((event) => (
                            <div key={event.id} className="event_item">
                                <div className="event_time">
                                    <p>{event.startTime}{event.endTime && ` - ${event.endTime}`}</p>
                                </div>
                                <div className="event_details">
                                    <h4>{event.title}</h4>
                                    {event.location && (
                                        <p className="event_location">
                                            <FaMapMarkerAlt className="location_icon" /> {event.location}
                                        </p>
                                    )}
                                    {event.type && eventTypeColors[event.type] && (
                                        <div
                                            className="event_type_marker"
                                            style={{
                                                borderColor: eventTypeColors[event.type],
                                                color: eventTypeColors[event.type],
                                            }}
                                        >
                                            {event.type}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Schedule;
