import React from "react";
import "./style.css"

const ShoppingCart = () => {
  return (
    <>
      <h5 className="shoppingCart__url">Home / ShoppingCart</h5>
      <h3 className="shoppingCart__title">Shopping Cart</h3>
      <div className="cart__container">
        <div className="cart__products">
            <ul className="cart__list">
                <li className="cart__list-item">
                    <h4 className="cart__title cart__title__product">Product</h4>
                    <h4 className="cart__title cart__title__price">Price</h4>
                    <h4 className="cart__title cart__title__size">Size</h4>
                    <h4 className="cart__title cart__title__quantity">Quantity</h4>
                    <h4 className="cart__title cart__title__total">Total</h4>
                </li>
                <li className="cart__list-item cart__list-product">
                    <div className="cart__title__product">
                        <img className="cart__product-img" src="" alt="product image" />
                        <div className="cart__product-det">
                            <h5 className="cart__product-title">Angels malu zip jeans slim black used</h5>
                            <img src="" alt="" />
                        </div>
                    </div>
                    <span className="cart__title__price cart__product-text">120,00 EUR</span>
                    <span className="cart__title__size cart__product-text" >W32</span>
                    <span className="cart__title__quantity cart__product-text">5</span>
                    <span className="cart__title__total cart__product-text">120,00 EUR</span>
                </li>
                <li className="cart__list-item"></li>
            </ul>
        </div>
        <div className="cart__payment"></div>
      </div>
    </>
  );
};

export default ShoppingCart;
