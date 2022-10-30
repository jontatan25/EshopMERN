import React from "react";
import { useEffect, useState } from "react";
import CartCountries from "../../components/CartCountries/CartCountries";

import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import { getCountriesInfo } from "../../service";
import "./style.css";

const ShoppingCart = () => {
  const [showShipping, setShowShipping] = useState(false);
  const [countriesInfo, setCountriesInfo] = useState(null);
  const [activeCountry, setActiveCountry] = useState(null);
  const [countryStates, setCountryStates] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getInfo = async () => {
    try {
      const res = await getCountriesInfo();
      setCountriesInfo(res);
    } catch (error) {
      setError(error);
    }
  };
  const toogleShipping = () => {
    setShowShipping(!showShipping);
  };

  useEffect(() => {
    getInfo();
    setLoading(false);
  }, []);

  const useCountry = (e) => {
    setActiveCountry(e.target.value);
  };

  useEffect(() => {
    if (activeCountry) {
      const getCurrentStates = countriesInfo.filter(
        (country) => country.name === activeCountry
      );
      const updatedStates = getCurrentStates[0].states;
      setCountryStates(updatedStates);
    }
  }, [activeCountry]);

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
                <div className="cart__title__product">
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
                  <QuantitySelector />
                </span>
                <div className="cart__title__total">
                  <span className="cart__product-price"> 120,00 EUR</span>
                  <button className="cart__product-btn-del cart__product-btn-del-heart">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" fill="#E6F1FA" />
                      <path
                        d="M12.4973 16.3916C11.1933 15.2193 10.1173 14.251 9.36577 13.3802C8.6115 12.5061 8.2 11.7475 8.2 10.9973C8.2 9.96345 8.97936 9.18992 10.025 9.18992C10.8337 9.18992 11.62 9.71225 11.8954 10.4126L11.9204 10.476H11.9885H13.0115H13.0796L13.1046 10.4126C13.38 9.71225 14.1663 9.18992 14.975 9.18992C16.0206 9.18992 16.8 9.96345 16.8 10.9973C16.8 11.7475 16.3885 12.5061 15.6336 13.3801C14.8814 14.251 13.804 15.2192 12.4973 16.3916ZM12.433 18.0743L12.5 18.1347L12.567 18.0743L13.3643 17.355C14.7786 16.0843 15.9607 15.0216 16.7881 14.0187C17.6165 13.0144 18.1 12.0577 18.1 10.9973C18.1 9.25714 16.7232 7.9 14.975 7.9C14.0275 7.9 13.1179 8.31909 12.5 8.98382C11.8821 8.31909 10.9725 7.9 10.025 7.9C8.27676 7.9 6.9 9.25714 6.9 10.9973C6.9 12.0577 7.38348 13.0144 8.21192 14.0187C9.03929 15.0216 10.2214 16.0843 11.6357 17.355L12.433 18.0743Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="0.2"
                      />
                    </svg>
                  </button>
                  <button className="cart__product-btn-del">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" fill="#E6F1FA" />
                      <path
                        d="M8.84277 8.8418L15.9883 15.9873"
                        stroke="black"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M15.9863 8.8418L8.84083 15.9873"
                        stroke="black"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
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
                  <QuantitySelector />
                </span>
                <div className="cart__title__total">
                  <span className="cart__product-price"> 120,00 EUR</span>
                  <button className="cart__product-btn-del cart__product-btn-del-heart">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" fill="#E6F1FA" />
                      <path
                        d="M12.4973 16.3916C11.1933 15.2193 10.1173 14.251 9.36577 13.3802C8.6115 12.5061 8.2 11.7475 8.2 10.9973C8.2 9.96345 8.97936 9.18992 10.025 9.18992C10.8337 9.18992 11.62 9.71225 11.8954 10.4126L11.9204 10.476H11.9885H13.0115H13.0796L13.1046 10.4126C13.38 9.71225 14.1663 9.18992 14.975 9.18992C16.0206 9.18992 16.8 9.96345 16.8 10.9973C16.8 11.7475 16.3885 12.5061 15.6336 13.3801C14.8814 14.251 13.804 15.2192 12.4973 16.3916ZM12.433 18.0743L12.5 18.1347L12.567 18.0743L13.3643 17.355C14.7786 16.0843 15.9607 15.0216 16.7881 14.0187C17.6165 13.0144 18.1 12.0577 18.1 10.9973C18.1 9.25714 16.7232 7.9 14.975 7.9C14.0275 7.9 13.1179 8.31909 12.5 8.98382C11.8821 8.31909 10.9725 7.9 10.025 7.9C8.27676 7.9 6.9 9.25714 6.9 10.9973C6.9 12.0577 7.38348 13.0144 8.21192 14.0187C9.03929 15.0216 10.2214 16.0843 11.6357 17.355L12.433 18.0743Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="0.2"
                      />
                    </svg>
                  </button>
                  <button className="cart__product-btn-del">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="24" height="24" fill="#E6F1FA" />
                      <path
                        d="M8.84277 8.8418L15.9883 15.9873"
                        stroke="black"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M15.9863 8.8418L8.84083 15.9873"
                        stroke="black"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </li>
            <li className="cart__list-item cart__list-options">
              <button className="cart__options-btn">CONTINUE SHOPPING</button>
              <button className="cart__options-btn options-btn-clear">
                CLEAR SHOPPING CART
              </button>
            </li>
          </ul>
        </div>
        <div className="cart__payment">
          <div className="cart__payment-info">
            <div className="cart__discount">
              <h5 className="cart__payment-title">Apply discount Code</h5>
              <div className="cart__discount-container">
                <input
                  className="cart__discount-code"
                  type="text"
                  placeholder="Enter Discount Code"
                />
                <button className="cart__discount-btn">APPLY DISCOUNT</button>
              </div>
            </div>
            <div className="cart__shipping">
              <div className="cart__shipping-title-container">
                <h5 className="cart__payment-title " id="shipping__title">
                  Estimate Shipping and Tax
                </h5>
                <button
                  className={
                    showShipping
                      ? "cart__payment-shipping-btn cart__payment-shipping-btn-minus"
                      : "cart__payment-shipping-btn"
                  }
                  onClick={toogleShipping}
                ></button>
              </div>
              <div
                className="cart__shipping-content-container"
                aria-expanded={!showShipping}
              >
                <div className="cart__shipping-destination">
                  Enter your destination to get a shipping estimate.
                </div>
                <div className="cart__shipping-information-container">
                  <span className="shipping__information-title">Country</span>
                  <select
                    name="shipping-countr"
                    id="countr"
                    className="shipping__information-name"
                    onChange={useCountry}
                  >
                    <option className="shipping__information-opt" value="">
                      -Please choose your Country
                    </option>
                    {loading ? (
                      <h5>Loading . . .</h5>
                    ) : error ? (
                      <h5>Something went wrong</h5>
                    ) : (
                      countriesInfo &&
                      countriesInfo.map((country) => (
                        <CartCountries
                          key={country.iso3}
                          countryName={country.name}
                        />
                      ))
                    )}
                  </select>
                </div>
                <div className="cart__shipping-information-container">
                  <span className="shipping__information-title">
                    State/Province
                  </span>
                  <select
                    name="shipping-state"
                    id="state"
                    className="shipping__information-name"
                  >
                    {!activeCountry ? (
                      <option className="shipping__information-opt" value="">
                        -Please choose your Country First
                      </option>
                    ) : (
                      <option className="shipping__information-opt" value="">
                        -Please choose your state
                      </option>
                    )}
                    {loading ? (
                      <h5>Loading . . .</h5>
                    ) : error ? (
                      <h5>Something went wrong</h5>
                    ) : (
                      countryStates &&
                      countryStates.map((state) => (
                        <CartCountries
                          key={state.state_code}
                          countryName={state.name}
                        />
                      ))
                    )}
                  </select>
                </div>
                <div className="cart__shipping-information-container">
                  <span className="shipping__information-title">
                    Zip/Postal Code
                  </span>
                  <input
                    type="text"
                    className="shipping__information-name"
                  ></input>
                </div>
                <span className="cart__shipping-title2">Flat Rate</span>
                <span className="cart__shipping-rate-container">
                <input type="radio" name="rate" value="flat" id="flat-rate" />
                  <label className="cart__shipping-rate-lb" htmlFor="flat-rate">
                    Fixed 5.00 EUR
                  </label>
                </span>
                <span className="cart__shipping-title2">Best way</span>
                <span className="cart__shipping-rate-container">
                <input type="radio" name="rate" value="table" id="table-rate" />
                  <label className="cart__shipping-rate-lb" htmlFor="table-rate">
                    Fixed 5.00 EUR
                  </label>
                </span>
              </div>
            </div>
          </div>
          <div className="cart__payment-checkout"></div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
