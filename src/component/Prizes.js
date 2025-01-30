import React, { useEffect, useRef } from "react";
import "../style/Prizes.scss";

import hv1 from "../asset/image/gallery/hv1.jpg";
import hv2 from "../asset/image/gallery/hv2.jpg";
import hv3 from "../asset/image/gallery/hv3.jpg";
import hv4 from "../asset/image/gallery/hv4.jpg";
import hv5 from "../asset/image/gallery/hv5.jpg";
import hv6 from "../asset/image/gallery/hv6.jpg";

const images = [
    { src: hv5, alt: "Students coding in a workshop" },
    { src: hv1, alt: "HackViolet 2024 opening ceromony" },
    { src: hv4, alt: "Company panelists answering questions" },
    { src: hv2, alt: "Students coding a hackathon project" },
    { src: hv3, alt: "Students competing at cup stacking" },
    { src: hv6, alt: "Student petting Virginia Tech therapy dog" },
];

const Prizes = () => {
    const galleryRef = useRef(null);

    useEffect(() => {
        const scrollContainer = galleryRef.current;
        let scrollAmount = 0;
        const scrollStep = 1; 
        const interval = setInterval(() => {
            scrollAmount += scrollStep;
            scrollContainer.scrollLeft = scrollAmount;

            // Reset scroll to the beginning when reaching the end
            if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
                scrollAmount = 0;
            }
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="gallery_container" ref={galleryRef}>
            <div className="gallery">
                {images.map((image, index) => (
                    <img key={index} src={image.src} alt={image.alt} />
                ))}
            </div>
        </div>
    );
};

export default Prizes;
