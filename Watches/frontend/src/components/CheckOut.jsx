import React from "react";
import shoppingCart from "../components/shoppingCart";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import OrderLine from "./OrderLine";
import { useNavigate } from 'react-router-dom'

const CheckOut = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate()

  const { cart } = useSelector((state) => state.cart);
  //Structure of an order.
  const [order, setOrder] = useState({
    orderLines: [],
  });
  const totalPrice = cart
    .map((item) => item.product.price)
    .reduce((accumulator, price) => accumulator + price, 0);

  //Transforming cart into order structure.
  useEffect(() => {
    const filteredCart = cart.map((item) => ({
      product: item.product._id,
      quantity: item.quantity,
    }));

    setOrder((prevOrder) => ({
      ...prevOrder,
      orderLines: filteredCart,
    }));
    console.log(order);
  }, [cart]);

  const submitHandler = (e) => {
    e.preventDefault();

     // Validate the order
     if (order.orderLines.length === 0) {
      setErrorMessage("Please add items to your order");
      return;
    }

    const requestBody = order;

    axios
      .post("http://localhost:8080/api/orders", requestBody, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        navigate("/user")
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const continueShopping = () => {
    navigate("/"); 
  };

  return (
    <div>
    {/* Render your order items */}
    {cart.length === 0 ? (
      <div>
      <p>Please add items to your order</p>
      <button className="continue-btn" onClick={continueShopping}>Continue Shopping</button>
      </div>
    ) : (
    <div className="checkOut">
      <div className="orderList">
        <div className="orderLineDescription">
          <div></div>
          <div>
            <p>Product name</p>
          </div>
          <div>
            <p>Price</p>
          </div>
          <div>
            <p>Quantity</p>
          </div>
          <div>
            <p>Total price</p>
          </div>
        </div>
        {cart &&
          cart.map((item) => <OrderLine key={item.product._id} item={item} />)}
        {totalPrice > 1 ? (
          <div className="orderLineTotal">
            <p>Total: € {totalPrice}</p>
          </div>
        ) : (
          <p></p>
        )}
      </div>

      {/* Payment */}
      <div className="wrapper-2">
        <form>
          <h2 className="h2">Payment</h2>
          <hr></hr>
          <div className="row">
            <div className="col1">
              <label htmlFor="cc-name" className="form-label">
                Name on card
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-name"
                required
              />
            </div>
            <div className="col1">
              <label htmlFor="cc-number" className="form-label">
                Credit card number
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-number"
                required
              />
            </div>
            <div className="col1">
              <label htmlFor="cc-expiration" className="form-label">
                Expiration
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-expiration"
                required
              />
            </div>
            <div className="col1">
              <label htmlFor="cc-cvv" className="form-label">
                CVV
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-cvv"
                required
              />
            </div>
          </div>

          <button className="btn-submit" type="submit" onClick={submitHandler}>
            Place order
          </button>
        </form>
      </div>
    </div>
  )}
  </div>
  );
        };

export default CheckOut;
