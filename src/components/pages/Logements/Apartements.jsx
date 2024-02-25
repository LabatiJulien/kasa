import React from 'react';
import { useParams } from 'react-router-dom';

function Apartements() {
  
  const { title } = useParams();

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}

export default Apartements;
