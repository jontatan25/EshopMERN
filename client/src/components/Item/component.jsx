import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Item = ({ productsArray }) => {
  return (
    <>
      {productsArray &&
        productsArray.map((product) => (
          <div className="itemcontainer__item" key={product._id}>
            <div className="itemcontainer__item-imgContainer">
              <img
                className="itemcontainer__item-img"
                src={product.URLPhoto}
                alt="product Image"
              />{" "}
            </div>
            <div className="itemcontainer__item-body">
              <h4 className="itemcontainer__item-body-title">{product.name}</h4>
              <p className="itemcontainer__item-body-description">
                {product.description}
              </p>
              <p className="itemcontainer__item-body-price">
                ${product.price} USD
              </p>
              <div className="itemcontainer__item-buttonContainer">
                <Link to={`/product/${product._id}`}>
                  <button className="itemcontainer__item-body-button">
                    More Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default Item;
