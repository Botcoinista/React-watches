import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetailsSection = ({ product }) => {

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

          <form className="addCartQty">
            <div className="qty">
              <button>-</button>
              <input type="number" value='1'/>
              <button>+</button>
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