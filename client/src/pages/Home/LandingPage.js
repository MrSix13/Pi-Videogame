import React from 'react'
import './ladingpage.css'
import Landing from '../../assets/img/background.jpg'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <div className='landing-container'>
      <div className="landing-image">
        <img src={Landing} alt="landingimage"/>
        <h1 className='landing-title'>Welcome to Henry's Games</h1>
        <Link to="/videogames">
          <button className='landing-button'>Start</button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage