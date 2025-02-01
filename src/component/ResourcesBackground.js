import React from "react";
import "../style/ResourcesBackground.scss";

import Blob from "../asset/svg/blob.svg";

const ResourcesBackground = () => {
    return (
        <div className="resources_background">
            <img className="blob" src={Blob} alt="" />
            <div className="circle circle__overlay"></div>
            <div className="circle circle__overlay"></div>
            <div className="circle circle__overlay"></div>
            <div className="circle circle__gradient"></div>
        </div>
    );
};

export default ResourcesBackground;
