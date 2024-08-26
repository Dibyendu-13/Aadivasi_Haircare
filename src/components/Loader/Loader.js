import React from 'react';
import './Loader.css'; // Import the CSS file for the loader

const Loader = () => {
  return (
    <div className="screen">
      <div className="loader">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default Loader;
