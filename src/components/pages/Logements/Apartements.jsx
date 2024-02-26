import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Apartement.css';

function Apartements() {
  const { id } = useParams();
  const [apartmentData, setApartmentData] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    const fetchApartmentData = async () => {
      try {
        const response = await fetch(`/logements.json`);
        const data = await response.json();
        const apartment = data.find(apartment => apartment.id === id);
        if (apartment) {
          setApartmentData(apartment);
          setTotalImages(apartment.pictures.length);
        } else {
          console.error('L\'appartement avec l\'ID spécifié n\'a pas été trouvé.');
        }
      } catch (error) {
        console.error('Erreur lors du chargement des données de l\'appartement:', error);
      }
    };
  
    fetchApartmentData();
  }, [id]);

  const previousImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === 0 ? totalImages - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex(prevIndex => (prevIndex === totalImages - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
    {apartmentData && (
      <div>
        <div className="carousel-container">
          <button className="carousel-arrow carousel-arrow-left" onClick={previousImage}>
            <img src="/Vector-left.png" alt="Previous" />
          </button>
          <img className="carousel-image" src={apartmentData.pictures[currentImageIndex]} alt={`Appartement ${currentImageIndex + 1}`} />
          <button className="carousel-arrow carousel-arrow-right" onClick={nextImage}>
            <img src="/Vector-right.png" alt="Next" />
          </button>
          <div className="carousel-counter">{`${currentImageIndex + 1}/${totalImages}`}</div>
        </div>
        <div className="apartment-header">
          <div>
            <h2 className="apartment-title">{apartmentData.title}</h2>
            <p className="apartment-location">Location: {apartmentData.location}</p>
            <div className="tags-and-rating-container">
            <div className="tags-container">
              {apartmentData.tags && apartmentData.tags.map((tag, index) => (
                <div key={index} className="tag">{tag}</div>
              ))}
            </div>
            <div className="rating-container">
              <p className="rating">Rating: {apartmentData.rating}</p>
            </div>
          </div>
        </div>
          <div className="host-info">
            <p className="host-name">{apartmentData.host.name}</p>
            <img className="host-picture" src={apartmentData.host.picture} alt={apartmentData.host.name} />
          </div>
              </div>
      </div>
    )}
  </div>
  );
}

export default Apartements;
