import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeOneItem,
  removeFromCart,
} from "../store/features/cartSlice";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let quantity = 0;
    cart.forEach((item) => {
      quantity += item.quantity;
    });
    setTotalQuantity(quantity);
    let amount = 0;
    cart.forEach((item) => {
      amount += item.product.price * item.quantity;
    });
    setTotalAmount(amount);
  }, [cart]);

  console.log(cart);

  // const getTotalAmount = (cart) => {
  //     let amount = 0
  //     cart.forEach(item => {
  //         amount += item.product.price * item.quantity
  //     })
  // }

  return (
    <div className="shoppingCart">
      <div className="heroCart">
        <h1>CART</h1>
        <ul>
          <li>
            <NavLink to="/">HOME.</NavLink>{" "}
          </li>
          <li>SHOPPING CART</li>
        </ul>
      </div>

      <div className="cart-container">
        <h2 className="cart-title">Shopping Cart</h2>
        <h2 className="item-count">Items in Cart: {totalQuantity}</h2>
        <h2 className="item-count">Total Amount: € {totalAmount}</h2>
        <div className="item-list">
          {cart &&
            cart.map((cartItem) => (
              <div className="item-card" key={cartItem.product._id}>
                <img
                  className="item-image"
                  src={cartItem.product.imgURL}
                  alt={cartItem.product.name}
                />
                <h3 className="item-name">{cartItem.product.name}</h3>
                <div className="item-details">
                  <button
                    className="quantity-btn"
                    onClick={() => dispatch(removeOneItem(cartItem.product))}
                  >
                    -
                  </button>
                  <span className="item-quantity">
                    Quantity {cartItem.quantity}
                  </span>
                  <button
                    className="quantity-btn"
                    onClick={() => dispatch(addToCart(cartItem.product))}
                  >
                    +
                  </button>
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(cartItem.product))}
                  >
                    Remove
                  </button>
                </div>
                <p className="item-price">€ {cartItem.product.price}</p>
              </div>
            ))}
        </div>
        {/* <p className="total-price">Total Price: ${calculateTotal()}</p> */}
        {/* <button className="clear-cart-btn" onClick={() => setItems([])}>Clear Cart</button> */}
        <Link to="/checkout">
          {" "}
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
        </Link>
        <Link to="/">
          <button className="continue-btn">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
