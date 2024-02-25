import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';

function Layout({ children }) {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/logo.png`}
                height="50"
                alt="Logo Kasa"
                style={{ marginLeft: '30px', marginTop: '30px' }}
              />
            </Link>
            <div className="menu-items" style={{ marginRight: '20px' }}>
              <Link to={`/`} style={{ color: 'black', textDecoration: 'none', fontSize: '24px', marginLeft: '20px',marginRight: '20px' }}>Accueil</Link>
              <Link to={`/about`} style={{ color: 'black', textDecoration: 'none', fontSize: '24px', marginLeft: '20px',marginRight: '20px' }}>À propos</Link>
            </div>
          </div>
        </Container>
      </Navbar>
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
