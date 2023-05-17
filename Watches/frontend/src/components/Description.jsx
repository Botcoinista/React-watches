import React from 'react'
import { NavLink } from 'react-router-dom'

const Description = ({ product }) => {

  // //If product has not been loaded
  if(!product) return
  
  return (
    <div className='description'>
      <div className="wrapper">
        <ul>
          <li><NavLink>DESCRIPTION</NavLink> </li>
          <li><NavLink>ADDITIONAL INFO</NavLink> </li>
          <li><NavLink>REVIEWS</NavLink> </li>
          <li><NavLink>SHIPPING & DELIVERY</NavLink> </li>
        </ul>

        <h2>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie.</h2>
          <div className="productDescription">
          <div className="left">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et cusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata santus est Lorem ipsum dolor sit amet. Lorem ipsum dolor.   
            </p>
            <p>
              accusantium laborum pretium hic excepturi harum repellat facilisis convallis potenti, adipiscing lectus aliqua. Asperiores repudiandae ipsam error erat, accusamus, cum taciti unde?
            </p>
            <p>
                Praesentium, pariatur, tempora consequuntur purus sapiente, iaculis vitae consequatur, rhoncus earum eleifend, hendrerit ipsum rhoncus ex error, impedit! Alias laboris sequi curae aptent? Eu sagittis eu, distinctio tortor? Dapibus delectus! Consequuntur luctus.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et cusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata santus est Lorem ipsum dolor sit amet. Lorem ipsum dolor.
            </p>


          </div>
          <div className="right">
            <div className="bigImg" style={{ backgroundImage: `url("${product.imgURL}")` }}>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Description