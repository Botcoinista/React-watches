import React, { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (currentIndex + 1) % product.length;
      setCurrentIndex(newIndex);
    }, 1000); // Change this value to adjust the time between automatic scrolls
    return () => clearInterval(intervalId);
  }, [currentIndex, product.length]);

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + product.length) % product.length;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % product.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.scrollLeft = currentIndex * container.clientWidth;
  }, [currentIndex]);

  return (
    <section className="carousel">
      <div className="product-carousel">
        <h4>
          Top selling <span className="text-underline">product</span> this week
        </h4>
        <div className="product-container" ref={containerRef}>
          {product.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
        <div className="button">
          <button className="pre-btn" onClick={handlePrev}>
            <p>&lt;</p>
          </button>
          <button className="next-btn" onClick={handleNext}>
            <p>&gt;</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
