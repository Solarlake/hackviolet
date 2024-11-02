import React from "react";
import "../style/Team.scss";
import TeamData from "../content/team.json";

const Team = () => {
    return (
        <div className="team">
            {TeamData.committees.map((committee, index) => (
                <div key={index} className="committee">
                    <p className="committee_text">{committee.name}</p>
                    <div className="members">
                        {committee.members.map((member, index) => (
                            <div key={index} className="member">
                                <div className="image"></div>
                                <p className="name">{member.name}</p>
                                <p className="role">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Team;