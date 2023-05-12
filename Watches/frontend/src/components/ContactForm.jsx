import React from 'react'

const ContactForm = () => {
  return (
    <div className="contactForm"> 
      <form className='form-control' action="">
        <p className='text-top'>Write something</p>
        <hr />
        <div className="leftandright">
          <div className="left">
            <label className='YourName' htmlFor="Your Name">Your Name*</label>
            <input type="text" />
            <label className='PhoneNumber' htmlFor="Phone Number">Phone Number</label>
            <input type="text" />
          </div>
          <div className="right">
            <label className='YourEmail' htmlFor="Your Email">Your Email*</label>
            <input type="text" />
            <label className='Company' htmlFor="Company">Company (optional)</label>
            <input type="text" />
          </div>
        </div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <p className='textarea-text'>Something write*</p>
        <div className="checkbox">
          <input className='checkbox-box' type="checkbox" />
          <label htmlFor="checkbox">Save my name, email, and website in this browser for the next time I comment</label>
        </div>
          <button>Submit</button>
      </form>
    </div> 
  )
}

export default ContactForm