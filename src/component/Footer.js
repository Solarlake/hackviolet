import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faDiscord, faDev, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "../style/Footer.scss";
import Logo from "../asset/image/logo_text_black.png";

const Footer = () => {
    return (
        <div className="footer_container">
            {/* <div className="logo">
                <a href="/">
                    <img src={Logo} alt="HackViolet 2025 Logo Text" />
                </a>
            </div> */}
            <p>
                <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:da94c2e3-f11b-40b3-9c6c-68e9507693ca" target="_blank" rel="noreferrer">
                    <u>MLH Code of Conduct</u> |&nbsp;
                </a>
                <a href="mailto:hackvioletvt@gmail.com" target="_blank" rel="noreferrer">
                    <u>Contact Us</u>
                </a>
            </p>
            <p>
                Copyright © 2025 HackViolet. All rights reserved.           
            </p>
            {/* <div className="socials">
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
            </div> */}
        </div>
    );
}

export default Footer;