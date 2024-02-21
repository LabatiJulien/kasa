import React from 'react'
import './ApartementGrid.css'
import Apartements from '../Logements/Apartements'

function ApartementsGrid() {
  return (
    <div className='grid'>
       <Apartements titre="Titre de la location" isHomePage={true}/>
       <Apartements titre="Titre de la location" isHomePage={true}/>
       <Apartements titre="Titre de la location" isHomePage={true}/>
       <Apartements titre="Titre de la location" isHomePage={true}/>
       <Apartements titre="Titre de la location" isHomePage={true}/>
       <Apartements titre="Titre de la location" isHomePage={true}/>
    </div>
  )
}

export default ApartementsGrid
