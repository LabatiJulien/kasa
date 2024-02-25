import React, { useState, useEffect } from 'react';
import './ApartementGrid.css';
import Apartements from '../Logements/Apartements';

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
    <div className='grid'>
      {apartementsData.map(apartement => (
        <Apartements
          key={apartement.id} 
          titre={apartement.title}
          cover={apartement.cover}
          isHomePage={true}
        />
      ))}
    </div>
  );
}

export default ApartementsGrid;
