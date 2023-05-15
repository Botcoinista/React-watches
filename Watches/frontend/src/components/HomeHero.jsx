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
        <div>
          <img className="rightImage" src="https://images.pexels.com/photos/1137061/pexels-photo-1137061.jpeg?auto=compress&cs=tinysrgb&w=1600" />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
