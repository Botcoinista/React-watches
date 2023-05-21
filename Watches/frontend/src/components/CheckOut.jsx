import React from 'react'
//import { useSelector } from 'react-redux'




const CheckOut = () => {
  return (
    <div className="checkOut">
      <div className="cart-summary">
        
          {/* Cart summary */}
          <h3 className="h4">Your cart contains</h3>
          <br></br>
          <span className="round">3</span>
       
        <ul className="list-group mb-3">
          <li className="list-group-item">
            <div>
              <h5 className="h5">First product</h5>
            </div>
            <span className="price">$12</span>
          </li>
          <li className="list-group-item">
            <div>
              <h5 className="h5">Second product</h5>
              
            </div>
            <span className="price">$8</span>
          </li>
          <li className="list-group-item">
            <div>
              <h5 className="h5">Third item</h5>
            
            </div>
            <span className="price">$5</span>
          </li>
          
          <li className="list-group-item">
            <span>Total (USD)</span>
            <strong>200</strong>
          </li>
        </ul>
      </div>

      {/* Address fields */}
      <div className="address-fields">
        <h2 className="h2">Billing address</h2>
        <hr></hr>
        <form className="needs-validation" noValidate>

          <div className="row">
            <div className="col1">
              <label htmlFor="firstName">First name</label>
              <input type="text" id="firstName" value="" required />
            </div>
            <div className="col1">
              <label htmlFor="lastName">Last name</label>
              <input type="text"  id="lastName" value="" required />
            </div>
            <div className="col1">
              <label htmlFor="email">Email <span className="text-description"></span></label>
              <input type="email"  id="email" />
            </div>
            <div className="col1">
              <label htmlFor="phone">Phone</label>
              <input type="number"  id="phone" required />
            </div>
            <div className="col1">
              <label htmlFor="address">Address</label>
              <input type="text"  id="address" required />
            </div>
            <div className="col1">
              <label htmlFor="zip">Zip</label>
              <input type="text"  id="zip" required />
            </div>
          </div>
           <div className="col1">
              <label htmlFor="country">Country <span className="text-description"></span></label>
              <input type="email" id="email" />
            </div>
        
           {/*New div for Payment*/}
          

          {/* Payment */}
          
          <h2 className="h2">Payment</h2>
          <hr></hr>
          <div className="my-3">
            <div className="form-check">
              <input id="credit" name="paymentMethod" type="radio" className="checkbox" checked required />
              <label className="form-check-label" htmlFor="credit">Credit card</label>
            </div>
            <div className="form-check">
              <input id="debit" name="paymentMethod" type="radio" className="checkbox" required />
              <label className="form-check-label" htmlFor="debit">Debit card</label>
            </div>
            <div className="form-check">
              <input id="paypal" name="paymentMethod" type="radio" className="checkbox" required />
              <label className="form-check-label" htmlFor="paypal">PayPal</label>
            </div>
          </div>

          <div className="row">
            <div className="col1">
              <label htmlFor="cc-name" className="form-label">Name on card</label>
              <input type="text" className="form-control" id="cc-name" required />
            </div>
            <div className="col1">
              <label htmlFor="cc-number" className="form-label">Credit card number</label>
              <input type="text" className="form-control" id="cc-number" required />
            </div>
            <div className="col1">
              <label htmlFor="cc-expiration" className="form-label">Expiration</label>
              <input type="text" className="form-control" id="cc-expiration" required />
            </div>
            <div className="col1">
              <label htmlFor="cc-cvv" className="form-label">CVV</label>
              <input type="text" className="form-control" id="cc-cvv" required />
            </div>
          </div>

          <button className="btn-submit" type="submit">Place order</button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
