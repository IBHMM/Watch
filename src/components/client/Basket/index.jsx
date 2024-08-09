import React from "react";
import { useSelector } from "react-redux";

function Basket() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="basket">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Basket;
