import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div className="productCard">
      <div className="card-sm">
        <div>
          <img className="image" src={item.imgURL} alt={item.name} />
        </div>
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
