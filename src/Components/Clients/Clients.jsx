import React from 'react'
import './Clients.css';
import Logos from '../../assets/Clients-Logos.png'
import associa from '../../assets/associa.svg'
import clubs from '../../assets/clubs.svg'
import membership from '../../assets/membership.svg'
import gallery from '../../assets/gallery.png'
const Clients = () => {
  return (
    <div className='wrapper'>
      <div className="client-header">
        <h1>Our Clients</h1>
        <p>We have been working with some Fortune 500+ clients</p>
      </div>
      <div className="client-logos">
        <img src={Logos} alt="" />
      </div>
      <div className="tagline-wrapper">
      <div className="tagline-1">
        <h1>Manage your entire community in a single system</h1>
        <p>Who is Nextcent suitable for?</p>
      </div>
      </div>
      <div className="gallery">
        <div className="gallery-card">
          <img src={membership} alt="" />
           <h2>Membership Organisations</h2>  
            <p>Our membership management software provides full automation of membership renewals and payments</p>  
        </div>
        <div className="gallery-card">
          <img src={associa} alt="" />
            <h2>National Associations</h2>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="gallery-card">
          <img src={clubs} alt="" />
            <h2>Clubs And Groups</h2>
            <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
      <div className="gallery-2">
        <img src={gallery} alt="" />
        <div className="description">
          <h1>The unseen of spending three years at Pixelgrade</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
          <div className="button">
            Learn More
          </div>
        </div>
      </div>
      
      
    </div>
  )
}

export default Clients
