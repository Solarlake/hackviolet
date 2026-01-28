import React from "react";
import "../style/Sponsors.scss";
import Button from "./Button";

import apexLogo from "../asset/image/logos/apex.jpg";
import arcfieldLogo from "../asset/image/logos/arcfield.jpg";
import capitalOneLogo from "../asset/image/logos/capital-one-1.png";
import cciLogo from "../asset/image/logos/cci-1.png";
import codePathLogo from "../asset/image/logos/codepath.jpg";
import convergintLogo from "../asset/image/logos/convergint.jpg";
import mcDeanLogo from "../asset/image/logos/mc-dean-1.png";

const Sponsors = () => {
    return (
        <div className="sponsors_container">
            <div className="tier_container">
                {/* <div className="tier orchid">
                    <p>Orchid</p>
                    <div className="logo_container">
                        <a href="https://www.arcfield.com/" target="_blank" rel="noopener noreferrer">
                            <img src={arcfieldLogo} alt="Arcfield Logo" className="company_logo" />
                        </a>
                    </div>
                </div> */}

                <div className="tier lilac">
                    <p>Lilac</p>
                    <div style={{ width: '900px', height: '1px', backgroundColor: 'white' }} />
                    <div className="logo_container">
                        <a href="https://www.mcdean.com/" target="_blank" rel="noopener noreferrer">
                            <img src={mcDeanLogo} alt="MC Dean Logo" className="company_logo" />
                        </a>
                        <a href="https://www.capitalone.com/" target="_blank" rel="noopener noreferrer">
                            <img src={capitalOneLogo} alt="Capital One Logo" className="company_logo" />
                        </a>
                        
                    </div>
                </div>

                <div className="tier lavender">
                    <p>Lavender</p>
                    <div style={{ width: '300px', height: '1px', backgroundColor: 'white' }} />
                    <div className="logo_container">
                        
                        <a href="https://cyberinitiative.org/" target="_blank" rel="noopener noreferrer">
                            <img src={cciLogo} alt="CCI Logo" className="company_logo" />
                        </a>
                        
                    </div>
                </div>
            </div>
            {/* <div className="copy">
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
            <Button href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:1c24652c-dbd8-45ee-afc9-156c8ebc9852" newTab text="Sponsorship Packet"/> */}
        </div>
    );
}

export default Sponsors;

