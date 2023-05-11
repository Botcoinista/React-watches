import React from 'react'
import Product270 from './Product270'

const RelatedProducts = () => {
  return (
    <div className='relatedProducts'>
      <div className="wrapper">
        <h3>Related Products</h3>

        <div className="productCards">
          <Product270 />
          <Product270 />
          <Product270 />
          <Product270 />
        </div>

      </div>

    </div>
  )
}

export default RelatedProducts