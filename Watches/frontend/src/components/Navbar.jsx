import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left-nav">
        <h1>Bmerketo</h1>
      </div>
      <div className="right-nav">
        <ul className='nav-links'>
          <li>HOME</li>
          <li>PRODUCTS</li>
          <li>CONTACT</li>
          <li>SEARCH</li>
          <li>LOGIN</li>
          <li>CART</li>
        </ul>

      </div>
    </div>
  )
}

export default Navbar