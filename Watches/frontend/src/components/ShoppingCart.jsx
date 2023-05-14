import React from 'react'
import { NavLink } from 'react-router-dom'


function ShoppingCart() {
  return (
    <div className='shoppingCart'>
    <div className='heroCart'>        
        <h1>CART</h1>
        <ul>
          <li><NavLink to='/'>HOME.</NavLink> </li>
          <li>SHOPPING CART</li>
        </ul>
      </div>
  


  
      
    </div>
  );
}

export default ShoppingCart;