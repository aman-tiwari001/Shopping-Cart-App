import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CartItems from "./CartItems";
import { cartActions } from "../store/cart-slice";
const Layout = () => {

  let total = 0;
  let itemList = useSelector((state) => state.cart.itemList);
  const showCart = useSelector((state) => state.cart.showCart);
  const dispatch = useDispatch();
  itemList.forEach((item) => {
    total += item.totalPrice;
  })

  useEffect(() => {
    // Dispatch the action after rendering is complete
    dispatch(cartActions.setTotalPrice({ totalPrice: total }));
  }, [total]);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
