import React from "react";
import "../style/Background.scss";

import Blob from "../asset/svg/blob.svg";

const Background = () => {
    return (
        <div className="background">
            {/* <div className="gradient"></div> */}
            <img className="blob" src={Blob} alt="" />
            <div className="circle circle__overlay"></div>
            <div className="circle circle__overlay"></div>
            <div className="circle circle__overlay"></div>
            <div className="circle circle__gradient"></div>
        </div>
    );
};

export default Background;
