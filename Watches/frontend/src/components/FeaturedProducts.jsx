import React from 'react'
import Product270 from './Product270'
import { Link } from 'react-router-dom'

const FeaturedProducts = ({shuffledArray}) => {

  return (
    <div className='featuredProducts'>

      <i className="fa-solid fa-angle-left fa-sm"></i>

      <div className="wrapper">

      {shuffledArray.slice(5, 10).map((prod) => (
        <div className="imgDiv" key={prod._id} style={{ backgroundImage: `url("${prod.imgURL}")` }}></div>       
          ))}

      </div>

      <i className="fa-solid fa-chevron-right fa-sm"></i>

    </div>
  )
}

export default FeaturedProducts