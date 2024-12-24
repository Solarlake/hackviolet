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
            <Button href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:1c24652c-dbd8-45ee-afc9-156c8ebc9852" newTab text="Sponsorship Packet"/>
        </div>
    );
}

export default Sponsors;