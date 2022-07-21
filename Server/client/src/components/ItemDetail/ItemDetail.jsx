import React from "react";
import axios from "axios";

import { useNavigate } from 'react-router-dom'

import "./ItemDetail.css";
const token = JSON.parse(localStorage.getItem("user"));
// import ItemDetailProperties from "./ItemDetailProperties/ItemDetailProperties";

const ItemDetail = ({ item }) => {
  const navigate = useNavigate()
  let addProduct = async (e) => {
    e.preventDefault();
    try {
      const productId = item._id  
      const data = {id: productId}
      const res = await axios.post(
        `https://mern-eshop-espitia-jonathans.herokuapp.com/cart/addProduct`,data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      if (res.data.success === true) {

         alert("The Item was added successfully")
         
         return navigate('/cart')
      } else return alert("Something went wrong, please try again")
      
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h2 className="itemDetail__container-title"></h2>
      <div className="itemDetail__container-flex">
        <div className="itemDetail__container-left">
          <div
            className="itemDetail__container-left-bigPhoto"
            // style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <div className="itemDetail__container-left-smallPhoto1"></div>
          <div className="itemDetail__container-left-smallPhoto2"></div>
        </div>
        <div className="itemDetail__container-right">
          <div className="itemDetail__container-right-title">
            <p>{item.title}</p>
          </div>
          <div className="itemDetail__container-right-properties">
            <p className="itemDetail__container-right-properties-price">
              ${item.price} USD
            </p>
            <p className="itemDetail__container-right-properties-subtitle">
              {item.description}
            </p>
            <p className="itemDetail__container-right-properties-option">
              Option
            </p>
            {/* <Counter quantity={quantity} setQuantity={setQuantity} /> */}
            <form onSubmit={addProduct}>
            <button type="submit"
              className="itemDetail__container-right-properties-button"
            >
              ADD TO CART
            </button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
