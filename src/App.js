import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

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
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {<p>Hello</p>}
    </div>
  );
}

export default App;
