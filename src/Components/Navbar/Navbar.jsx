import React from 'react'
import './Navbar.css'
import  Logo from '../../assets/Logo.png'
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="/"><img src={Logo} alt="" /></a>
      </div>
      <div className="menu">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Service</a></li>
          <li><a href="">Feature</a></li>
          <li><a href="">Product</a></li>
          <li><a href="">Testimonial</a></li>
          <li><a href="">FAQ</a></li>
        </ul>

      </div>
      <div className="login">
        <div className="login-btn"><a href=''>Login</a></div>
        <div className="logout"><a href=''> <span>Logout</span> </a></div>
      </div>
    </nav>
  )
}

export default Navbar
