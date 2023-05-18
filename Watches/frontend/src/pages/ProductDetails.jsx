import { useState, useEffect} from 'react'
import ProductDetailsHero from '../components/ProductDetailsHero'
import ProductDetailsSection from '../components/ProductDetailsSection'
import Description from '../components/Description'
import RelatedProducts from '../components/RelatedProducts'
import FeaturedProducts from '../components/FeaturedProducts'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

  const { id } = useParams()

  const [product, setProduct] = useState(null)

  console.log('Här är ett id:' +id)

  useEffect(() => {
    fetch("http://localhost:8080/api/products/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className='productDetails'>
        <ProductDetailsHero />
        <ProductDetailsSection product={product} />
        <Description product={product}/>
        <RelatedProducts />
        <FeaturedProducts />    
    </div>
  )
}

export default ProductDetails