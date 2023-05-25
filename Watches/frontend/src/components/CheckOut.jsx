//import React, { useState , useEffect} from 'react';
//import { useSelector } from 'react-redux'




const CheckOut = () => {


//const { cart } = useSelector(state => state.shoppingCart)
//const { user } = useSelector(state => state.auth)

//const placeOrder = () => {
  // Map over the items in the cart and create a new array called order
  //const order  = cart.map(item => {
   // return { id: item.product.id, 
   //quantity: item.quantity 
  //}
  //})

 


  return (
    <div className="checkOut">
      <div className="wrapper-1">
        
          {/* Cart summary */}
          <h3 className="cart-header">Your cart contains</h3>
          <br></br>
          <span className="round">3</span>
       
        <ul className="list-group mb-3">
          <li className="list-group-item">
            <div>
              <h5 className="h5">First product</h5>
            </div>
            <span className="price">$0</span>
          </li>
          <li className="list-group-item">
            <div>
              <h5 className="h5">Second product</h5>
              
            </div>
            <span className="price">$0</span>
          </li>
          <li className="list-group-item">
            <div>
              <h5 className="h5">Third item</h5>
            
            </div>
            <span className="price">$0</span>
          </li>
          
          <li className="list-group-item">
            <span>Total (USD)</span>
            <strong>200</strong>
          </li>
        </ul>
      </div>

            {/* Payment */}
            <div className="wrapper-2">
          <form>
          <h2 className="h2">Payment</h2>
          <hr></hr>
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
