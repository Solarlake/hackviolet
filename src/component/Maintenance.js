import MaintenanceCSS from '../style/Maintenance.scss';
import React, { useEffect } from "react";
import halfflower from '../asset/image/half-flowers-logo-purple-to-black.png';
import beBackSoon from '../asset/image/be-back-soon.png';
import websiteInDev from '../asset/image/website-in-dev.png';
import fadedPinwheel from '../asset/image/pinwheel-faded-large-cropped.png';
import RotatingPinwheel from './RotatingPinwheel';
import { Link } from 'react-router-dom';


export default function Maintenance() {

    useEffect(() => {
    // Disable scroll when mounted
    document.body.style.overflow = "hidden";
    return () => {
      // Restore scroll when unmounted
      document.body.style.overflow = "auto";
    };
  }, []);

    return (
        <div className="maintenance-page">
            
            <img src={beBackSoon} alt="Be Back Soon" className="maintenance-be-back-soon" />
            <img src={websiteInDev} alt="Website in Development" className="maintenance-website-in-dev" />
            <div className="maintenance-divider">
                <img src={halfflower} alt="HackViolet Logo" className="maintenance-logo" />
                <div className="date-time-header">
                    <div className="date-time">
                        <p>Jan. 31-Feb. 1, 2026</p>
                        <p>Squires Student Center</p>
                    </div>

                    <h1 className='hackvioletHeader'>HACKVIOLET</h1>
                </div>
                <p className='sub-title'>Virginia Tech’s premier female-empowerment hackathon</p>

                <div className='register-sponsor'>
                    <a
                    href="https://tally.so/r/n0gdr6"
                    target="_blank"  
                    rel="noopener noreferrer" 
                    className="register-button"
                    >
                    Register
                    </a>

                    <Link to="/sponsorpage" className="sponsor-button">
                    Sponsor
                    </Link>
                
                </div>

            </div>
            <div className="pinwheel-container">
                <RotatingPinwheel />
            </div>
            
        </div>
    );
}