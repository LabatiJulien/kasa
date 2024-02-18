import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';

function Layout({ children }) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand-custom">
            <Link to="/"> 
            <div className="logo">
              <img
                src={`${process.env.PUBLIC_URL}/logo.png`}
                height="50"
                alt="Logo Kasa"
              />
            </div>
            </Link>
            <div className="menu-items" style={{ display: 'flex', gap: '20px' }}>
              <Link to={`/flat`} style={{ color: 'black', textDecoration: 'none', fontSize: '24px' }}>Accueil</Link>
              <Link to={`/about`} style={{ color: 'black', textDecoration: 'none', fontSize: '24px' }}>A propos</Link>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
