import React from "react";
import "../style/Team.scss";
import TeamData from "../content/team.json";

import tessaImg from "../asset/image/board/tessa.jpg";
import hafsaImg from "../asset/image/board/hafsa.jpg";
import travisImg from "../asset/image/board/travis.jpg";
import jessicaImg from "../asset/image/board/jessica.jpg";
import shruthiImg from "../asset/image/board/shruthi.jpg";
import jinjuImg from "../asset/image/board/jinju.jpg";
import riaImg from "../asset/image/board/ria.jpg";
import murriumImg from "../asset/image/board/murrium.jpg";
import rakeshImg from "../asset/image/board/rakesh.jpg";
import sidneyImg from "../asset/image/board/sidney.jpg";
import sahithiImg from "../asset/image/board/sahithi.jpg";
import varshaImg from "../asset/image/board/varsha.jpg";
import miaImg from "../asset/image/board/mia.jpg";
import jasmineImg from "../asset/image/board/jasmine.jpg";
import annieImg from "../asset/image/board/annie.jpg";
import kenImg from "../asset/image/board/ken.jpg";

const imageMap = {
    "Tessa Ryan": tessaImg,
    "Hafsa Khan": hafsaImg,
    "Travis Chan": travisImg,
    "Jessica May": jessicaImg,
    "Shruthi Ganapuram": shruthiImg,
    "Jinju Brown": jinjuImg,
    "Ria Rathi": riaImg,
    "Murrium Mirza": murriumImg,
    "Rakesh Pillai": rakeshImg,
    "Sidney Nguyen": sidneyImg,
    "Sahithi Sarva": sahithiImg,
    "Varsha Manickam": varshaImg,
    "Mia Nguyen": miaImg,
    "Jasmine Varma": jasmineImg,
    "Annie Tran": annieImg,
    "Ken Lin": kenImg,
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