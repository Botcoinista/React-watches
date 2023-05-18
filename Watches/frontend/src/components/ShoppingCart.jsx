import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const ShoppingCart = () => {
  const [items, setItems] = useState([]);

  const [products, setProducts] = useState()

  useEffect(() => {
    axios.get('http://localhost:8080/api/products') //Is this right??
      .then((res) => {
        const responseData = res.data;
        setProducts(responseData.allProducts); // Update the products state with the response data

      })
      .catch((err) => {
        console.log('Error retrieving data:', err); 
      });
  }, []);

  useEffect(() => {
    console.log(products)
  }, [products])
  

  //Add a item to the cart, if the item already exists in the cart, increase the quantity by 1
  const addToCart = (product) => {
    //Existing product = serhing in products[]
    const existingProduct = products.find((cartProduct) => cartProduct._id === product._id);
    if (existingProduct) {

      const updatedProducts = products.map((cartProduct) => 
      cartProduct._id === product._id ? { ...cartProduct, quantity: cartProduct.quantity + 1 } : cartProduct
      );
      setItems(updatedProducts);
      } else {
        setItems([...items, { ...product, quantity: 1 }]);
      }
};


//Remove a item from the cart, if the quantity is greater than 1, decrease the quantity
const decreaseQuantity = (item) => {
  const updateItems = items.map((cartItem) =>
  cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
  );
  setItems(updateItems.filter((cartItem) => cartItem.quantity > 0));
};


//Remove a item from the cart
const removeFromCart = (item) => {
  const updateItems = items.filter((cartItem) => cartItem.id !== item.id);
  setItems(updateItems);
};


//Calculate the total price of the items in the cart
const calculateTotal = () => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};



  return (
    <div className='shoppingCart'>
    <div className='heroCart'>        
        <h1>CART</h1>
        <ul>
          <li><NavLink to='/'>HOME.</NavLink> </li>
          <li>SHOPPING CART</li>
        </ul>
      </div>

      
      <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>
      <h2 className="item-count">Items in Cart: {items.length}</h2>
      <div className="item-list">
        { products && products.map((product) => (
          <div className="item-card" key={product._id}>
            <img className="item-image" src={product.imgURL} alt={product.name} />
            <h3 className="item-name">{product.name}</h3>
            <div className="item-details">
              <button className="quantity-btn" onClick={() => decreaseQuantity(product)}>-</button>
              <span className="item-quantity">{product.quantity}</span>
              <button className="quantity-btn" onClick={() => addToCart(product)}>+</button>
              <button className="remove-btn" onClick={() => removeFromCart(product)}>Remove</button>
            </div>
            <p className="item-price">${product.price}</p>
          </div>
        ))}
      </div>
      <p className="total-price">Total Price: ${calculateTotal()}</p>
      <button className="clear-cart-btn" onClick={() => setItems([])}>Clear Cart</button>
      <button className="checkout-btn">Proceed to Checkout</button>
    </div>
    </div>
  );
};

export default ShoppingCart;