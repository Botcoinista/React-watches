import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Product270 from "./Product270";

const RelatedProducts = ({shuffledArray}) => {
  

  return (
    <div className="relatedProducts">
      <div className="wrapper">
        <h3>Related Products</h3>

        <div className="productCards">
          {shuffledArray.slice(0, 4).map((prod) => (
            <Product270 key={prod._id} prod={prod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
