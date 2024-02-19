import React from 'react'
import './Apartement.css'
import {Link } from "react-router-dom";

function Apartements() {
  return (
    <Link to={`/flat`} style={{textDecoration: 'none'}}>
    <div className='apartement'>
     <div className='apartementSubtitle'>Titre de la location</div>
      </div>
      </Link>
  )
}

export default Apartements