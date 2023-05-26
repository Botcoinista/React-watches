import React from "react";

const GetOrder = ({ item }) => {
  return (
    <div className="getOrder">
      <div>{item._id}</div>
      <div>{item.totalPrice}</div>
      <div>{item.pending ? "pending" : "transit"}</div>
      <div>{item.createdAt}</div>
    </div>
  );
};

export default GetOrder;

// <div
//   className="productImg"
//   style={{ backgroundImage: `url("${item.product.imgURL}")` }}
// ></div>
// <div className="productImg"></div>
// <div>{item.product.name}</div>
// <div>€ {item.product.price}</div>
// <div>{item.quantity}</div>
// <div>€ {item.product.price * item.quantity}</div>
