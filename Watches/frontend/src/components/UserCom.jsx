import React from "react";
import GetOrder from "../components/GetOrder";
import axios from "axios";
import { useState, useEffect } from "react";

const UserCom = () => {
  const [getOrder, setGetOrder] = useState();

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/orders/bytoken", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setGetOrder(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // useEffect(() => {
  //   console.log(getOrder.map((item) => item._id));
  // }, [getOrder]);

  return (
    <div className="userCom">
      <div className="orderList">
        <div className="orderLineDescription">
          <div>
            <p>Order id</p>
          </div>
          <div>
            <p>Price</p>
          </div>
          <div>
            <p>Status</p>
          </div>
          <div>
            <p>Date</p>
          </div>
        </div>
        {getOrder &&
          getOrder.map((item) => <GetOrder key={item._id} item={item} />)}
      </div>
    </div>
  );
};

export default UserCom;
