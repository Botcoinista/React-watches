import React from 'react'

const Subscription = () => {
  return (
    <div className='subscription-container'>
      <div className="subscribe-form">
        <div className='flex'>
          <input type="text" placeholder='Enter your mail here' />
          <button className='subscription-btn'>SUBSCRIBE FOR NEWSLETTER</button>
        </div>
      </div>
    </div>
  )
}

export default Subscription