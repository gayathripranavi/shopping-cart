import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "./redux/cartSlice";

const products = [
  { id: 1, name: "MacBook Pro", price: 1200, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800" },
  { id: 2, name: "Sony Headphones", price: 199, img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800" },
  { id: 3, name: "iPhone", price: 999, img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800" },
  { id: 4, name: "Smartwatch", price: 250, img: "https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?w=800" },
];

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <h1>ShopEase</h1>
        <div className="cart-badge">
          🛒
          {cart.length > 0 && <span>{cart.length}</span>}
        </div>
      </div>

      <div className="container">
        {/* Product List */}
        <h2>Products</h2>
        <div className="products">
          {products.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.img} alt={p.name} />
              <h3>{p.name}</h3>
              <p>${p.price}</p>
              <button onClick={() => dispatch(addToCart(p))}>Add to Cart</button>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div className="cart">
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <img src={item.img} alt={item.name} />
                    <span>
                      {item.name} (${item.price}) x {item.quantity}
                    </span>
                  </div>
                  <div className="cart-item-actions">
                    <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                    <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                    <button
                      className="remove-btn"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="cart-total">Total: ${total}</div>
              <button className="clear-btn" onClick={() => dispatch(clearCart())}>
                Clear Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
