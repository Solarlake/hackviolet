import React, { useEffect, useRef } from "react";
import "../style/Prizes.scss";

const Prizes = () => {
    return (
        <div className="prizes_container">
            <div className="prizes_table">
                <div className="cell cell__size_4">
                    <h1 className="category_name">Best Overall</h1>
                    <p className="description">Awarded to the top software project excelling in all areas of judging—demonstrating oustanding technical innovation and execution.</p>
                    <p className="prize_description">Prize: iPad Mini 128GB + Apple Pencil Pro</p>
                </div>

                <div className="cell cell__size_2">
                    <h1 className="category_name">Best First Time</h1>
                    <p className="description">Awarded to the best software project by first-time hackathon participants.</p>
                    <p className="prize_description">Prize: Beats Solo 4 True Wireless Headphones</p>
                </div>
                <div className="cell cell__size_2">
                    <h1 className="category_name">2nd Place First Time</h1>
                    <p className="description">Runner-up for best first-time hack.</p>
                    <p className="prize_description">Prize: JBL Flip 6 Portable Waterproof Speaker</p>
                </div>

                <div className="cell cell__size_2">
                    <h1 className="category_name">Best UI/UX</h1>
                    <p className="description">Awarded to the project with the most intuitive and visually appealing user interface.</p>
                    <p className="prize_description">Prize: Acer 15.6" Portable Monitor</p>
                </div>
                <div className="cell cell__size_2">
                    <h1 className="category_name">2nd Place UI/UX</h1>
                    <p className="description">Runner-up for oustanding UI/UX design.</p>
                    <p className="prize_description">Prize: Westinghouse 24" TV</p>
                </div>

                {/* <div className="cell cell__size_4 subtable_container">
                    <div className="subtable"> */}
                        <div className="cell cell__size_2_small">
                            <h1 className="category_name">Best Hack to Support Women</h1>
                            <p className="description">Awarded to the project that best empowers and supports women by creatively addressing issues that women face, such as combating the gender gap in tech or aiding female-empowerment.</p>
                            <p className="prize_description">Prize: Mac Mini</p>
                        </div>
                        <div className="cell cell__size_2_small">
                            <h1 className="category_name">Arcfield: Best UI/UX for AI Data Labeling</h1>
                            <p className="description">Awarded to the project with the best user interface design for AI data labeling. Solutions may incorporate features like automated labeling or metadata tagging to improve data organization, user experience, and traceability within AI ecosystems.
                            </p>
                            <p className="prize_description">Prize: One $300 Amazon Gift Card for the team</p>
                        </div>
                        <div className="cell cell__size_2_small">
                            <h1 className="category_name">Capital One: Best Financial Hack</h1>
                            <p className="description">Awarded to the most innovative and creative fintech solution.</p>
                            <p className="prize_description">Prize: $250 Amazon Gift Card</p>
                        </div>
                        <div className="cell cell__size_2_small">
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
                        </div>
                    {/* </div>
                </div> */}
            </div>
            <p className="disclaimer">*prizes listed are awarded to each team member unless otherwise specified</p>
        </div>
    );
};

export default Prizes;
