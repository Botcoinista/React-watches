import React from "react";

const HomeHero = () => {
  return (
    <section className="homeHero">
      <div className="container">
        <div className="leftText">
          <h6>Welcome to Watch Shop</h6>
          <h1>Exclusive Watch Collection.</h1>
          <button className="btn btn-hero">Shop Now</button>
        </div>
        <div className="rightImage">
          <img src="https://codegeex.cn" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
