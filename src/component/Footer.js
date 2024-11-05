import React from "react";
import "../style/Footer.scss";
import Logo from "../asset/image/hackviolet_text.png";
import Socials from "./Socials";

const Footer = () => {
    return (
        <div className="footer_container">
            <div className="hackviolet">
                <img className="logo" src={Logo} alt="" />
                <div className="contact">
                    <p className="label">Contact us!</p>
                    <p className="email"><a href="mailto:hackvioletvt@gmail.com">hackvioletvt@gmail.com</a></p>
                </div>
            </div>
            <div className="copyright">
                <p>© 2025 HackViolet | <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a></p>
            </div>
            <Socials />
        </div>
    );
}

export default Footer;