import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function CustomNavbar() {
  return (
    <Navbar className="navbar" expand="lg"> 
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/">
            <img
              src={`${process.env.PUBLIC_URL}/logo.png`}
              className="logo" 
              alt="Logo Kasa"
            />
          </Link>
          <div className="menu-items"> 
            <Link to={`/`} >Accueil</Link>
            <Link to={`/about`} >À propos</Link>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
