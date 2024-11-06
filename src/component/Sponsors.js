import React from "react";
import "../style/Sponsors.scss";
import Button from "./Button";

const Sponsors = () => {
    return (
        <div id="sponsors" className="sponsors">
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
            <Button href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:b6a86bfe-a99e-4053-b10d-b450d57a437e" newTab text="Sponsorship Packet"/>
        </div>
    );
}

export default Sponsors;