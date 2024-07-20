import React from 'react';
import './SocialIcons.scss';

const SocialIcons = () => {
  return (
    <div className="social-icons-container">
      <div className="social-icon facebook"><i className="fab fa-facebook-f"></i></div>
      <div className="social-icon youtube"><i className="fab fa-youtube"></i></div>
      <div className="social-icon twitter"><i className="fab fa-twitter"></i></div>
      <div className="social-icon instagram"><i className="fab fa-instagram"></i></div>
      <div className="social-icon tiktok"><i className="fab fa-tiktok"></i></div>
    </div>
  );
};

export default SocialIcons;
