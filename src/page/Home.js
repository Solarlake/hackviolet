import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faDiscord, faDev, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "../style/Home.scss";
import Blob from "../asset/svg/blob.svg";
import Rocket from "../asset/image/rocket.png";
import Clouds from "../asset/image/clouds.png";
import FAQ from "../component/FAQ";
import Team from "../component/Team";

const Home = () => {
    return (
        <div className="home">
            <div className="landing">
                <div className="header">
                    <h1>HackViolet 2025</h1>
                    <div className="copy">
                        <p>Virginia Tech's premier female-empowerment hackathon</p>
                        <p>February 1-2 • Data & Decision Sciences Building</p>
                    </div>
                    <div className="buttons">
                        <a href="/" className="button button__resources">Resources</a>
                        <a href="/" className="button button__register">Register</a>
                    </div>
                    <div className="socials">
                        <a href="https://www.instagram.com/hackvioletvt/" target="_blank" rel="noreferrer" className="icon">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="/" className="icon">
                            <FontAwesomeIcon icon={faDiscord} />
                        </a>
                        <a href="https://www.linkedin.com/company/hackviolet-vt/" target="_blank" rel="noreferrer" className="icon">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="/" className="icon">
                            <FontAwesomeIcon icon={faDev} />
                        </a>
                    </div>
                </div>
            </div>

            <img className="clouds" src={Clouds} alt="" />
            <img className="rocket" src={Rocket} alt="" />

            <div className="about">
                <p className="header">ABOUT HACKVIOLET</p>
                <div className="copy">
                    <p>
                        <span className="hv">HackViolet</span> is a 24-hour hackathon hosted by The Association of Women in Computing, a student-run, non-profit organization at Virginia Tech.
                    </p>
                    <p>
                        Through the event, we encourage all individuals to learn about and become change agents for the gender gap in technology by innovating and inspiring with code.
                    </p>
                </div>
            </div>

            <div className="faq">
                <img className="blob" src={Blob} alt="" />
                <p className="header">Frequently Asked Questions</p>
                <FAQ />
            </div>

            <div className="board">
                <p className="header">Team</p>
                <Team />
            </div>
        </div>
    );
};

export default Home;
