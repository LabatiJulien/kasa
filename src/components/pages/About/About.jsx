import React from 'react';
import './About.css';
import Layout from '../../layout/Layout';
function About() {
  return (
    <Layout> 
    <div className='about-container'>
    <div className="about-content">
      <img
      className='banner-image2'
        src="/Banner-image2.png" alt="Bannière"
      />

      <div>
        <details style={{ margin: '10px' }}>
          <summary>
            <h3>Fiabilité</h3>
           <img
           className='arrow-back'
            src="/arrow-back.png" alt="Flêche" />
          </summary>
          <div>
            <p>
              Texte explicatif sur la fiabilité. Par exemple, des détails sur les mesures prises pour garantir la
              fiabilité des produits ou des services.
            </p>
          </div>
        </details>

        <details style={{ margin: '10px' }}>
          <summary>
            <h3>Respect</h3>
            <img  className='arrow-back'src="/arrow-back.png" alt="Flêche" />
          </summary>
          <div>
            <p>
              Texte explicatif sur la qualité. Par exemple, des détails sur les normes de qualité appliquées ou les
              processus de contrôle qualité.
            </p>
          </div>
        </details>

        <details style={{ margin: '10px' }}>
          <summary>
            <h3>Service</h3>
            <img className='arrow-back' src="/arrow-back.png" alt="Flêche" />
          </summary>
          <div>
            <p>
              Texte explicatif sur l'efficacité. Par exemple, des informations sur l'optimisation des processus ou des
              performances des produits.
            </p>
          </div>
        </details>

        <details style={{ margin: '10px' }}>
          <summary>
            <h3>Sécurité</h3>
            <img className='arrow-back'  src="/arrow-back.png" alt="Flêche" />
          </summary>
          <div>
            <p>
              Texte explicatif sur la performance. Par exemple, des données sur les performances passées ou des
              caractéristiques de performance.
            </p>
          </div>
        </details>
      </div>
    </div>
    </div>
    </Layout>
  );
}

export default About;
