import React, { useState } from "react";
import "../style/Navigation.scss";
import Logo from "../asset/image/logo.png";
import LogoText from "../asset/image/hackviolet_text.png";
import { Link } from "react-router-dom";
import registericon from "../asset/image/register-icon.png"

const Navigation = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const closeNavBar = () => setIsExpanded(false);

    return (
        <div className="navigation">
            <div className="bar">
                <div className="nav-left">
                    <div className="logo">
                        <Link to="/#landing">
                            <img className="icon" src={Logo} alt="HackViolet 2025 Logo" />
                            <img className="text" src={LogoText} alt="HackViolet 2025 Text" />
                        </Link>
                    </div>
                    <div className="links">
                        <Link to="/#about" className="about_link">
                            <span className="text">About</span>
                        </Link>
                        <Link to="/#faq" className="faq_link">
                            <span className="text">FAQ</span>
                        </Link>
                        <Link to="/#sponsors" className="sponsors_link">
                            <span className="text">Sponsors</span>
                        </Link>
                    </div>
                </div>

                <div className="nav-right">
                    <div className="resources">
                        <button className="resources_button" onClick={() => setIsExpanded(!isExpanded)}>
                            Resources
                        </button>
                    </div>
                    
                    <a
                    href="https://tally.so/r/n0gdr6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="register-link"
                    ><div className="Register-btn">
                        <img
                        className="registericon"
                        src={registericon}
                        alt="register icon"
                        />
                        <span className="register-button">Register for 2026</span>
                    </div>
                    </a>
                </div>
            </div>

            <div className={`expanded_section ${isExpanded ? "expanded" : "collapsed"}`}>
                <Link to="/resources#info" className="resources_page_link" onClick={closeNavBar}>
                    All Resources
                </Link>
                <Link to="/resources#info" onClick={closeNavBar}>Judging Preference Form</Link>
                <Link to="/resources#rules" onClick={closeNavBar}>Rules</Link>
                <Link to="/resources#location" onClick={closeNavBar}>Location</Link>
                <Link to="/resources#raffle" onClick={closeNavBar}>Raffle Giveaways</Link>
                <Link to="/resources#teams" onClick={closeNavBar}>Teams</Link>
                <Link to="/resources#mentors" onClick={closeNavBar}>Help & Mentors</Link>
                <Link to="/resources#judging" onClick={closeNavBar}>Judging</Link>
                <Link to="/resources#submission" onClick={closeNavBar}>Project Submission</Link>
                <Link to="/resources#starter" onClick={closeNavBar}>Starter Packs</Link>
            </div>
        </div>
    );
};

export default Navigation;