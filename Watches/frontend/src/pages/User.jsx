import React from 'react'
import OrderLine from '../components/OrderLine'
import axios from "axios";
import { useState, useEffect } from "react";



const User = () => {

  const [getOrder, setGetOrder] = useState();
  

  const token = localStorage.getItem("token");

  useEffect(() => {
  
     axios.get("http://localhost:8080/api/orders/bytoken", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setGetOrder(res.data);
        })


        .catch((error) => {
          console.error(error);
        });
      }, []);






  return (
    <div className="orderList">
      {getOrder && getOrder.map((item) => <GetOrder key={item._id} item={item} />)}
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
    
    {/*<OrderLine />
    {cart &&
      cart.map((item) => <OrderLine key={item.product._id} item={item} />)}
    {totalPrice > 1 ? (
      <div className="orderLineTotal">
        <p>Total: € {totalPrice}</p> 
      </div>
    ) : (
      <p></p>
    )}*/}
  </div>
  )
}

export default User