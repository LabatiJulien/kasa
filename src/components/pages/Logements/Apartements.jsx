import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Apartement.css';

function Apartements() {
  const { id } = useParams();
  const [apartmentData, setApartmentData] = useState(null);

  useEffect(() => {
    const fetchApartmentData = async () => {
      try {
        const response = await fetch(`/logements.json`);
        const data = await response.json();
        const apartment = data.find(apartment => apartment.id === id);
        if (apartment) {
          setApartmentData(apartment);
        } else {
          console.error('L\'appartement avec l\'ID spécifié n\'a pas été trouvé.');
        }
      } catch (error) {
        console.error('Erreur lors du chargement des données de l\'appartement:', error);
      }
    };
  
    fetchApartmentData();
  }, [id]);

  return (
    <div>
      {apartmentData && (
        <div>
          <h2 className="apartment-title">{apartmentData.title}</h2>
          <p className="apartment-location">Location: {apartmentData.location}</p>
        </div>
      )}
    </div>
  );
}

export default Apartements;