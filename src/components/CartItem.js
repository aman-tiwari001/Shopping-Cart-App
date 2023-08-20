import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { cartActions } from "../store/cart-slice";
const CartItem = ({ name, price, id }) => {
  const dispatch = useDispatch();
  const itemList = useSelector(state => state.cart.itemList);
  const quantity = (itemList.find((item) => item.id === id)).quantity;
  const totalPrice = (itemList.find((item) => item.id === id)).totalPrice;
  const removeHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  const addHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <div className="cartItem">
      <h2>{name}</h2>
      <p>$ {price} /-</p>
      <p>X {quantity}</p>
      <article>Total: $ {totalPrice}</article>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
