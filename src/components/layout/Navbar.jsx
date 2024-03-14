import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function CustomNavbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              className="logo" 
              alt="Logo Kasa"
            />
          </Link>
        </div>
        <div className="menu-items">
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
