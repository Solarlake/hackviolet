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
        <div className="sponsors_container">
            <div className="tier_container">
                <div className="sponsor_letter">
    <h2>Dear Future Sponsor,</h2>
    <h3>We are <span className="highlight">HackViolet</span>!</h3>
    <p>
        HackViolet is an annual 24-hour <strong>female-empowerment hackathon</strong> at Virginia Tech, 
        scheduled for <strong>February 1–2, 2025</strong>. While we operate and are funded independently, 
        we share a mission with our sister organization, the Association for Women in Computing (AWC), 
        to support and uplift women in technology.
    </p>
    <p>
        HackViolet serves as a unique platform to empower young women in the male-dominated field of 
        technology. Our organization offers participants invaluable opportunities to acquire 
        <strong>new skills</strong>, establish <strong>mentor relationships</strong>, and engage in a 
        <strong>supportive community</strong>. We warmly welcome all participants—regardless of gender 
        identity—to showcase their creativity and make an impact in the field of technology.
    </p>
    <p>
        With over 500 expected participants attending this in-person hackathon, we need your help to 
        create an incredible experience for all of our future innovators in a safe, inclusive environment!
    </p>

    <h4>Why Sponsor HackViolet?</h4>
    <ul>
        <li>Enhance brand visibility through event materials</li>
        <li>Showcase your technology</li>
        <li>Engage with top talent</li>
        <li>Demonstrate Corporate Social Responsibility</li>
    </ul>

    <h4>Join us in 2025!</h4>
    <p>
        Help us shape the lives of young, future innovators and prepare them for the field of emerging technologies! 
        Please have a look at our sponsorship tiers above and reach out if you are interested in becoming an 
        official HackViolet 2025 sponsor!
    </p>

    <p><strong>Thank you for your time,<br />HackViolet Board</strong></p>
</div>
                <div className="tier orchid">
                    <p>Orchid</p>
                    <div className="logo_container">
                        <a href="https://www.arcfield.com/" target="_blank" rel="noopener noreferrer">
                            <img src={arcfieldLogo} alt="Arcfield Logo" className="company_logo" />
                        </a>
                    </div>
                </div>

                <div className="tier lilac">
                    <p>Lilac</p>
                    <div className="logo_container">
                        <a href="https://www.mcdean.com/" target="_blank" rel="noopener noreferrer">
                            <img src={mcDeanLogo} alt="MC Dean Logo" className="company_logo" />
                        </a>
                        <a href="https://www.capitalone.com/" target="_blank" rel="noopener noreferrer">
                            <img src={capitalOneLogo} alt="Capital One Logo" className="company_logo" />
                        </a>
                        <a href="https://apex.vt.edu/" target="_blank" rel="noopener noreferrer">
                            <img src={apexLogo} alt="Apex Logo" className="company_logo" />
                        </a>
                    </div>
                </div>

                <div className="tier lavender">
                    <p>Lavender</p>
                    <div className="logo_container">
                        <a href="https://www.convergint.com/" target="_blank" rel="noopener noreferrer">
                            <img src={convergintLogo} alt="Convergint Logo" className="company_logo" />
                        </a>
                        <a href="https://cyberinitiative.org/" target="_blank" rel="noopener noreferrer">
                            <img src={cciLogo} alt="CCI Logo" className="company_logo" />
                        </a>
                        <a href="https://www.codepath.org/" target="_blank" rel="noopener noreferrer">
                            <img src={codePathLogo} alt="CodePath Logo" className="company_logo" />
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