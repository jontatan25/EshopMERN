import React from "react";
import "./style.css";

const ShoppingCart = () => {
  return (
    <>
      <h5 className="shoppingCart__url">Home / ShoppingCart</h5>
      <h3 className="shoppingCart__title">Shopping Cart</h3>
      <div className="cart__container">
        <div className="cart__products">
          <ul className="cart__list">
            <li className="cart__list-item cart__list-item-categories">
              <h4 className="cart__title cart__title__product">Product</h4>
              <h4 className="cart__title cart__title__price">Price</h4>
              <h4 className="cart__title cart__title__size">Size</h4>
              <h4 className="cart__title cart__title__quantity">Quantity</h4>
              <h4 className="cart__title cart__title__total">Total</h4>
            </li>
            <li className="cart__list-item cart__list-product">
              <div className="cart__product-container">
                <div     className="cart__title__product">
                  <img
                    className="cart__product-img"
                    src={require("./dress1.jpg")}
                    alt="product image"
                  />
                  <div className="cart__product-det">
                    <h5 className="cart__product-title">
                      Angels malu zip jeans slim black used
                    </h5>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="22"
                        height="22"
                        fill="white"
                        stroke="#C4C4C4"
                      />
                      <rect x="4" y="4" width="15" height="15" fill="#5884AA" />
                    </svg>
                  </div>
                </div>
                <span className="cart__title__price cart__product-text">
                  120,00 EUR
                </span>
                <span className="cart__title__size cart__product-text">
                  W32
                </span>
                <span className="cart__title__quantity cart__product-text">
                  5
                </span>
                <span className="cart__title__total cart__product-text">
                  120,00 EUR
                </span>
              </div>
              <div className="cart__product-container">
                <div className="cart__title__product">
                  <img
                    className="cart__product-img"
                    src={require("./dress2.jpg")}
                    alt="product image"
                  />
                  <div className="cart__product-det">
                    <h5 className="cart__product-title">
                      Angels malu zip jeans slim black used
                    </h5>
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="22"
                        height="22"
                        fill="white"
                        stroke="#C4C4C4"
                      />
                      <rect x="4" y="4" width="15" height="15" fill="#C35C71" />
                    </svg>
                  </div>
                </div>
                <span className="cart__title__price cart__product-text">
                  120,00 EUR
                </span>
                <span className="cart__title__size cart__product-text">
                  W32
                </span>
                <span className="cart__title__quantity cart__product-text">
                  5
                </span>
                <span className="cart__title__total cart__product-text">
                  120,00 EUR
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="cart__payment"></div>
      </div>
    </>
  );
};

export default ShoppingCart;
