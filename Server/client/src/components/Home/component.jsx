import React from "react";
import "./style.css";
import carrouselBackground from "../../images/carrousel/carrousel-background.jpg";
import smallImage from "../../images/carrousel/smallImg.jpg";
import bigImage from "../../images/carrousel/bigImage.jpg";
import smallPromo1 from "../../images/promo/small1.jpg";
import smallPromo2 from "../../images/promo/small2.jpg";
import bigPromo1 from "../../images/promo/big1.jpg";

import frame from "../../images/brandBanner/Frame.png";
import frame1 from "../../images/brandBanner/Frame-1.png";
import frame2 from "../../images/brandBanner/Frame-2.png";
import frame3 from "../../images/brandBanner/Frame-3.png";
import frame4 from "../../images/brandBanner/Frame-4.png";
import frame5 from "../../images/brandBanner/Frame-5.png";
import frame6 from "../../images/brandBanner/Frame-6.png";


const HomeContainer = () => {
  return (
    <>
      <div
        className="homeContainer"
        style={{ backgroundImage: `url(${carrouselBackground})` }}
      >
        <div className="carousel__container">
          <div className="carousel__sign">
            <div className="carousel__sign-text-container">
              <h2 className="carousel__sign-text">
                SUMMER SALE GET{" "}
                <span className="carousel__sign-text highlight">30% OFF</span>{" "}
                ON ALL DRESS.
              </h2>
            </div>
            <button className="transparent__btn">SHOP NOW</button>
          </div>
          <div className="carousel__images">
            <div
              className="carousel__images-smallImage"
              style={{ backgroundImage: `url(${smallImage})` }}
            ></div>
            <div
              className="carousel__images-bigImage"
              style={{ backgroundImage: `url(${bigImage})` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="banner__container">
        <p className="banner__text">CHOOSE YOUR BRAND</p>
        <div
          className="banner__icon"
          style={{ backgroundImage: `url(${frame})` }}
        ></div>
        <div
          className="banner__icon"
          style={{ backgroundImage: `url(${frame1})` }}
        ></div>
        <div
          className="banner__icon"
          style={{ backgroundImage: `url(${frame2})` }}
        ></div>
        <div
          className="banner__icon"
          style={{ backgroundImage: `url(${frame3})` }}
        ></div>
        <div
          className="banner__icon"
          style={{ backgroundImage: `url(${frame4})` }}
        ></div>
        <div
          className="banner__icon"
          style={{ backgroundImage: `url(${frame5})` }}
        ></div>
        <div
          className="banner__icon"
          style={{ backgroundImage: `url(${frame6})` }}
        ></div>
      </div>
      <div className="promotions__container">
        <div className="promotions__small-container">
          <div
            className="promotion__promo-one"
            style={{ backgroundImage: `url(${smallPromo1})` }}
          >
            <div className="promotion__promo-one-container">
              <h3 className="promo__title">
                CHOOSE <br></br> YOUR LOOK
              </h3>
              <p className="promo__text">See our clothing collections</p>
              <button className="transparent__btn">SEE OFFERS</button>
            </div>
          </div>
          <div
            className="promotion__promo-two"
            style={{ backgroundImage: `url(${smallPromo2})` }}
          >
            <div className="promotion__promo-two-container">
              <h3 className="promo__title-two">BRAND NEW STYLE</h3>
              <p className="promo__text-two">Popular clothing brands</p>
              <button className="transparent__btn">SEE OFFERS</button>
            </div>
          </div>
        </div>
        <div
          className="promotion__promo-three"
          style={{ backgroundImage: `url(${bigPromo1})` }}
        >
          <div className="promotion__promo-three-container">
            <h3 className="promo__title-three">UP TO 40% OFF</h3>
            <p className="promo__text-three">Special offers and great deals</p>
            <button className="transparent__btn">SEE OFFERS</button>
          </div>
        </div>
      </div>
      <div className="collection__container">
        <div className="collection__filter-container">
          <h3 className="filter__title">Shop Some Wear:</h3>
          <ul className="filter__list">
            <li className="filter__list-item">
              <button className="square__btn-empty"></button>BEST SELLERS
            </li>
            <li className="filter__list-item">
              <button className="square__btn-empty"></button>NEW ARRIVALS
            </li>
            <li className="filter__list-item">
              <button className="square__btn-empty"></button>TOP WOMEN
            </li>
            <li className="filter__list-item">
              <button className="square__btn-empty"></button>COLLECTION: SUMMER
            </li>
            <li className="filter__list-item">
              <button className="square__btn-empty"></button>COLLECTION: SPRING
            </li>
            <li className="filter__list-item">
              <button className="square__btn-empty"></button>TRENDING
            </li>
          </ul>
        </div>
        <div className="collection__filter-itemList"></div>
      </div>
    </>
  );
};

export default HomeContainer;
