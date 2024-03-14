import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './ApartementGrid.css';
import Banner from './banner.jsx'; 

function ApartementsGrid() {
  const [apartementsData, setApartementsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/logements.json');
        const data = await response.json();
        console.log("Données des appartements :", data); 
        setApartementsData(data); 
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
      }
    };

    fetchData(); 
  }, []);

  return (
    <div>
      <Banner /> 
      <div className='grid'>
        {apartementsData.map(apartement => (
          <Link to={`/flat/${apartement.id}`} key={apartement.id} className="apartement home">
            <img className="apartementCover" src={apartement.cover} alt={apartement.title} />
            <div className="apartementSubtitle">{apartement.title}</div>
          </Link> //le mapping sur le tableau apartementsData génère des éléments JSX pour chaque appartement dans le tableau, 
          //créant ainsi une liste de liens vers les pages de détails des appartements avec leurs images de couverture et leurs titres.
        ))}
      </div>
    </div>
  );
}

export default ApartementsGrid;
