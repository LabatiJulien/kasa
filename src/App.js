import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="d-flex align-items-center">
            <div className="mr-3">
              <img
                src={`${process.env.PUBLIC_URL}/logo.png`}
                height="30"
                alt="Logo Kasa"
                style={{ marginRight: '10px' }} 
              />
            </div>
            <div className="d-flex align-items-center">
              <Nav.Link href="#home" className="Accueil">Accueil</Nav.Link>
              <span className="separator"></span> {/* Ajout d'un span pour séparer les éléments */}
              <Nav.Link href="#link" className="Propos">A propos</Nav.Link>
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
