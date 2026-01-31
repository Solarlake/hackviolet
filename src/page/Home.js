import React, { useEffect } from "react";
import "../style/Home.scss";
import { useLocation } from 'react-router-dom';
import CountdownTimer from "react-countdown";
import { Link } from 'react-router-dom';


import HeaderText from "../asset/image/hackviolet_text_gradient.png";
import Gallery from "../component/Gallery";
import FAQ from "../component/FAQ";
import Schedule from "../component/Schedule";
import Prizes from "../component/Prizes";
import Sponsors from "../component/Sponsors";
import Team from "../component/Team";
import Innovation from "../component/Innovation";
import Footer from "../component/Footer";
import Socials from "../component/Socials";
import Button from "../component/Button";
import FAQGrid from "../asset/image/FAQ-grid.png";
import Marquee from "../component/Marquee";
import FAQShape from "../asset/image/FAQShape.png";
import pinkFlower from "../asset/image/light-pink-flowers.png";
import gradientFlower from "../asset/image/gradient-flower.png";
import gradientPinwheel from "../asset/image/gradient-pinwheel.png";
import RotatingPinwheel from "../component/RotatingPinwheel";
import godrays from "../asset/image/godrays.png";
import RotatingText from "../component/RotatingText"; 
import halfFlowers from "../asset/image/half-flowers-logo-purple-to-black.png";
import aboutPhotos from "../asset/image/about-photos.png";


