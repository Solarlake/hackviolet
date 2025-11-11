import React from "react";
import "../style/Team.scss";
import TeamData from "../content/team.json";

import jinjuImg from "../asset/image/board/jinju.png";
import miaImg from "../asset/image/board/mia.png";

import jessicaImg from "../asset/image/board/jessica.png";
import maryannImg from "../asset/image/board/maryann.png";
import riyaImg from "../asset/image/board/riya.png";

import murriumImg from "../asset/image/board/murrium.png";
import rishitaImg from "../asset/image/board/rishita.png";
import vidhiImg from "../asset/image/board/vidhi.png";
import lihiImg from "../asset/image/board/lihi.png";


import sidneyImg from "../asset/image/board/sidney.png";
import krishnaImg from "../asset/image/board/krishna.png";
import tanishqaImg from "../asset/image/board/tanishqa.png";
import roscoeImg from "../asset/image/board/roscoe.png";

import sahithiImg from "../asset/image/board/sahithi.png";
import byronImg from "../asset/image/board/byron.png";
import lexyImg from "../asset/image/board/lexy.png";

const imageMap = {
    "Jinju Brown": jinjuImg,
    "Mia Nguyen": miaImg,
    "Jessica May": jessicaImg,
    "Maryann Putnam": maryannImg,
    "Riya Nilawar": riyaImg,
    "Murrium Mirza": murriumImg,
    "Rishita Jain": rishitaImg,
    "Vidhi Shah": vidhiImg,
    "Lihi Ancikovsky": lihiImg,
    "Sidney Nguyen": sidneyImg,
    "Krishna Reddy": krishnaImg,
    "Tanishqa Gautam": tanishqaImg,
    "Roscoe Lin": roscoeImg,
    "Sahithi Sarva": sahithiImg,
    "Byron Streit": byronImg,
    "Lexy Altieri": lexyImg,
};

const Team = () => {
    return (
        <div className="team">
            {TeamData.committees.map((committee, index) => (
                <div key={index} className="committee">
                    <p className="committee_text">{committee.name}</p>
                    <div className="members">
                        {committee.members.map((member, index) => (
                            <div key={index} className="member">
                                <div className="image">
                                    <img
                                        // src={`${TeamData.image_root}${member.image}`}
                                        src={imageMap[member.name]}                                    />
                                </div>
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