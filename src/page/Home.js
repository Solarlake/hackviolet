import React from "react";
import "../style/Home.scss";
// import Blob from "../asset/svg/blob.svg";
// import FooterBlob from "../asset/svg/footer_blob.svg";
import FooterBlob from "../asset/image/footer_blob.png";
import Rocket from "../asset/image/rocket.png";
import Clouds from "../asset/image/clouds.png";
import Gallery from "../component/Gallery";
import Sponsors from "../component/Sponsors";
import FAQ from "../component/FAQ";
import Team from "../component/Team";
import Footer from "../component/Footer";
import Socials from "../component/Socials";
import Button from "../component/Button";

const Home = () => {
    return (
        <div className="home">
            <div id="landing" className="landing">
                <div className="header">
                    <h1>HackViolet 2025</h1>
                    <div className="copy">
                        <p className="p1">Virginia Tech's premier female-empowerment hackathon</p>
                        <p className="p2">February 1-2 • Data & Decision Sciences Building</p>
                    </div>
                    <div className="buttons">
                        {/* <Button href="https://forms.gle/DzFDNvCCFqpJXVfD6" newTab clear text="Judge" />
                        <Button href="https://forms.gle/YgKufXUzh3Pn7UcG7" newTab clear text="Mentor" /> */}
                        <Button href="https://docs.google.com/forms/d/e/1FAIpQLScA4kTd2vr5kAVaItUHcuA63ve9774q_UaV3UUaCl93pRMzEQ/viewform" newTab clear text="Volunteer" />
                        <Button href="https://tally.so/r/3Eb0OL" newTab text="Register" />
                    </div>
                    <div className="socials">
                        <Socials />
                    </div>
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

            <div className="gallery">
                <Gallery />
            </div>

            <div id="faq" className="faq">
                <p className="header">Frequently Asked Questions</p>
                <FAQ />
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