const Home = () => {
    const targetDate = new Date("2026-02-31T12:30:00-05:00").getTime();
    
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
            <div className="purpleGradContainer"> </div>
            <div className="godraysContainer">
                        <img src={godrays} alt="godrays" className="godrays" />
                    </div>
            <div id="landing" className="landing">
                <div className="header">
                    {/* <h1>HackViolet 2026</h1> */}

                    <div className="halfFlowerContainer">
                        <img src={halfFlowers} alt="halfFlower" className="halfFlower" />
                    </div>

                    <div className="hero-copy">
                        <p className="location">Jan. 31 - Feb. 1, 2026<a href="https://maps.app.goo.gl/DgFgkjvSVCVpsTXB7" target="_blank" rel="noreferrer">Squires Student Center</a></p>
                        
                    </div>
                    <div className="flowerContainer">
                        <RotatingPinwheel src={gradientFlower} alt="gradient flower" />
                    </div>

                    <div className="pinwheelContainer">
                        <RotatingPinwheel src={gradientPinwheel} alt="gradient pinwheel" />
                    </div>

                    <div className="header_text_container">
                        <img src={HeaderText} alt="" className="header_logo" />
                    </div>
                    <div className="rotating_text_container">
                        <RotatingText />
                    </div>
                    <p className="tagline">Virginia Tech's premier female-empowerment hackathon</p>
                    {/*<div className="countdown">
                        <a href="/countdown">
                            <CountdownTimer date={targetDate} renderer={countdownRenderer}/>
                        </a>
                    </div>*/}
                    <div className="buttons">
                        {/* <Button href="https://forms.gle/DzFDNvCCFqpJXVfD6" newTab clear text="Judge" />
                        <Button href="https://forms.gle/YgKufXUzh3Pn7UcG7" newTab clear text="Mentor" /> */}
                        {/* <Button href="https://docs.google.com/forms/d/e/1FAIpQLScA4kTd2vr5kAVaItUHcuA63ve9774q_UaV3UUaCl93pRMzEQ/viewform" newTab clear text="Volunteer" /> */}
                        {/* <Button href="https://discord.gg/YyEXbq8zpD" newTab clear text="Discord" /> */}
                        {/* <Button href="https://hackviolet-2025.devpost.com/" newTab text="Devpost" /> */}
                        {/* <Button href="https://tally.so/r/3Eb0OL" newTab text="Register" /> */}
                        <a
                            href="https://tally.so/r/n0gdr6"
                            target="_blank"  
                            rel="noopener noreferrer" 
                            className="register-button"
                            >
                            Register
                        </a>
                        <a
                            href="https://hackviolet-2026.devpost.com/?_gl=1*rdmepk*_gcl_au*MTYwOTY3ODk5My4xNzY4NzkwMTY4*_ga*MTc1MTUxODQ5Mi4xNzU5MzM2MzAz*_ga_0YHJK3Y10M*czE3Njk4NzY5NzgkbzkkZzEkdDE3Njk4NzcyMzgkajUkbDAkaDA"
                            target="_blank"  
                            rel="noopener noreferrer" 
                            className="devpost-button"
                            >
                            Devpost
                        </a>
                        {/* <Link to="/sponsorpage" className="sponsor-button">
                            Sponsor
                        </Link> */}
                        <a
                            href="https://discord.gg/DUpdFB6742"
                            target="_blank"  
                            rel="noopener noreferrer" 
                            className="discord-button"
                            >
                            Join Discord Server
                        </a>
    
                        
                        
                    </div>
                    {/* <div className="apply-judge-mentor">
                        <p>Apply to be a judge or mentor!</p>

                        <div className="judge-mentor">
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLScTI1BJToNk_Yn4glzLpiZHmzVVneBfnYcgCYU_3AZFewqkEw/viewform"
                                target="_blank"  
                                rel="noopener noreferrer" 
                                className="judge-button"
                                >
                                Judge
                            </a>

                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSd1XREWV_RI30xn_8n4-VqXkNQC8YSToZlwdHOssS_cqge6jw/viewform"
                                target="_blank"  
                                rel="noopener noreferrer" 
                                className="mentor-button"
                                >
                                Mentor
                            </a>
                        </div>

                    </div> */}

                    {/* <div className="socials">
                        <Socials />
                    </div> */}
                    
                </div>
            </div>

        

            <div id="about" className="about">

                <div className="about-container">
                  <div className="copy-container">
                    <div className="Welcome"><h2>Welcome to HackViolet</h2></div>
                    
                    <div className="copy">
                            <p>
                                HackViolet is a 24-hour hackathon hosted by The Association of Women in Computing, a student-run, non-profit organization at Virginia Tech.
                            </p>
                            <p>
                                Through the event, we encourage all individuals to learn about and become change agents for the gender gap in technology by innovating and inspiring with code.
                            </p>
                        </div>
                     <div className="What-hackathon"><h2>What is a hackathon?</h2></div>
                        <div className="what-copy">
                            <p>A hackathon is a fast-paced event where participants of diverse backgrounds come together for typically 24-48 intensive hours and solve a specific problem by developing a new, working product. Participants submit these projects and compete in different tracks to win prizes, unique opportunities, and merch. Hackathons are also a great place to build connections with top businesses or other hackers, learn about the tech world, and make lasting memories!</p>
                        </div>
                     </div>

                    <div className="about-images">
                        <img src={aboutPhotos} alt="about photos" className="about-photos" />
                    </div>

                </div>
            </div>

            <div className="schedule-container" id="schedule">
            <div className="schedule-marquee">
                <Marquee 
                    text=" SCHEDULE /" 
                    speed={50}
                    color="rgb(251, 240, 255)"
                />
                
            </div>
            <p className="sponsors-thank-you">Attendees of these events will be entered into a separate lottery for giftcards!</p>
            <Schedule />
            </div>

            <div className="innovation-section">
                <Innovation />
            </div>


            <div className= "sponsors" id="sponsors">
                <Marquee 
                    text=" SPONSORS /" 
                    speed={50}
                    color="#FFF6FD"
                />
                <p className="sponsors-thank-you">Thank you to the sponsors that help make HackViolet 2026 possible!</p>
                <Sponsors />
                
                {/* <div className="sponsors-text">
                    <p className="sponsors-support">Supporting HackViolet gives your organization a chance to champion diversity in tech, gain visibility among engaged and ambitious student innovators, and help shape the next generation of makers, problem-solvers, and future employees.</p>
                    <p>Email us at hackvioletvt@gmail.com</p>
                </div>
                <div className="sponsor-buttons">

                    <div className="sponsor-button-container">
                        <a 
                            href="/sponsorpage" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="become-sponsor-btn"
                        >
                            Become a Sponsor
                        </a>

                        <a 
                            href="/HackViolet_2026_Sponsorship_packet.pdf" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="view-packet-btn"
                        >
                            Sponsorship Package
                        </a>
                    </div> */}
                    <div className="sponsor-flowers">
                        <img src={pinkFlower} alt="" className="pinkFlower" />
                    </div>
                
            </div>

            
            <Marquee 
                text=" PRIZES /" 
                speed={40}
            />

            <div id="prizes" className="prizes">
                <p className="more-prizes">More prizes on Devpost!</p>
            <Prizes />
            </div> 
            


            <div className="faqshape">
                <img src={FAQShape} alt="" className="FAQShape" />
                </div>

            <Marquee 
                text=" FREQUENTLY ASKED QUESTIONS /" 
                speed={90}
            />

            <div id="faq" className="faq">
                <img src={FAQGrid} alt="" className="FAQGrid" />
            <FAQ />
            </div>

            {/* <div className="gallery">
                <Gallery />
            </div>
            
           


            
           */ }
            <Marquee 
                text="MEET THE TEAM /" 
                speed={40}
            />
            <div className="board">
                <Team />
            </div>

            <div className="footer">
                <Footer />
                
            </div>
        </div>
    );
};

export default Home;
