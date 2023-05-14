import React, { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);

  const products = [
    <ProductCard key={1} />,
    <ProductCard key={2} />,
    <ProductCard key={3} />,
    <ProductCard key={4} />,
    <ProductCard key={5} />,
    <ProductCard key={6} />,
    <ProductCard key={7} />,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newIndex = (currentIndex + 1) % products.length;
      setCurrentIndex(newIndex);
    }, 3000); // Change this value to adjust the time between automatic scrolls
    return () => clearInterval(intervalId);
  }, [currentIndex, products.length]);

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + products.length) % products.length;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % products.length;
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
          {products}
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
