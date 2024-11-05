import React from "react";
import "../style/Navigation.scss";
import Logo from "../asset/image/logo.png";
import LogoText from "../asset/image/hackviolet_text.png";

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="bar">
                <div className="logo">
                    <a href="#landing">
                        <img className="icon" src={Logo} alt="HackViolet 2025 Logo" />
                        <img className="text" src={LogoText} alt="HackViolet 2025 Text" />
                        {/* <p>HackViolet</p> */}
                    </a>
                </div>
                <div className="links">
                    <a href="#about">About</a>
                    <a href="#faq">FAQ</a>
                    <a href="#sponsors">Sponsors</a>
                </div>
                <div className="register">
                    <a href="https://tally.so/r/3Eb0OL">
                        <p>Register</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
