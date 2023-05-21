import React from 'react'
import { NavLink } from 'react-router-dom';

const CheckOutHero = () =>{
  return (
    <div className='checkOutHero'>
    <div className='checkHero'>        
        <h1>Checkout</h1>
        <ul>
          <li><NavLink to='/'>HOME.</NavLink> </li>
          <li>Checkout</li>
        </ul>
      </div>
      </div>
  )
}

export default CheckOutHero;