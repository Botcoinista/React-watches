import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const OneOrderLine = ({ item }) => {

  const [singleProduct, setSingleProduct] = useState()

  useEffect(() => {
    axios.get("http://localhost:8080/api/products/" + item.product)
    .then((res) => {
      setSingleProduct(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  , []);
  useEffect(() => {
   console.log(singleProduct)
  }, [singleProduct])

  if(!singleProduct){
    return }

  return (
    <div className="oneOrderLine">
      <div
        className="productImg"
        style={{ backgroundImage: `url("${singleProduct.imgURL}")` }}
      ></div>
      <div>{singleProduct.name}</div>
      <div>{singleProduct.category}</div>
      <div>€ {singleProduct.price}</div>
      <div>{item.quantity}</div>
      <div>€ {singleProduct.price * item.quantity}</div>
    </div>
  );
};

export default OneOrderLine;

// <div
//   className="productImg"
//   style={{ backgroundImage: `url("${item.product.imgURL}")` }}
// ></div>
// <div className="productImg"></div>
// <div>{item.product.name}</div>
// <div>€ {item.product.price}</div>
// <div>{item.quantity}</div>
// <div>€ {item.product.price * item.quantity}</div>
