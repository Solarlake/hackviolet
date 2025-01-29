import React, { useState } from "react";
import "../style/Schedule.scss";
import ScheduleData from "../content/schedule.json";  // Import the JSON file

const Schedule = () => {
    const [selectedDay, setSelectedDay] = useState("Saturday");

    return (
        <div className="schedule">
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

            <div className="event_list">
                <div className="scrollable_content">
                    {ScheduleData[selectedDay.toLowerCase()].map((event) => (  
                        <div key={event.id} className="event_item">
                            <h4>{event.title}</h4>
                            <p>
                                {event.startTime}
                                {event.endTime && ` - ${event.endTime}`} {/* Conditionally add the hyphen if endTime exists */}
                            </p>
                            <p>{event.location}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Schedule;
