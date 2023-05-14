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
  
      <div className='tableContainer'>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {/* Add table rows for products */}
          </tbody>
      </table>
    </div>
    </div>
  );
}

export default ShoppingCart;