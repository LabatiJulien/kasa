import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './components/Layout.jsx';
import { Link } from 'react-router-dom';


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
    element: <Layout>  <h1>Nos Logements</h1> </Layout>
  },
  {
    path: '/about',
    element:  <Layout>  <h1>A propos</h1> </Layout>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
