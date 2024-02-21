import React from 'react';
import { Link } from "react-router-dom";

function Apartements({ titre, cover, isHomePage }) {
  const titreAffiche = titre || <h1>Cozy loft on the Canal Saint-Martin</h1>;

  return (
    <Link to={`/flat`} style={{ textDecoration: 'none' }}>
      <div className={`apartement ${isHomePage ? 'home' : ''}`}>
        <div className="apartementCover" style={{backgroundImage: `url(${cover})`}}>
          <div className='apartementSubtitle'>{titreAffiche}</div>
        </div>
      </div>
    </Link>
  );
}

export default Apartements;
