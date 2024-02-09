import './App.css';
import { Navbar, Container } from 'react-bootstrap';
import Banner from './banner.js'; // Importez le composant de la bannière

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
            <div className="menu-items">
              <div href="#home" className="menu-item">Accueil</div>
              <div className="menu-item">A propos</div>
            </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Banner /> {/* Utilisez le composant de la bannière */}
    </div>
  );
}

export default App;
