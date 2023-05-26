import { useState, useEffect} from 'react'
import ProductDetailsHero from '../components/ProductDetailsHero'
import ProductDetailsSection from '../components/ProductDetailsSection'
import Description from '../components/Description'
import RelatedProducts from '../components/RelatedProducts'
import FeaturedProducts from '../components/FeaturedProducts'
import { useParams } from 'react-router-dom'
import axios from "axios";



const ProductDetails = () => {

  const { id } = useParams()

  const defaultId = "646205610acb6a76450eee35"

  //GET ONE 
  const [product, setProduct] = useState(null)

  useEffect(() => {

    const fetchProduct = (prodId) => {
    fetch("http://localhost:8080/api/products/" + prodId)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
      })
      .catch((err) => console.log(err));
    }

    if(!id) {
      fetchProduct(defaultId)
    }
    fetchProduct(id)

  }, [id]);


  //GET ALL
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products").then((res) => {
      console.log(res.data.allProducts);
      setProducts(res.data.allProducts);
    });
  }, []);


  const shuffleArray = (array) =>{
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  const shuffledArray = shuffleArray(products)

  return (
    <div className='productDetails'>
        <ProductDetailsHero />
        <ProductDetailsSection product={product} shuffledArray={shuffledArray}/>
        <Description product={product}/>
        <RelatedProducts shuffledArray={shuffledArray} />
        <FeaturedProducts shuffledArray={shuffledArray}/>    
    </div>
  )
}

export default ProductDetails