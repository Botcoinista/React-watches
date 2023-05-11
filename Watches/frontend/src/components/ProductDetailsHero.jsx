import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductDetailsHero = () => {
  return (
    <div className='productDetailsHero'>
      <div className="titleSection">        
        <h1>SHOP</h1>
        <ul>
          <li><NavLink to='/'>HOME.</NavLink> </li>
          <li>PRODUCT DETAILS</li>
        </ul>
      </div>
    </div>
  )
}

export default ProductDetailsHero