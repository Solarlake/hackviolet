import React from "react";
import "../style/Background.scss";

const Background = () => {
    return (
        <div className="background">
            <div className="circle circle__overlay"></div>
            <div className="circle circle__overlay"></div>
            <div className="circle circle__overlay"></div>
            <div className="circle circle__gradient"></div>
        </div>
    );
};

export default Background;
