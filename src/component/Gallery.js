import React, { useEffect, useRef } from "react";
import "../style/Gallery.scss";

import hv1 from "../asset/image/gallery/hv1.jpg";
import hv2 from "../asset/image/gallery/hv2.jpg";
import hv3 from "../asset/image/gallery/hv3.jpg";
import hv4 from "../asset/image/gallery/hv4.jpg";
import hv5 from "../asset/image/gallery/hv5.jpg";
import hv6 from "../asset/image/gallery/hv6.jpg";

const images = [
    { src: hv5, alt: "Description of image 5" },
    { src: hv1, alt: "Description of image 1" },
    { src: hv4, alt: "Description of image 4" },
    { src: hv2, alt: "Description of image 2" },
    { src: hv3, alt: "Description of image 3" },
    { src: hv6, alt: "Description of image 6" },
];

const Gallery = () => {
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
        }, 50);

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

export default Gallery;
