import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useDispatch, useSelector } from "react-redux";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";

let isFirstRender = true;
function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch();

  useEffect(() => {

    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

    const sendRequest = async () => {
      dispatch(uiActions.showNotification({
        open: true,
        msg: "Sending Request",
        type: "warning"
      }))

      const res = await fetch('https://shoppingapp-redux-4ae11-default-rtdb.firebaseio.com/cartItems.json', {
        method: "PUT",
        body: JSON.stringify(cart)
      });

      const data = await res.json()

      dispatch(uiActions.showNotification({
        open: true,
        msg: "Sent Request Successfully",
        type: "success"
      }))

    };

    sendRequest().catch((err) => {
      dispatch(uiActions.showNotification({
        open: true,
        msg: "Sending request failed!",
        type: "error"
      })
      )
    });

  }, [dispatch, cart])

  return (
    <div className="App">
      {notification && <Notification type={notification.type} msg={notification.msg} />}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
