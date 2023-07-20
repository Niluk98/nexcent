import React from 'react'
import './Header.css'
import Illustration from './Illustration.png';
const Header = () => {
  return (
    <header>
      <div className="text">
        <h1 className='tagline'> Lessions and Insights <br /> <span>from 8 years</span></h1>
      </div>
      <div className="image">
        <img src={Illustration} alt=""  />
      </div>
    </header>
  )
}

export default Header
