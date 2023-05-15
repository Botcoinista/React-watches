import { useState } from 'react'
import { Link } from 'react-router-dom'

const ProductDetailsSection = () => {
  return (
    <div className='productDetailsSection'>
      <div className="row">
        <div className="left">
          <div className="bigImg">
          </div>
          <div className="imgCarousel">
            <div className="smallImg"></div>
            <div className="smallImg"></div>
            <div className="smallImg"></div>
            <div className="smallImg"></div>
          </div>

        </div>


{/* RIGHT SIDE */}
        <div className="right">
          <div className="detailsDescription">
            <h2>Young Star Smart Watch in Fashion</h2>
            <p>Lirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
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
            <h2>$30</h2>
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
            <Link to='' >Rolex,</Link>
            <Link to='' >Movado</Link>
          </div>


        </div>
      </div>
    </div>
  )
}

export default ProductDetailsSection