import React, { useState, useEffect } from "react";
import axios from "axios";
import { BiCartAdd } from "react-icons/bi";

const SelectedProduct = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/products").then((res) => {
      console.log(res.data.allProducts);
      setProduct(res.data.allProducts);
    });
  }, []);

  return (
    <section className="selectedProduct">
      <div className="container">
        <div className="product-list">
          {product.slice(3, 4).map((item) => (
            <div className="card-bg-odd">
              <div>
                <img className="image" src={item.imgURL} alt={item.name} />
              </div>
              <div className="product-brief">
                <p className="p-text">{item.name}</p>
                <div className="text-lower">
                  <p className="p-next">
                    <del>kr 4000</del>kr {item.price}
                  </p>
                  <button className="btn btn-cart">
                    <BiCartAdd />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="card-bg-even">
            <p className="p-headline"> Up to Sell</p>
            <h3>50% Off</h3>
            <h6>Get The Best Price</h6>
            <p className="p-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              fugiat!
            </p>
            <a href="#">Discover More</a>
          </div>
          {product.slice(5, 6).map((item) => (
            <div className="card-bg-odd">
              <div>
                <img className="image" src={item.imgURL} alt={item.name} />
              </div>
              <div className="product-brief">
                <p className="p-text">{item.name}</p>
                <div className="text-lower">
                  <p className="p-next">
                    <del>kr 4000</del>kr {item.price}
                  </p>
                  <button className="btn btn-cart">
                    <BiCartAdd />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedProduct;
