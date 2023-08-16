import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const products = [
    { id: 1, name: "Book", price: 10 },
    { id: 2, name: "Pen", price: 20 },
    { id: 3, name: "Pencil", price: 15 },
  ];

  const AddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const RemoveFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="App">
      <h1>Your Shopping Cart</h1>
      <div className="cart-container">
        <h2>Selected Products</h2>
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id} className="product-item">
              {product.name} - ${product.price}
              <div className="button-container">
                <button onClick={() => AddToCart(product)}>Add to Cart</button>
                <button onClick={() => RemoveFromCart(product.id)}>
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
        <p className="total-price">Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default App;
