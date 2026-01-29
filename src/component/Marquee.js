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
  // Create an array with exactly the amount of repetitions needed
  const repetitions = Array(10).fill(text);
  
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
        {repetitions.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
        {/* Duplicate the exact same content for seamless loop */}
        {repetitions.map((item, index) => (
          <span key={`duplicate-${index}`}>{item}</span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;