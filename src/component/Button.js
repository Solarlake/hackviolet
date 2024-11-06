import React from "react";
import "../style/Button.scss";

const Button = ({href, newTab, text, clear, style}) => {
    return (
        <div className="button_container" style={style}>
            <a href={href} target={newTab ? "_blank" : ""} rel={newTab ? "noreferrer" : ""} className={clear ? "button button__clear" : "button"}>{text}</a>
        </div>
    );
};

Button.defaultProps = {
    href: "/",
    newTab: false,
    negative: false
};

export default Button;
