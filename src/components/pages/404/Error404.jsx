import React from 'react'
import Layout from '../../layout/Layout';
import { Link } from 'react-router-dom'; 
import './Error404.css';
function error() {
  return (
    <Layout>
    <div>     
      <div>
        <h1 className="error-title">404</h1>
        <h2 className="error-subtitle">Oups, La page que vous demandez n'existe pas.</h2>
        <div className="return-link" >
          <Link to={`/`} style={{ color: 'black',}} >Retourner sur la page d’accueil</Link>
        </div>
      </div>
    </div>
  </Layout>
)
}

export default error