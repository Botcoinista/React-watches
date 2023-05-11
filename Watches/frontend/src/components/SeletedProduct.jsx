import React from "react";

const SeletedProduct = () => {
  return (
    <section className="selectedProduct">
      <div className="container">
        <div className="product-list">
          <div className="card-bg-odd">
            <div className="image">
              <img src="#" alt="1st image" />
            </div>
            <div className="product-brief">
              <p className="p-text">Table Lamp - Lorem ipsum.</p>
              <div className="text-lower">
                <div className="p-price">
                  <p className="p1">Kr 3000</p>
                  <p className="p2">Kr 2000</p>
                </div>
                <button className="btn btn-cart">cart</button>
              </div>
            </div>
          </div>
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
          <div className="card-bg-odd">
            <div className="image">
              <img src="#" alt="1st image" />
            </div>
            <div className="product-brief">
              <p className="p-text">Table Lamp - Lorem ipsum.</p>
              <div className="text-lower">
                <div className="p-price">
                  <p className="p1">Kr 3000</p>
                  <p className="p2">Kr 2000</p>
                </div>
                <button className="btn btn-cart">cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeletedProduct;
