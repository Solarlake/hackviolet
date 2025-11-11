import React, { useState, useEffect } from 'react';

const RotatingText = () => {
  const [firstWordIndex, setFirstWordIndex] = useState(0);
  const [secondWordIndex, setSecondWordIndex] = useState(0);

  const firstWords = [
    { text: 'code', bg: '#7DFFDB', color: '#1A4D3E' },
    { text: 'hack', bg: '#B8B3FF', color: '#2D2866' },
    { text: 'build', bg: '#6B8EFF', color: '#1A2D52' },
    { text: 'create', bg: '#D4BAFF', color: '#4A2D66' }
  ];

  const secondWords = [
    { text: 'future', bg: '#D4BAFF', color: '#4A2D66' },
    { text: 'change', bg: '#A8C9FF', color: '#1A3D66' },
    { text: 'community', bg: '#7DFFDB', color: '#1A4D3E' },
    { text: 'impact', bg: '#C9BFFF', color: '#3D2D66' }
  ];

  useEffect(() => {
  const firstTimer = setInterval(() => {
    setFirstWordIndex(prev => (prev + 1) % firstWords.length);
  }, 4500);

  const secondTimer = setInterval(() => {
    setSecondWordIndex(prev => (prev + 1) % secondWords.length);
  }, 4500 + 500);  // 0.5s delay

  return () => {
    clearInterval(firstTimer);
    clearInterval(secondTimer);
  };
}, []);


  return (
    <div style={{
      fontFamily: 'Funnel Sans',
      fontSize: '2.5rem',
      fontWeight: '700',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem',
      padding: '1rem 2rem',
      flexWrap: 'wrap',
      color: '#03212B',
      zIndex: '100'
    }}>
      <span>Empowering you to</span>
      
      <div style={{
        position: 'relative',
        height: '4.8rem',
        
        display: 'inline-block',
        minWidth: '200px'
      }}>
        {firstWords.map((word, index) => (
          <div
            key={word.text}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              width: '100%',
              padding: '0.3rem 1.2rem',
              borderRadius: '12px',
              backgroundColor: word.bg,
              color: word.color,
              textAlign: 'center',
              transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out',
              transform: index === firstWordIndex 
                ? 'translateY(0)' 
                : index < firstWordIndex 
                  ? 'translateY(-100%)' 
                  : 'translateY(100%)',
              opacity: index === firstWordIndex ? 1 : 0
            }}
          >
            {word.text}
          </div>
        ))}
      </div>

      <span>the</span>

      <div style={{
        position: 'relative',
        height: '4.8rem',
        
        display: 'inline-block',
        minWidth: '280px'
      }}>
        {secondWords.map((word, index) => (
          <div
            key={word.text}
            style={{
              position: 'absolute',
              left: 0,
                top: 0,

              width: '100%',
              display: 'inline-block',
              padding: '0.3rem 1.2rem',
              borderRadius: '12px',
              backgroundColor: word.bg,
              color: word.color,
              textAlign: 'center',
              transition: 'transform 0.6s ease-in-out, opacity 0.6s ease-in-out',
              transform: index === secondWordIndex 
                ? 'translateY(0)' 
                : index < secondWordIndex 
                  ? 'translateY(-100%)' 
                  : 'translateY(100%)',
              opacity: index === secondWordIndex ? 1 : 0
            }}
          >
            {word.text}
          </div>
        ))}
      </div>

      <span>tech needs.</span>
    </div>
  );
};

export default RotatingText;