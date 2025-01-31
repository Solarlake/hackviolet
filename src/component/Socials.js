import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faDiscord, faDev, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "../style/Socials.scss";

const Socials = () => {
    return (
        <div className="socials">
            <a href="https://www.instagram.com/hackvioletvt/" target="_blank" rel="noreferrer" className="icon">
                <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://discord.gg/Dak2ahxF" className="icon">
                <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a href="https://www.linkedin.com/company/hackviolet-vt/" target="_blank" rel="noreferrer" className="icon">
                <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            {/* <a href="/" className="icon">
                <FontAwesomeIcon icon={faDev} />
            </a> */}
        </div>
    );
}

export default Socials;