import React from "react";
import "./Auth.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const Auth = () => {

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  }

  return (
    <div className="container">
      <h2 className="login-h2">Login to Shopping Cart</h2>{" "}
      <form onSubmit={handleSubmit}>
        <label className="label" htmlFor="id">Id</label>
        <input className="input" type="text" name="id" id="id" />
        <label className="label" htmlFor="password">Password</label>
        <input className="input" type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
 
export default Auth;
