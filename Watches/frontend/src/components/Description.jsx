import React from 'react'
import { NavLink } from 'react-router-dom'

const Description = () => {
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
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, animi? In cumque assumenda temporibus, nihil cupiditate facilis explicabo optio iste similique eligendi quis consectetur ipsum pariatur aliquam perferendis aut quas?</p>
          </div>
          <div className="right">
            <div className="bigImg">
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Description