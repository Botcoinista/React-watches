import React, { useState, useEffect } from "react";
import { AiOutlineReload } from "react-icons/ai"; //for the clock
import { Link } from "react-router-dom";


const WatchCollection = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
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
          {product.slice(0,8).map((item) => (
            <div className="card-sm" key={item._id}>
              <div>
                <Link to={`/products/${item._id}`}>
                  <img className="image" src={item.imgURL} alt="1st image" />
                  <p>{item.name}</p>
                  <p>€ {item.price}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <button className="btn btn-load">
          <span className="btn-text">Load More</span> <AiOutlineReload />
        </button>
      </div>
    </section>
  );
};

export default WatchCollection;
