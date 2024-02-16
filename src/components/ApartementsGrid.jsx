import React from 'react'
import './ApartementGrid.css'
import Apartements from './Apartements'
function ApartementsGrid() {
  return (
    <div className='grid'>
       <Apartements/>
       <Apartements/>
       <Apartements/>
       <Apartements/>
       <Apartements/>
       <Apartements/>
    </div>
  )
}

export default ApartementsGrid