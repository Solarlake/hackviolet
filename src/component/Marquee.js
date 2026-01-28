import React from 'react';
import '../style/Marquee.scss';

const Marquee = ({ 
  text, 
  speed = 40, 
  fontWeight = '700',
  color = '#03212B',
  backgroundColor = 'transparent',
  padding = '1rem 0'
}) => {
  return (
    <div 
      className="marquee-container" 
      style={{
        backgroundColor,
        padding,
        '--marquee-speed': `${speed}s`,
        '--marquee-color': color,
        '--marquee-weight': fontWeight
      }}
    >
      <div className="marquee-content">
        {/* repeat text multiple times for looping */}
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Marquee;