import React from 'react';
import fadedPinwheel from '../asset/image/pinwheel-faded-large-cropped.png';

import '../style/Pinwheel.scss';

export default function RotatingPinwheel({ src = fadedPinwheel, alt = "Pinwheel" }) {
  return (
    <div>
      <img src={src} alt={alt} className="pinwheel" />
    </div>
  );
}