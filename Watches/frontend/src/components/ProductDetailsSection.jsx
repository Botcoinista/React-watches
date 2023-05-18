import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../store/features/counterSlice'


const ProductDetailsSection = ({ product }) => {

  const { value } = useSelector(state => state.counter)

  const cartArray = []
  const [cart, setCart] = useState([])

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(product._id, value)
    setCart(
      {
        _id: product._id,
        quantity: value
      }
    )
  }

  useEffect(() => {
    cartArray.push(cart)
    console.log(cartArray)

  }, [cart])


  // //If product has not been loaded
  if(!product) return

  //Otherwise show this
  return (
    
    <div className='productDetailsSection'>
      <div className="row">
        <div className="left">
          <div className="bigImg" style={{ backgroundImage: `url("${product.imgURL}")` }}>
          </div>
          <div className="imgCarousel">
            <div className="smallImg" style={{ backgroundImage: `url("${product.imgURL}")` }}></div>
            <div className="smallImg" style={{ backgroundImage: `url("${product.imgURL}")` }}></div>
            <div className="smallImg" style={{ backgroundImage: `url("${product.imgURL}")` }}></div>
            <div className="smallImg" style={{ backgroundImage: `url("${product.imgURL}")` }}></div>
          </div>

        </div>


{/* RIGHT SIDE */}
        <div className="right">
          <div className="detailsDescription">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
          <div className="stars">
            <i className="fa-solid fa-star fa-sm"></i>
            <i className="fa-solid fa-star fa-sm"></i>
            <i className="fa-solid fa-star fa-sm"></i>
            <i className="fa-solid fa-star fa-sm"></i>
            <i className="fa-solid fa-star fa-sm"></i>
            <span>16 reviews</span>

          </div>
          <div className="price">
            <h2>€ {product.price}</h2>
          </div>

          <form className="addCartQty" onSubmit={handleSubmit}>
            <div className="qty">
              <button onClick={(e) => { e.preventDefault(); dispatch(decrement()); }}>-</button>
              <input type="number" value={value} />
              <button onClick={(e) => { e.preventDefault(); dispatch(increment()); }}>+</button>
            </div>
            <button className='addToCart'>Add to cart</button>

          </form>

          <div className="colorVariation">
            <ul className='colorsList'>
              <li><button className='colorBtn color1'></button> </li>
              <li><button className='colorBtn color2'></button> </li>
              <li><button className='colorBtn color3'></button> </li>
            </ul>
            <p>SKU: N/A</p>

          </div>

          <button className="wishList">Add to wishlist</button>

          <div className="categories">
            <p>Category: </p>
            <Link to='' >{product.category}</Link>
          </div>


        </div>
      </div>
    </div>
    
  )
}

export default ProductDetailsSection