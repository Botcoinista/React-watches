import React from 'react'
import ProductDetailsHero from '../components/ProductDetailsHero'
import ProductDetailsSection from '../components/ProductDetailsSection'
import Description from '../components/Description'
import RelatedProducts from '../components/RelatedProducts'
import FeaturedProducts from '../components/FeaturedProducts'

const ProductDetails = () => {
  return (
    <div className='productDetails'>
        <ProductDetailsHero />
        <ProductDetailsSection />
        <Description />
        <RelatedProducts />
        <FeaturedProducts />    
    </div>
  )
}

export default ProductDetails