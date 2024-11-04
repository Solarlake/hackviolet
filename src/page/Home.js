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
            <div id="landing" className="landing">
                <div className="header">
                    <h1>HackViolet 2025</h1>
                    <div className="copy">
                        <p>Virginia Tech's premier female-empowerment hackathon</p>
                        <p>February 1-2 • Data & Decision Sciences Building</p>
                    </div>
                    <div className="buttons">
                        {/* <a href="/" className="button button__resources">Resources</a> */}
                        <a href="/" className="button button__register">Register</a>
                    </div>
                    <div className="socials">
                        <a href="https://www.instagram.com/hackvioletvt/" target="_blank" rel="noreferrer" className="icon">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        {/* <a href="/" className="icon">
                            <FontAwesomeIcon icon={faDiscord} />
                        </a> */}
                        <a href="https://www.linkedin.com/company/hackviolet-vt/" target="_blank" rel="noreferrer" className="icon">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        {/* <a href="/" className="icon">
                            <FontAwesomeIcon icon={faDev} />
                        </a> */}
                    </div>
                </div>
            </div>

            <img className="clouds" src={Clouds} alt="" />
            <div className="rocket_container">
                <img className="rocket" src={Rocket} alt="" />
            </div>

            <div id="about" className="about">
                <div className="copy">
                    <p>
                        <span className="hv">HackViolet</span> is a 24-hour hackathon hosted by The Association of Women in Computing, a student-run, non-profit organization at Virginia Tech.
                    </p>
                    <p>
                        Through the event, we encourage all individuals to learn about and become change agents for the gender gap in technology by innovating and inspiring with code.
                    </p>
                </div>
            </div>

            <div id="faq" className="faq">
                <img className="blob" src={Blob} alt="" />
                <p className="header">Frequently Asked Questions</p>
                <FAQ />
            </div>

            <div id="sponsors" className="sponsors">
                <p className="header">Join Us as a Sponsor for HackViolet 2025!</p>
                <div className="copy">
                    <p>With over <strong>500 expected participants</strong> attending this in-person hackathon, we need your help to create an incredible experience for young, future innovators!</p>
                    <p><strong>Benefits of Sponsorship:</strong></p>
                    <p>
                        <ul>
                            <li>Enhance Brand Visibility</li>
                            <li>Showcase Your Technology</li>
                            <li>Engage with Top Talent</li>
                            <li>Demonstrate Corporate Social Responsibility</li>
                        </ul>
                    </p>
                    <p><strong>Click the button to access the sponsorship packet</strong> and take the first step toward becoming an official HackViolet 2025 sponsor!</p>
                </div>
                <div className="button">
                    <a href="https://www.dropbox.com/scl/fi/ykraoa1h0glr3142l1z4d/HackViolet_2025_Sponsorship_Packet.pdf?rlkey=nmxsc2nqr8ootyhm3p235tdd8&st=4bhy0jrr&dl=0" target="_blank" rel="noreferrer">
                            Sponsorship Packet
                    </a>
                </div>
            </div>

            <div className="board">
                <p className="header">Team</p>
                <Team />
            </div>
        </div>
    );
};

export default Home;
