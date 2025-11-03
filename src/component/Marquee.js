import React from 'react';

const Marquee = ({ 
  text, 
  speed = 40, 
  fontFamily = 'obviously-narrow, sans-serif',
  fontSize = '3rem',
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
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        position: 'relative'
      }}
    >
      <div 
        className="marquee-content"
        style={{
          display: 'inline-block',
          animation: `scroll ${speed}s linear infinite`,
          fontFamily: 'obviously-narrow, sans-serif',
          fontSize: '64pt',
          fontWeight,
          color
        }}
      >
        {/* repeat text multiple times for looping */}
        <span style={{ paddingRight: '2rem' }}>{text}</span>
        <span style={{ paddingRight: '2rem' }}>{text}</span>
        <span style={{ paddingRight: '2rem' }}>{text}</span>
        <span style={{ paddingRight: '2rem' }}>{text}</span>
        <span style={{ paddingRight: '2rem' }}>{text}</span>
        <span style={{ paddingRight: '2rem' }}>{text}</span>
        <span style={{ paddingRight: '2rem' }}>{text}</span>
        <span style={{ paddingRight: '2rem' }}>{text}</span>
        <span style={{ paddingRight: '2rem' }}>{text}</span>
        <span style={{ paddingRight: '2rem' }}>{text}</span>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;