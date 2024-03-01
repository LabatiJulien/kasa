import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className='footer_logo'>
        <img src="/logo-black.png" alt="Logo Kasa" />
      </div>
      <div className='footer_text'>
        © 2020 Kasa. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
