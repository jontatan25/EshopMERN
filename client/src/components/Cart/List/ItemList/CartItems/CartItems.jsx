import React, { useState, useEffect } from "react";
// import CartCounter from "../Cart/CartCounter";
import "./CartItems.css";
import { ImCross } from "react-icons/im";
import { CgMathPlus,CgMathMinus } from "react-icons/cg";
import axios from "axios";
import LoadingSpinner from "../../../../stateless/LoadingSpinner";

const CartItems = () => {
  const token = JSON.parse(localStorage.getItem("user"));
  let [loading, setloading] = useState(true);
  const [cart, setCart] = useState([]);
  const getInfo = async () => {
    const res = await axios.get("http://192.168.0.102:8080/cart/myCart", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const itemsFromCart = res.data.cart[0].items;
    setCart(itemsFromCart);
    setloading(false);
    return
  };

  let addProduct = async (id) => {
    try {
      const data = {id:id}
      const res = await axios.post(
        `http://192.168.0.102:8080/cart/addProduct`,data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      if (res.data.success === true) {

         alert("Item quantity +1 in DB")
         getInfo()
         return 
      } else return alert("Something went wrong, please try again")
      
    } catch (error) {
      console.log(error);
    }
  };
  
  let substractOneProduct = async (id) => {
    try {
      const data = {id:id}
      const res = await axios.post(
        `http://192.168.0.102:8080/cart/substractOneProduct`,data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      if (res.data.success === true) {

         alert("Item quantity -1 in DB")
         getInfo()
         return 
      } else return alert("Something went wrong, please try again")
      
    } catch (error) {
      console.log(error);
    }
  };
  let deleteProduct = async (id) => {
    try {
      const data = {id:id}
      const res = await axios.delete(
        `http://192.168.0.102:8080/cart/deleteProduct`,
        {
          headers: { Authorization: `Bearer ${token}` },
          data:data
        },
      )
      if (res.data.success === true) {

         alert("Item deleted successfully from DB!")
         getInfo()
         return 
      } else return alert("Something went wrong, please try again")
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : cart.length > 0 ? (
        <>
          {cart &&
            cart.map((item) => (
              <div className="CartItem_container" key={item._id}>
                <ul className="CartItem__list-titles">
                  <li className="CartItem__Container-Photo">
                    <div
                      className="CartItem__Photo"
                      // style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <p className="CartItem__title">{item.name}</p>
                  </li>
                  <li>
                    <div className="counter__container">
                      <button
                      onClick={() => substractOneProduct(item._id)}
                        className="counter__container-button"
                      >
                        <CgMathMinus />
                      </button>
                      <span className="counter__container-quantity">{item.quantity}</span>
                      <button
                        onClick={() => addProduct(item._id)}
                        className="counter__container-button"
                      >
                        <CgMathPlus />
                      </button>
                    </div>
                  </li>
                  <li>$ {(item.price * item.quantity).toFixed(2)}</li>
                  <li>
                    <button
                      onClick={() => deleteProduct(item._id)}
                      className="CartItem__delete-button"
                    >
                      <ImCross
                        className="CartItem__delete-icon"
                        size="15px"
                        color="#808080"
                      />
                    </button>
                  </li>
                </ul>
              </div>
            ))}
        </>
      ) : (
        <p>no Hay nada en el carro</p>
      )}
    </>
  );
};

export default CartItems;
