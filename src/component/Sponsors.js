import React from "react";
import "../style/Sponsors.scss";
import Button from "./Button";

import apexLogo from "../asset/image/logos/apex.jpg";
import arcfieldLogo from "../asset/image/logos/arcfield.jpg";
import capitalOneLogo from "../asset/image/logos/capital-one.jpg";
import cciLogo from "../asset/image/logos/cci.jpg";
import codePathLogo from "../asset/image/logos/codepath.jpg";
import convergintLogo from "../asset/image/logos/convergint.jpg";
import mcDeanLogo from "../asset/image/logos/mc-dean.jpg";

const Sponsors = () => {
    return (
        <div id="sponsors" className="sponsors">
            <div className="logo_container">
                <a href="https://www.arcfield.com/" target="_blank" rel="noopener noreferrer">
                    <img src={arcfieldLogo} alt="Arcfield Logo" className="sponsor_logo" />
                </a>
                <a href="https://www.mcdean.com/" target="_blank" rel="noopener noreferrer">
                    <img src={mcDeanLogo} alt="MC Dean Logo" className="sponsor_logo" />
                </a>
                <a href="https://www.capitalone.com/" target="_blank" rel="noopener noreferrer">
                    <img src={capitalOneLogo} alt="Capital One Logo" className="sponsor_logo" />
                </a>
                <a href="https://apex.vt.edu/" target="_blank" rel="noopener noreferrer">
                    <img src={apexLogo} alt="Apex Logo" className="sponsor_logo" />
                </a>
                <a href="https://www.convergint.com/" target="_blank" rel="noopener noreferrer">
                    <img src={convergintLogo} alt="Convergint Logo" className="sponsor_logo" />
                </a>
                <a href="https://cyberinitiative.org/" target="_blank" rel="noopener noreferrer">
                    <img src={cciLogo} alt="CCI Logo" className="sponsor_logo" />
                </a>
                <a href="https://www.codepath.org/" target="_blank" rel="noopener noreferrer">
                    <img src={codePathLogo} alt="CodePath Logo" className="sponsor_logo" />
                </a>
            </div>
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
            <Button href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:1c24652c-dbd8-45ee-afc9-156c8ebc9852" newTab text="Sponsorship Packet"/>
        </div>
    );
}

export default Sponsors;