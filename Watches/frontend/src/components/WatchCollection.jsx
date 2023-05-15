import React from "react";
import { useState, useEffect } from "react";



const WatchCollection = () => {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/watch/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.allProducts);
        console.log(data.allProducts);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="watchCollection">
      <div className="container">
        <div className="upperText">
          <h2>Best Collection</h2>
          <ul>
            <a href="#">
              <li>All /</li>
            </a>
            <a href="#">
              <li>Bags /</li>
            </a>
            <a href="#">
              <li>Dress /</li>
            </a>
            <a href="#">
              <li>Decoration /</li>
            </a>
            <a href="#">
              <li>Essentials /</li>
            </a>
            <a href="#">
              <li>Interior /</li>
            </a>
          </ul>
        </div>
        <div className="product-list">
          {product.map((item) => (
            <div className="card-sm" key={item.id}>
              <div>
                <img className="image" src={item.imgURL} alt="1st image" />
              </div>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
        <button className="btn btn-load">Load More</button>
      </div>
    </section>
  );
};

export default WatchCollection;
