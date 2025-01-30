import React, { useState } from "react";
import "../style/Schedule.scss";
import ScheduleData from "../content/schedule.json"; 
import { FaMapMarkerAlt } from "react-icons/fa"; 

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
                          <div className="event_time">
                              <p>{event.startTime}{event.endTime && ` - ${event.endTime}`}</p>
                          </div>
                          <div className="event_details">
                              <h4>{event.title}</h4>
                              <p className="event_location">
                                  <FaMapMarkerAlt className="location_icon" /> {event.location}
                              </p>
                          </div>
                      </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Schedule;
