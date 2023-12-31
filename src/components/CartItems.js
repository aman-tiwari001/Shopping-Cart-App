import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const itemList = useSelector((state) => state.cart.itemList);
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {itemList.map((item) => {
          return <li key={item.id}>
            <CartItem id={item.id} price={item.price} name={item.name} />
          </li>
        })}
      </ul>
    </div>
  );
};

export default CartItems;
