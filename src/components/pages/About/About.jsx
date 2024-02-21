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
             Les annonces postées sur Kasa garantissent une fiabilité totale. 
             Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
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
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de 
              perturbation du voisinage entraînera une exclusion de notre plateforme.
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
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de 
              perturbation du voisinage entraînera une exclusion de notre plateforme.
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
             La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement corresponds aux critères
             de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier
             que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
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
