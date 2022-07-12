import React from "react";
import { Link } from "react-router-dom";
import CartItemList from "./ItemList/CartItemList";
import "./CartList.css";
// import { useCartContext } from "../CartContext/CartContext";

const CartList = () => {

  // const { cart, deleteAll } = useCartContext();

  let subtotalPrice = 0;

  // for (let i = 0; i < cart.length; i++) {
  //   const totalProduct = (cart[i].price* cart[i].cantidad.amount);
  //   subtotalPrice += totalProduct;
  // }

  return (
    <div className="cartContainer__list">
      <div className="cartContainer__list-title">
        <h3>Shopping Cart.</h3>
      </div>
      <ul className="cartContainer__list-titles">
        <li>Product</li>
        <li>Quantity</li>
        <li>Total Price</li>
        <li></li>
      </ul>
      <CartItemList/>
      <div className="cartContainer__list-footer"> 
          <button  className="btn__deleteAll">delete all</button> 
          <Link to="/" className="list-footer_BackButton">
            &lt; continue Shopping
          </Link>
        <ul className="cartContainer__footerPrice">
          <li>
            <p className="cartContainer__footerPrice-Title">Subtotal</p>
            <p className="cartContainer__footerPrice-Number">subtotalPrice.toFixed(2)</p>
          </li>
          <li >
            <p className="cartContainer__footerPrice-Title">Shipping</p> 
            <p className="cartContainer__footerPrice-Number">Free</p>
          </li>
          <li >
              <p className="cartContainer__footerPrice-Total">Total</p>
              <p className="cartContainer__footerPrice-Total">TotalPrice</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CartList;
