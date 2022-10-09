import React from "react";
import CartList from "./List/CartList"
import CartPayment from "./Payment/CartPayment"
import "./style.css"

const Cart = () => {

  return (
    <div className="cartContainer">
      <CartList />
      <CartPayment />
    </div>
  );
};

export default Cart;
