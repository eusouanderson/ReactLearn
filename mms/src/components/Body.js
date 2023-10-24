import React, { useState } from 'react';
import style from './Body.module.css'; 
import Frase from './Frase';

const Body = () => {
  const [isHovered] = useState(false);

  const bodyStyle = {
    background: isHovered ? 'linear-gradient(to bottom, #00aaff, #0055aa)' : '#333',
    color: isHovered ? '#fff' : '#ccc',
    transition: 'background 0.30s, color 0.30s',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: isHovered
      ? '0 0 20px rgba(0, 170, 255, 0.5)'
      : '0 0 10px rgba(0, 0, 0, 0.2)',
    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
  };

  return (
    <div
      className={style.futuristic_body}
      style={bodyStyle}
      
    >
      <Frase></Frase>
    </div>
  );
};

export default Body;