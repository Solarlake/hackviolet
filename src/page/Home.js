import React, { useEffect } from "react";
import "../style/Home.scss";
import { useLocation } from 'react-router-dom';
import CountdownTimer from "react-countdown";

import Blob from "../asset/svg/blob.svg";
import FooterBlob from "../asset/image/footer_blob.png";
import HeaderText from "../asset/image/hackviolet_text_gradient.png";
import Rocket from "../asset/image/rocket.png";
import Island from "../asset/image/island.png";
import Clouds from "../asset/image/clouds_plenty.png";
import Gallery from "../component/Gallery";
import FAQ from "../component/FAQ";
import Schedule from "../component/Schedule";
import Prizes from "../component/Prizes";
import Sponsors from "../component/Sponsors";
import Team from "../component/Team";
import Footer from "../component/Footer";
import Socials from "../component/Socials";
import Button from "../component/Button";

const Home = () => {
    const targetDate = new Date("2025-02-02T12:30:00-05:00").getTime();
    
    const countdownRenderer = ({ hours, minutes, seconds, completed }) => {
        const format = (num) => String(num).padStart(2, "0");
        
        return (
            <div className="countdown_timer">
                {format(hours)}:{format(minutes)}:{format(seconds)}
            </div>
        );
    }
    
    const location = useLocation();
    
    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="home">
            <div id="landing" className="landing">
                <div className="header">
                    {/* <h1>HackViolet 2025</h1> */}
                    <div className="header_text_container">
                        <img src={HeaderText} alt="" className="header_logo" />
                    </div>
                    <div className="copy">
                        <p className="location">Jan. 31 - Feb. 1, 2026 • <a href="https://maps.app.goo.gl/DgFgkjvSVCVpsTXB7" target="_blank" rel="noreferrer">Squires Student Center</a></p>
                        <p className="tagline">Virginia Tech's premier female-empowerment hackathon</p>
                    </div>
                    {/* <div className="countdown">
                        <a href="/countdown">
                            <CountdownTimer date={targetDate} renderer={countdownRenderer}/>
                        </a>
                    </div> */}
                    <div className="buttons">
                        {/* <Button href="https://forms.gle/DzFDNvCCFqpJXVfD6" newTab clear text="Judge" />
                        <Button href="https://forms.gle/YgKufXUzh3Pn7UcG7" newTab clear text="Mentor" /> */}
                        {/* <Button href="https://docs.google.com/forms/d/e/1FAIpQLScA4kTd2vr5kAVaItUHcuA63ve9774q_UaV3UUaCl93pRMzEQ/viewform" newTab clear text="Volunteer" /> */}
                        {/* <Button href="https://discord.gg/YyEXbq8zpD" newTab clear text="Discord" /> */}
                        {/* <Button href="https://hackviolet-2025.devpost.com/" newTab text="Devpost" /> */}
                        {/* <Button href="https://tally.so/r/3Eb0OL" newTab text="Register" /> */}
                        <Button href="https://tally.so/r/n0gdr6" newTab clear text="Register" />
                        <Button href="/sponsorship" clear text="Sponsor us for 2026" />
                        
                    </div>
                    {/* <div className="socials">
                        <Socials />
                    </div> */}
                </div>
            </div>

            <img className="clouds" src={Clouds} alt="" />
            <div className="rocket_container">
                <img className="rocket" src={Rocket} alt="" />
            </div>

            <div id="about" className="about">
                <div className="copy">
                    <p>
                        <span className="hv">HackViolet</span> is a 24-hour hackathon hosted by The Association of Women in Computing, a student-run, non-profit organization at Virginia Tech.
                    </p>
                    <p>
                        Through the event, we encourage all individuals to learn about and become change agents for the gender gap in technology by innovating and inspiring with code.
                    </p>
                </div>
            </div>

            <div className="island_container">
                <img className="island" src={Island} alt="" />
            </div>

            <div id="schedule" className="schedule">
                <p className="header">Schedule</p>
                <Schedule />
            </div>

            <div id="prizes" className="prizes">
                <p className="header">Prizes</p>
                <Prizes />
            </div>


            <div id="faq" className="faq">
                <img src={Blob} alt="" className="blob" />
                <p className="header">Frequently Asked Questions</p>
                <FAQ />
            </div>

            <div className="gallery">
                <Gallery />
            </div>

            <div id="sponsors" className="sponsors">
                <p className="header">Sponsors</p>
                <Sponsors />
            </div>

            <div className="board">
                <p className="header">Team</p>
                <Team />
            </div>

            <div className="footer">
                <Footer />
                <img className="footer_blob" src={FooterBlob} alt="" />
            </div>
        </div>
    );
};

export default Home;
