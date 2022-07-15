import React,{useState,useEffect} from "react";
import axios from "axios";
import { GoCreditCard } from "react-icons/go";
import { BsPaypal } from "react-icons/bs";
import {useNavigate} from "react-router-dom"

import "./CartPayment.css";
const CartPayment = () => {

  let navigate = useNavigate()
  const [cart, setCart] = useState([]);
  const token = JSON.parse(localStorage.getItem("user"));
  
  const createOrder = async (e) => {
    e.preventDefault();
    try {
      
      const res = await axios.post("http://192.168.0.102:8080/orders/create",{}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data.success === true){
        alert("success!! you will receive an email with your order information!")
      return navigate("/")
    } 
      return alert("error: "+ res.data.message)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="cartContainer__payment">
      <div className="cartContainer__payment-title">
        <h3>Payment Info</h3>
      </div>
      <form onSubmit={createOrder}>
        <fieldset className="cartContainer__payment-formField">
          method{" "}
          <legend className="cartContainer__payment-formFieldTitle">
            Payment
          </legend>
          <div className="cartContainer__payment-formFieldContainer">
            <input
              type="radio"
              id="creditCard"
              name="paymentMethod"
              value="creditCard"
            ></input>
            <GoCreditCard className="formFieldContainer__icon" size="20px" />
            <label htmlFor="creditCard">Credit Card</label>
          </div>
          <div className="cartContainer__payment-formFieldContainer">
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="paypal"
            ></input>
            <BsPaypal className="formFieldContainer__icon" size="20px" />
            <label htmlFor="paypal">Paypal</label>
          </div>
        </fieldset>
        <fieldset className="cartContainer__payment-formField">
          <legend className="cartContainer__payment-formFieldTitle">
            Name On Card
          </legend>
          <input type="text" name="cardName" maxLength="50" />
        </fieldset>
        <fieldset className="cartContainer__payment-formField">
          <legend className="cartContainer__payment-formFieldTitle">
            Card Number
          </legend>
          <input
            className="formField__card"
            name="cardFirst"
            maxLength="4"
            type="text"
          />{" "}
          -
          <input
            className="formField__card"
            name="cardSecond"
            maxLength="4"
            type="text"
          />{" "}
          -
          <input
            className="formField__card"
            name="cardThirs"
            maxLength="4"
            type="text"
          />{" "}
          -
          <input
            className="formField__card"
            name="cardFourth"
            maxLength="4"
            type="text"
          />
        </fieldset>
        <fieldset
          className="cartContainer__payment-formField"
          id="formField__last"
        >
          <div className="formField__expirationContainer">
            <div className="formField__expirationContainerLeft">
              <legend className="cartContainer__payment-formFieldTitle">
                Expiration Date:
              </legend>
              <select name="expireMM" id="expireMM">
                <option value="">Month</option>
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
              <select name="expireYY" id="expireYY">
                <option value="">Year</option>
                <option value="22">2022</option>
                <option value="23">2023</option>
                <option value="24">2024</option>
                <option value="25">2025</option>
                <option value="26">2026</option>
              </select>
            </div>
            <div className="formField__expirationContainerRight">
              <legend className="cartContainer__payment-formFieldTitle">
                CVV:
              </legend>
              <input
                className="formField__cvv"
                name="cvv"
                id="cvv"
                type="text"
                maxLength={3}
              />
            </div>
          </div>
        </fieldset>
        <div className="cartContainer__payment-ContainerButton">
          <button type="submit"
            className="cartContainer__payment-button"
          >
            Check Out
          </button>
        </div>
      </form>
    </div>
  );
};

export default CartPayment;
