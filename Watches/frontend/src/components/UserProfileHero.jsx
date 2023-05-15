import React from 'react'
import { NavLink } from 'react-router-dom';

function UserProfileHero() {
  return (
    <div className='userProfilHero'>
    <div className='userHero'>        
        <h1>USER PAGE</h1>
        <ul>
          <li><NavLink to='/'>HOME.</NavLink> </li>
          <li>USER PROFILE</li>
        </ul>
      </div>
      </div>
  )
}

export default UserProfileHero;