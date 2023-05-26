import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import OneOrderLine from "../components/OneOrderLine";

const OrderDetails = () => {
  const token = localStorage.getItem("token");

  const [order, setOrder] = useState();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/orders/" + id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setOrder(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(order);
  }, [order]);

  if (!order) {
    return;
  }
  return (
    <div className="OrderDetails">
      <div className="orderList">
        <p>Order-ID: #{order._id}</p>
        <div className="orderLineDescription">
          <div></div>
          <div>
            <p>Product</p>
          </div>
          <div>
            <p>Category</p>
          </div>
          <div>
            <p>Price</p>
          </div>
          <div>
            <p>Quantity</p>
          </div>
          <div>
            <p>Total</p>
          </div>
        </div>
        {order &&
          order.orderLines.map((item) => (
            <OneOrderLine key={item._id} item={item} />
          ))}
        <div className="orderBottomDescription">
          <div></div>
          <div>Order created:</div>
          <div>{order.createdAt.slice(0, 10)}</div>
          <div></div>
          <div>
            <p>Total:</p>
          </div>
          <div>
            <p>€ {order.totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
