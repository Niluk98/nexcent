import React from 'react'
import './Footer.css'
import  Logo from '../../assets/Logo-2.png'
const Footer = () => {
  return (
    <footer>
      <div className="company">
         <img src={Logo} alt="" width='200rem' height='40rem' />
         <p>Copyright © 2020 Nexcent ltd.</p>
         <p>All rights reserved</p>
      </div>
      <div className="footer-menu">
        <div className="menu-card">
           <h2>Company</h2>
           
            <a href=''>About us</a>
            <a href=''>Blog</a>
            <a href=''>Contact us</a>
            <a href=''>Pricing</a>
            <a href=''>Testimonials</a>
           
        </div>
        <div className="menu-card">
           <h2>Support</h2>
           
            <a href=''>Help center</a>
            <a href=''>Term of service</a>
            <a href=''>Legal</a>
            <a href=''>Privacy policy</a>
            <a href=''>Status</a>
           
        </div>
        <div className="menu-card" id='email'>
           <h2>Stay Up to Date</h2>
           <div className="email"><input type="text" name="" id="" placeholder='Email' /></div>
           
        </div>
        

      </div>
    </footer>
  )
}

export default Footer
