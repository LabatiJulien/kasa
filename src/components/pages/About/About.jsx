import React from 'react';
import './About.css';

function About() {
  return (
    <div>
      <img
        src="/Banner-image2.png"
        alt="Bannière"
        style={{
          maxWidth: '90%',
          width: '100%',
          height: '223px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '20px auto'
        }}
      />

      <div>
        <details style={{ margin: '10px' }}>
          <summary>
            <h3>Fiabilité</h3>
            <span>▼</span>
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
            <span>▼</span>
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
            <span>▼</span>
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
            <span>▼</span>
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
  );
}

export default About;
