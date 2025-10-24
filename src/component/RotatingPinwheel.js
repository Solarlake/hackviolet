import React from 'react';
import fadedPinwheel from '../asset/image/pinwheel-faded-large-cropped.png';
import '../style/Pinwheel.scss';


export default function RotatingPinwheel() {
  return (
    <div>
      <img src={fadedPinwheel} alt="Faded Pinwheel" className="pinwheel" />
    </div>
  );
}