import React from "react";
import "../style/Footer.scss";
import Logo from "../asset/image/hackviolet_text.png";
import Socials from "./Socials";
import externallink from "../asset/image/external_link.png";
import hackvioletwhite from "../asset/image/hackviolet_text_white.png";
import halfFlower from  "../asset/image/light-pink-flowers.png";
import bobaemoji from "../asset/image/boba-emoji.png"
import footerflower from "../asset/image/footer-flower.png"

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="footer-links">

            <div className="getupdated">
                <h3>GET UPDATED</h3>
                <div className="newsletterlink">
                    <a className="newsletterform" href="https://forms.gle/9DNHdsPFTEbvbokB9" target="_blank" rel="noreferrer">Follow our newsletter</a>
                    <img src={externallink} alt=""/>
                </div>
            </div>

            <div className="showup">
                <h3>SHOW UP</h3>
                <div className="eventinfo">
                    <p>Jan. 31 - Feb. 1, 2026</p>
                    <p>
                    at <a class="squireslink" href="https://maps.app.goo.gl/DgFgkjvSVCVpsTXB7" target="_blank" rel="noreferrer">Squires Student Center</a>
                    </p>
                    <a className="MLHlink" href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a>
                </div>
            </div>

            <div className="contact">
                <h3>CONTACT</h3>
                <div className="contactinfo">
                    <div className="reachout">
                        <p>Reach out at </p>
                        <p className="email"><a href="mailto:hackvioletvt@gmail.com">hackvioletvt@gmail.com</a></p>
                    </div>
                    <Socials />
                </div>
            </div>

            </div>
            <div className="hackviolet">
                <img className="logo" src={hackvioletwhite} alt="" />
                <img className="halfFlower" src={halfFlower} alt="" />
            </div>
            <div className="copyright">
                <p className="madewith">Made with <img src={bobaemoji} className="bobaemoji" /> by the HackViolet team.</p>
                <p>© 2026 HackViolet</p>
            </div>
            <img src={footerflower} className="footerflower"/>
            
        </div>
    );
}

export default Footer;