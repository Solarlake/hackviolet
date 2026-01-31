import React, { useEffect, useRef } from "react";
import "../style/Prizes.scss";

const Prizes = () => {
    return (
        <div className="prizes_container">
            <div className="prizes_table">
                <div className="cell cell__size_4">
                    <h1 className="category_name">Best Overall</h1>
                    <p className="description">This prize is awarded to the team whose project excelled in all areas of judging.</p>
                    <p className="prize_description">Prize: iPad Air M3 chip</p>
                </div>

                <div className="cell cell__size_2">
                    <h1 className="category_name">Best First Time</h1>
                    <p className="description">This prize is awarded to the best team composed entirely of first-time hackers whose project excelled in all areas of judging. Note: To qualify, a majority of the team must consist of first-time hackers.</p>
                    <p className="prize_description">Prize: Nintendo Switch</p>
                </div>
                {/* <div className="cell cell__size_2">
                    <h1 className="category_name">2nd Place First Time</h1>
                    <p className="description">Runner-up for best first-time hack.</p>
                    <p className="prize_description">Prize: JBL Flip 6 Portable Waterproof Speaker</p>
                </div> */}

                <div className="cell cell__size_2">
                    <h1 className="category_name">Best UI/UX</h1>
                    <p className="description">This prize is awarded to the best team whose project had the most intuitive, user-friendly, and aesthetic UX/UI design. </p>
                    <p className="prize_description">Prize: Sony XM5 Headphones</p>
                </div>
                {/* <div className="cell cell__size_2">
                    <h1 className="category_name">2nd Place UI/UX</h1>
                    <p className="description">Runner-up for oustanding UI/UX design.</p>
                    <p className="prize_description">Prize: Westinghouse 24" TV</p>
                </div> */}

                {/* <div className="cell cell__size_4 subtable_container">
                    <div className="subtable"> */}
                        <div className="cell cell__size_2_small">
                            <h1 className="category_name">Best Hack to Support Women</h1>
                            <p className="description">This prize awarded to the team whose project creatively tackle issues that women face, aids female-empowerment, combats the gender gap in tech, etc. </p>
                            <p className="prize_description">Prize: Apple Watch Series 10</p>
                        </div>
                        {/* <div className="cell cell__size_2_small">
                            <h1 className="category_name">Arcfield: Best UI/UX for AI Data Labeling</h1>
                            <p className="description">Awarded to the project with the best user interface design for AI data labeling. Solutions may incorporate features like automated labeling or metadata tagging to improve data organization, user experience, and traceability within AI ecosystems.
                            </p>
                            <p className="prize_description">Prize: One $300 Amazon Gift Card for the team</p>
                        </div> */}
                        <div className="cell cell__size_2_small">
                            <h1 className="category_name">Capital One: Best Financial Hack</h1>
                            <p className="description">How will you reimagine banking?</p>
                            <p className="prize_description">Prize: $250 Giftcard from Giftogram</p>
                        </div>
                        {/* <div className="cell cell__size_2_small">
                            <h1 className="category_name">Apex Center: Best Startup Hack</h1>
                            <p className="description">Awarded to the project with the strongest potential to become a successful startup, showcasing innovation, scalability, and market impact.</p>
                            <p className="prize_description">Prize: $100 Best Buy Gift Card</p>
                        </div>
                        <div className="cell cell__size_2_small">
                            <h1 className="category_name">MLH: Best Use of MongoDB Atlas</h1>
                            <p className="description"></p>
                            <p className="prize_description">Prize: M5GO IoT Starter Kit</p>
                        </div>
                        <div className="cell cell__size_2_small">
                            <h1 className="category_name">MLH: Best Use of Streamlit</h1>
                            <p className="description"></p>
                            <p className="prize_description">Prize: Ardunio Tiny MLH Kit</p>
                        </div>
                        <div className="cell cell__size_2_small">
                            <h1 className="category_name">MLH: Best Use of Hashicorp Terraform</h1>
                            <p className="description"></p>
                            <p className="prize_description">Prize: Hashicorp Wireless Mechanical Keyboard</p>
                        </div>
                        <div className="cell cell__size_2_small">
                            <h1 className="category_name">MLH: Best Use of AI-Powered by Reach Capital</h1>
                            <p className="description"></p>
                            <p className="prize_description">Prize: Logitech Webcam & Meeting with Co-Founding Partner at Reach Capital</p>
                        </div>
                        <div className="cell cell__size_2_small">
                            <h1 className="category_name">MLH: Best Use of Gen AI</h1>
                            <p className="description"></p>
                            <p className="prize_description">Prize: Raspberry Pi & Wacom Tablet</p>
                        </div>
                        <div className="cell cell__size_2_small">
                            <h1 className="category_name">MLH: Best Domain Name from GoDaddy</h1>
                            <p className="description"></p>
                            <p className="prize_description">Prize: Hack From Home Kit </p>
                        </div> */}
                    {/* </div>
                </div> */}
            </div>
            <p className="disclaimer">*prizes listed are awarded to each team member unless otherwise specified</p>
        </div>
    );
};

export default Prizes;
