import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Apartement.css';

function Apartements() {
  const { id } = useParams();
  const [apartmentTitle, setApartmentTitle] = useState(null);

  useEffect(() => {
    const fetchApartmentTitle = async () => {
      try {
        const response = await fetch(`/logements.json`);
        const data = await response.json();
        const apartment = data.find(apartment => apartment.id === id);
        if (apartment) {
          setApartmentTitle(apartment.title);
        } else {
          console.error('L\'appartement avec l\'ID spécifié n\'a pas été trouvé.');
        }
      } catch (error) {
        console.error('Erreur lors du chargement du titre de l\'appartement:', error);
      }
    };
  
    fetchApartmentTitle();
  }, [id]);

  return (
    <div>
      <h2 className="apartment-title">{apartmentTitle}</h2>
    </div>
  );
}

export default Apartements;
