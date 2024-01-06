import React from 'react'
import './nomeeting.css'
import img1 from '../../../assets/Images/no.png'

function Nomeeting() {
  return (
    <div className='nomeet'>
        <p>No meeting scheduled</p>
        <img src={img1}></img>
    </div>
  )
}

export default Nomeeting