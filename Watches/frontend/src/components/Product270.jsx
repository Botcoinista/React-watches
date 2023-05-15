import { useState, useEffect, json } from 'react'
import { Link } from 'react-router-dom'

const Product270 = ({ prod }) => {

  
  return (
    <div className='product270'>
      <div className='productImg'></div>
      <div className='title'>
        <h1>hej</h1>
        <Link>{ prod.name }</Link>
      </div>
      <div className='price'>
        <p>{prod.price}</p>
      </div>
    </div>
  )
}

export default Product270