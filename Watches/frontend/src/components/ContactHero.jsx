import React from 'react'
import ContactImage from '../images/WatchSide.jpg';

const ContactHero = () => {
  return (
    <div className='contactHero'>
        <img src="" alt="" />
      <img className='ContactImage' src={ContactImage} alt="Big Watsh" />
        <h1>CONTACT</h1>
        <div className='separate'>
          <a href="/">HOME</a>
          <p>CONTACT</p>
        </div>
    </div>
  )
}

export default ContactHero