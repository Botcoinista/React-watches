import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Ratings = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products").then((res) => {
      console.log(res.data.allProducts);
      setProduct(res.data.allProducts);
    });
  }, []);

  return (
    <section className="ratings">
      <div className="container">
        <div className="product-list">
          {product.slice(0, 3).map((item) => (
            <div className="card-bg-odd" key={item.id}>
              <div>
                <img className="image" src={item.imgURL} alt={item.name} />
              </div>
              <div className="product-brief">
                <p className="p-text">{item.name}</p>
                <p className="p-desc">{item.description}</p>
                <div className="text-lower">
                  <div className="p-price">
                    <p className="p1">Post By: Admin</p>
                    <p className="p2">Comments 13</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ratings;
