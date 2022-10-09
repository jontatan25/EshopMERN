import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import "./ItemDetail.css";
const token = JSON.parse(localStorage.getItem("user"));

const ItemDetail = ({ item }) => {
  const navigate = useNavigate();
  let addProduct = async (e) => {
    e.preventDefault();
    try {
      const productId = item._id;
      const data = { id: productId };
      const res = await axios.post(
        `https://mern-eshop-espitia-jonathans.herokuapp.com/cart/addProduct`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (res.data.success === true) {
        alert("The Item was added successfully");

        return navigate("/cart");
      } else return alert("Something went wrong, please try again");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h3 className="itemDetail__container-title">Product details</h3>
      <div className="itemDetail__container-flex">
        <div className="itemDetail__container-left">
          <img
            className="itemDetail__container-left-Photo"
            src={item.URLPhoto}
          ></img>
        </div>

        <div className="itemDetail__container-right">
          <div className="itemDetail__container-right-title">
            <p>{item.name}</p>
          </div>
          <div className="itemDetail__container-right-properties">
            <div className="itemDetail__container-right-properties-description">
              <p>{item.description}</p>
            </div>
            <div className="itemDetail__container-right-properties-stock">
              <p>Stock: {item.stock}</p>
            </div>
            <div className="itemDetail__container-right-properties-price">
              <p>${item.price} USD</p>
            </div>
          </div>
          <div className="itemDetail__container-right-form">
            <form onSubmit={addProduct}>
              <button
                type="submit"
                className="itemDetail__container-right-properties-button"
              >
                Add to cart
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
