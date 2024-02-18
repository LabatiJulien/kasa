import './App.css';
import { Navbar, Container } from 'react-bootstrap';
import Banner from './components/banner.js'; 
import Apartements from './components/ApartementsGrid.jsx';
import Footer from './components/Footer.jsx';
import {Link } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="navbar-brand-custom">
            <div className="logo">
              <img
                src={`${process.env.PUBLIC_URL}/logo.png`}
                height="50"
                alt="Logo Kasa"
              />
            </div>
            <div className="menu-items" style={{ display: 'flex', gap: '20px'}}>
            <Link to={`/flat`} style={{ color: 'black', textDecoration: 'none', fontSize: '24px' }}>Accueil</Link>
  <Link to={`/about`} style={{ color: 'black', textDecoration: 'none', fontSize: '24px' }}>A propos</Link>
</div>

          </Navbar.Brand>
        </Container>
      </Navbar>
      
      <Banner /> 
      <Apartements/>    
     <Footer/>
    </div>
  );
}

export default App;
