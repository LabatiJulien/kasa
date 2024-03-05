import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './components/pages/Accueil/App.jsx';
import reportWebVitals from './reportWebVitals';
import Apartements from './components/pages/Logements/Apartements.jsx';
import About from './components/pages/About/About.jsx';
import { Navigate } from 'react-router-dom';
import Error from './components/pages/404/Error404.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
  },
  {
    path: '/flat/:id',
    element:  <Apartements/> 
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/404',
    element:<Error/> },
  {
    path: '*',
    element: <Navigate to="/404" replace />
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
