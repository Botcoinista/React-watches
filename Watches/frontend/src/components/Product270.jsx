import { useState, useEffect, json } from 'react'
import { Link } from 'react-router-dom'

const Product270 = ({ prod }) => {


  
  return (
    <div className='product270'>
      <Link to={`/products/${prod._id}`}>
      <div className='productImg' style={{ backgroundImage: `url("${prod.imgURL}")` }}></div>
      <div className='title'>
       <h4> { prod.name }</h4>
      </div>
      <div className='price'>
        <p>€ {prod.price}</p>
      </div>
      </Link>
    </div>
  )
}

export default Product270