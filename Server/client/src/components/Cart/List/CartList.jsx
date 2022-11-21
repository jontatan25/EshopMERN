import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CartItemList from "./ItemList/CartItemList";
import "./CartList.css";

const CartList = () => {

  const token = JSON.parse(localStorage.getItem("user"));
  let [loading, setloading] = useState(true);
  const [cart, setCart] = useState([]);

  const getInfo = async () => {
    const res = await axios.get("https://jhonndevshop.vercel.app/api/cart/myCart", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const itemsFromCart = res.data.cart[0].items;
    setCart(itemsFromCart);
    setloading(false);
  };
  useEffect(() => {
    getInfo();
  }, []);

  let subtotalPrice = 0;

  for (let i = 0; i < cart.length; i++) {
    const totalProduct = (cart[i].price* cart[i].quantity);
    subtotalPrice += totalProduct;
  }

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
          <Link to="/products" className="list-footer_BackButton">
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
