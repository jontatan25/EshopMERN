import React from "react";
import { useEffect, useState } from "react";
import { useCartContext } from "../../components/CartContext/context";
import CartCountries from "../../components/CartCountries/CartCountries";
import CartProduct from "../../components/CartProduct/CartProduct";

import { getCountriesInfo } from "../../service";
import Swal from "sweetalert2";
import "./style.css";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const [showShipping, setShowShipping] = useState(false);
  const [countriesInfo, setCountriesInfo] = useState(null);
  const [activeCountry, setActiveCountry] = useState(null);
  const [activeCountryState, setActiveCountryState] = useState(null);
  const [countryStates, setCountryStates] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

  const { cart, deleteAllFromCart, loggedIn, setShowLogin } = useCartContext();
  const navigate = useNavigate();

  const calculateTotal = () => {
    let sum = null;
    if (cart.length === 0) {
      return 0;
    } else {
      for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        const totalProduct = product.price * product.quantity;
        sum += totalProduct;
      }
      setTotal(sum);
    }
  };

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

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  const useCountry = (e) => {
    setActiveCountry(e.target.value);
  };
  const useCountryState = (e) => {
    setActiveCountryState(e.target.value);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // HANDLING EMPTY COUNTRY AND STATE
    if (loggedIn) {
      if (!activeCountry) {
        Swal.fire({
          title: "Information missing!",
          text: "Please select your Country",
          icon: "info",
        });
      } else if (!activeCountryState) {
        Swal.fire({
          title: "Information missing!",
          text: "Please select your State",
          icon: "info",
        });
      }
      // HANDLING EMPTY CART
      if (cart.length === 0) {
        Swal.fire({
          title: "Your cart is empty.",
          text: "Add some products to your cart and try again.",
          icon: "info",
        });
      } else {
        Swal.fire({
          title: "Creating your order",
          text: "please wait...",
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        }).then(() => {
          Swal.fire({
            title: "Your Order has been placed.",
            text: "Thank you for your purchase!",
            icon: "success",
            timer: 2400,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
          }).then(() => {
            deleteAllFromCart();
            navigate("/");
          });
        });
      }
    } else {
      Swal.fire({
        title: "Please log in before creating your order.",
        text: "Please log in before proceeding with your purchase.",
        icon: "info",
      }).then(() => {
        setShowLogin(true);
      });
    }
  };

  return (
    <>
      <h5 className="shoppingCart__url">Home / Blog</h5>
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
              {cart.length === 0 ? (
                <div className="cart__list-empty">
                  {" "}
                  <h5 className="cart__product-title cart__product-title-empty">
                    Your cart is empty
                  </h5>
                </div>
              ) : (
                cart.map((product) => <CartProduct product={product} />)
              )}
            </li>
            <li className="cart__list-item cart__list-options">
              <button className="cart__options-btn">CONTINUE SHOPPING</button>
              <button
                className="cart__options-btn options-btn-clear"
                onClick={() => {
                  deleteAllFromCart();
                }}
              >
                CLEAR SHOPPING CART
              </button>
            </li>
          </ul>
        </div>
        <div className="cart__payment">
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="cart__payment-info">
              <div className="cart__discount">
                <h5 className="cart__payment-title">Apply discount Code</h5>
                <div className="cart__discount-container">
                  <input
                    className="cart__discount-code"
                    type="text"
                    placeholder="Enter Discount Code"
                  />
                  <button type="button" className="cart__discount-btn">
                    APPLY DISCOUNT
                  </button>
                </div>
              </div>
              <div className="cart__shipping">
                <div className="cart__shipping-title-container">
                  <h5 className="cart__payment-title " id="shipping__title">
                    Estimate Shipping and Tax
                  </h5>
                  <button
                    type="button"
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
                      onChange={useCountryState}
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
                      required
                    />
                  </div>
                  <span className="cart__shipping-title2">Flat Rate</span>
                  <div className="cart__shipping-rate-container">
                    <label
                      className="cart__shipping-rate-lb"
                      htmlFor="flat-rate"
                    >
                      <input
                        type="radio"
                        name="rate"
                        value="flat"
                        id="flat-rate"
                        required
                      />
                      <span></span>
                      Fixed 5.00 EUR
                    </label>
                  </div>
                  <span className="cart__shipping-title2">Best way</span>
                  <span className="cart__shipping-rate-container">
                    <label
                      className="cart__shipping-rate-lb"
                      htmlFor="table-rate"
                    >
                      <input
                        type="radio"
                        name="rate"
                        value="table"
                        id="table-rate"
                      />
                      <span></span>
                      Fixed 5.00 EUR
                    </label>
                  </span>
                </div>
              </div>
            </div>
            <div className="cart__payment-checkout">
              <div className="cart__subtotal">
                <span className="cart__subtotal-title">Subtotal</span>
                <span className="cart__subtotal-title">{total},00 EUR</span>
              </div>
              <div className="cart__subtotal">
                <span className="cart__subtotal-title cart__subtotal-title-grey">
                  Tax
                </span>
                <span className="cart__subtotal-title cart__subtotal-title-grey">
                  00.00 EUR
                </span>
              </div>
              <div className="cart__subtotal ">
                <span className="cart__subtotal-title cart__total-title">
                  Order Total
                </span>
                <span className="cart__subtotal-title cart__total-title">
                  {total},00 EUR
                </span>
              </div>
              <button type="submit" className="cart__total-btn">
                proceed to checkout
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
