import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faDiscord, faDev, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "../style/Home.scss";
import Blob from "../asset/svg/blob.svg";
import Rocket from "../asset/image/rocket.png";
import Clouds from "../asset/image/clouds.png";
import Gallery from "../component/Gallery";
import FAQ from "../component/FAQ";
import Team from "../component/Team";
import Footer from "../component/Footer";

const Home = () => {
    return (
        <div className="home">
            <div id="landing" className="landing">
                <div className="header">
                    <h1>HackViolet 2025</h1>
                    <div className="copy">
                        <p className="p1">Virginia Tech's premier female-empowerment hackathon</p>
                        <p className="p2">February 1-2 • Data & Decision Sciences Building</p>
                    </div>
                    <div className="buttons">
                        {/* <a href="/" className="button button__resources">Resources</a> */}
                        <a href="https://tally.so/r/3Eb0OL" target="_blank" rel="noreferrer" className="button button__register">Register</a>
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

            <div className="gallery">
                <Gallery />
            </div>

            <div id="faq" className="faq">
                <img className="blob" src={Blob} alt="" />
                <p className="header">Frequently Asked Questions</p>
                <FAQ />
            </div>

            <div id="sponsors" className="sponsors">
                <p className="header">Sponsors</p>
                <div className="copy">
                    <p>With over 500 expected participants attending this in-person hackathon, we need your help to create an incredible experience for young, future innovators!</p>
                    <p>
                    <strong>Benefits of Sponsorship:</strong>
                        <ul>
                            <li>Enhance Brand Visibility</li>
                            <li>Showcase Your Technology</li>
                            <li>Engage with Top Talent</li>
                            <li>Demonstrate Corporate Social Responsibility</li>
                        </ul>
                    </p>
                </div>
                <div className="button">
                    <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:b6a86bfe-a99e-4053-b10d-b450d57a437e" target="_blank" rel="noreferrer" className="button button__sponsorship">
                        Sponsorship Packet
                    </a>
                </div>
            </div>

            <div className="board">
                <p className="header">Team</p>
                <Team />
            </div>

            <div className="footer">
                <img className="blob" src={Blob} alt="" />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
