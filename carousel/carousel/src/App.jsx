import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.css";
import "./app.css";
import "./Mycard";
import Mycard from "./Mycard";

const App = () => {
  let box = document.querySelector(".product-container");

  const btnpressprev = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  };

  const btnpressnext = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width;
    console.log(width);
  };
  return (
    <div className="product-carousel">
      <div className="product-container">
        <Mycard cardno="1" />
        <Mycard cardno="2" />
        <Mycard cardno="3" />
        <Mycard cardno="4" />
        <Mycard cardno="5" />
        <Mycard cardno="5" />
        <Mycard cardno="5" />
        <Mycard cardno="5" />
        <Mycard cardno="5" />
      </div>
      <div className="button">
        <button className="pre-btn" onClick={btnpressprev}>
          <p>&lt;</p>
        </button>
        <button className="next-btn" onClick={btnpressnext}>
          <p>&gt;</p>
        </button>
      </div>
    </div>
  );
};

export default App;

// <Carousel responsive={responsive} showDots={true} centerMode={true}>
//   <div className="product-list">
//     <div className="card-sm">
//       <div className="image">
//         <img src="#" alt="1st image" />
//       </div>
//       <p>Apple watch series</p>
//       <p>Kr 3000</p>
//     </div>
//   </div>
//   <div className="product-list">
//     <div className="card-sm">
//       <div className="image">
//         <img src="#" alt="1st image" />
//       </div>
//       <p>Apple watch series</p>
//       <p>Kr 3000</p>
//     </div>
//   </div>
//   <div className="product-list">
//     <div className="card-sm">
//       <div className="image">
//         <img src="#" alt="1st image" />
//       </div>
//       <p>Apple watch series</p>
//       <p>Kr 3000</p>
//     </div>
//   </div>
//   <div className="product-list">
//     <div className="card-sm">
//       <div className="image">
//         <img src="#" alt="1st image" />
//       </div>
//       <p>Apple watch series</p>
//       <p>Kr 3000</p>
//     </div>
//   </div>
//   <div className="product-list">
//     <div className="card-sm">
//       <div className="image">
//         <img src="#" alt="1st image" />
//       </div>
//       <p>Apple watch series</p>
//       <p>Kr 3000</p>
//     </div>
//   </div>
//   <div className="product-list">
//     <div className="card-sm">
//       <div className="image">
//         <img src="#" alt="1st image" />
//       </div>
//       <p>Apple watch series</p>
//       <p>Kr 3000</p>
//     </div>
//   </div>
//   {/* <div>Item 2</div>
//     <div>Item 3</div>
//     <div>Item 4</div> */}
// </Carousel>
