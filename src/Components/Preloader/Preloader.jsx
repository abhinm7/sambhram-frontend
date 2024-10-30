// Preloader.js
import React from 'react';
import './Preloader.css';  // Link to the spinner styles

const Preloader = () => {
  return (
    <div className="spinner">
      <div className="loading-circle"></div>
    </div>
  );
};

export default Preloader;
