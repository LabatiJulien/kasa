import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './components/pages/Accueil/App.jsx';
import reportWebVitals from './reportWebVitals';
import Layout from './components/layout/Layout.jsx';
import { Link } from 'react-router-dom';
import Apartements from './components/pages/Logements/Apartements.jsx';
import About from './components/pages/About/About.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: (
      <Layout>
        <div>     
          <div>
            <h1 className="error-title">404</h1>
            <h2 className="error-subtitle">Oups, La page que vous demandez n'existe pas.</h2>
            <div className="return-link" style={{ textAlign: 'center' }}>
              <Link to={`/`} style={{ color: 'black', fontWeight: 'medium', textAlign: 'center', fontSize: '18px' }}>Retourner sur la page d’accueil</Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  },
  {
    path: '/flat',
    element: <Layout> <Apartements/> </Layout>
  },
  {
    path: '/about',
    element:  <Layout> <About/> </Layout>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
