import React from 'react';
import './Banner.css';
function Banner() {
  return (
    <div className="banner">
      <img
        src={`${process.env.PUBLIC_URL}/banner-image.png`} 
        alt="Bannière"
        className="banner-image"
      />
    </div>
  );
}

export default Banner;
