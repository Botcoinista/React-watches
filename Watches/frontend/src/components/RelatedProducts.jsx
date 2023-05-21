import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Product270 from "./Product270";

const RelatedProducts = () => {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8080/api/products").then((res) => {
      console.log(res.data.allProducts);
      setProducts(res.data.allProducts);
    });
  }, []);

  return (
    <div className="relatedProducts">
      <div className="wrapper">
        <h3>Related Products</h3>

        <div className="productCards">
          {products.slice(0, 4).map((prod) => (
            <Product270 key={prod._id} prod={prod} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
