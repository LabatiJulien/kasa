import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navbar, Container } from 'react-bootstrap';
import {Link } from "react-router-dom";
import Footer from './components/Footer.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: (
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
              <div className="menu-items" style={{ display: 'flex', gap: '20px' }}>
                <Link to={`/flat`} style={{ color: 'black', textDecoration: 'none', fontSize: '24px' }}>Accueil</Link>
                <Link to={`/about`} style={{ color: 'black', textDecoration: 'none', fontSize: '24px' }}>A propos</Link>
              </div>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <div>
          <h1 className="error-title">404</h1>
          <h2 className="error-subtitle">Oups, La page que vous demandez n'existe pas</h2>
          <div style={{ textAlign: 'center' }}>
          <Link to={`/`} style={{ color: 'black', fontWeight: 'medium', textAlign: 'center', fontSize: '18px' }}>Retourner sur la page d’accueil</Link>
          </div>
        </div>
        <Footer/>
      </div>
    )
  },

{
  path: "/flat",
  element: <h1> Nos Logements</h1>
},

{
  path: "/about",
  element: <h1> A propos</h1>
},

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
