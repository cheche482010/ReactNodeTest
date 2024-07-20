import React from 'react';
import './Button.scss';

const Button = ({ buttonClass, text }) => {
  return (
    <button className={`btn ${buttonClass}`}>
      {text}
    </button>
  );
};

export default Button;
