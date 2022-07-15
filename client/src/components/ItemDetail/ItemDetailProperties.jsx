import { useState, React } from "react";
import "./ItemDetailProperties.css";
import Counter from "../../Counter/Counter";
import AddToCart from "../AddToCart";

const ItemDetailProperties = ({ item, id }) => {
  
  let addProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://192.168.0.102:8080/products/id/${id}`,{
          headers: { Authorization: `Bearer ${token}` },
        }
        );
        console.log(res)
    
    } catch (error) {
      console.log(error);
    }
  };


  return (
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
        <p className="itemDetail__container-right-properties-option">Option</p>
        {/* <Counter quantity={quantity} setQuantity={setQuantity} /> */}
        <button
        onClick={() => addProduct(id)}
        className="itemDetail__container-right-properties-button"
      >
        ADD TO CART
      </button>
      </div>
    </div>
  );
};

export default ItemDetailProperties;
