import React, { useState, useEffect } from 'react';
import '../style/RotatingText.scss';

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
    }, 5000); // 0.5s delay

    return () => {
      clearInterval(firstTimer);
      clearInterval(secondTimer);
    };
  }, []);

  const getWordClass = (index, currentIndex) => {
    if (index === currentIndex) return 'active';
    if (index < currentIndex) return 'before';
    return 'after';
  };

  return (
    <div className="rotating-text-container">
      <span>Empowering you to</span>
      
      <div className="word-container first">
        {firstWords.map((word, index) => (
          <div
            key={word.text}
            className={`rotating-word ${getWordClass(index, firstWordIndex)}`}
            style={{
              backgroundColor: word.bg,
              color: word.color
            }}
          >
            {word.text}
          </div>
        ))}
      </div>

      <span>the</span>

      <div className="word-container second">
        {secondWords.map((word, index) => (
          <div
            key={word.text}
            className={`rotating-word ${getWordClass(index, secondWordIndex)}`}
            style={{
              backgroundColor: word.bg,
              color: word.color
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