import React from "react";
import "../style/Navigation.scss";
import Logo from "../asset/image/logo.png";
import LogoText from "../asset/image/hackviolet_text.png";
import { FaQuestionCircle, FaCalendarAlt, FaTrophy } from "react-icons/fa"; 

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="bar">
                <div className="logo">
                    <a href="#landing">
                        <img className="icon" src={Logo} alt="HackViolet 2025 Logo" />
                        <img className="text" src={LogoText} alt="HackViolet 2025 Text" />
                    </a>
                </div>
                <div className="links">
                    <a href="#faq" className="faq_link">
                        <FaQuestionCircle className="icon" />
                        <span className="text">FAQ</span>
                    </a>
                    <a href="#schedule" className="schedule_link">
                        <FaCalendarAlt className="icon" />
                        <span className="text">Schedule</span>
                    </a>
                    <a href="#prizes" className="prizes_link">
                        <FaTrophy className="icon" />
                        <span className="text">Prizes</span>
                    </a>
                </div>
                <div className="resources">
                    <a href="https://tally.so/r/3Eb0OL">
                        Resources
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
