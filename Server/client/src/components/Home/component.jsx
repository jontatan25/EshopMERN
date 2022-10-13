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

import sampleImg from "../../images/productSample.jpg";

import banner2 from "../../images/banner2/banner2-background.jpg";

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
            <button className="transparent__btn">SHOP NOW</button>
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
        <div className="collection__filter-itemList">
          <div className="collection__item">
            <div
              className="collection__item-photo-container"
              style={{ backgroundImage: `url(${sampleImg})` }}
            ></div>
            <h4 className="collection__item-title">COLLECTION</h4>
            <p className="collection__item-name">Product description</p>
            <p className="collection__item-price">PRICE EUR</p>
          </div>
          <div className="collection__item">
            <div
              className="collection__item-photo-container"
              style={{ backgroundImage: `url(${sampleImg})` }}
            ></div>
            <h4 className="collection__item-title">COLLECTION</h4>
            <p className="collection__item-name">Product description</p>
            <p className="collection__item-price">PRICE EUR</p>
          </div>
          <div className="collection__item">
            <div
              className="collection__item-photo-container"
              style={{ backgroundImage: `url(${sampleImg})` }}
            ></div>
            <h4 className="collection__item-title">COLLECTION</h4>
            <p className="collection__item-name">Product description</p>
            <p className="collection__item-price">PRICE EUR</p>
          </div>
          <div className="collection__item">
            <div
              className="collection__item-photo-container"
              style={{ backgroundImage: `url(${sampleImg})` }}
            ></div>
            <h4 className="collection__item-title">COLLECTION</h4>
            <p className="collection__item-name">Product description</p>
            <p className="collection__item-price">PRICE EUR</p>
          </div>
          <div className="collection__item">
            <div
              className="collection__item-photo-container"
              style={{ backgroundImage: `url(${sampleImg})` }}
            ></div>
            <h4 className="collection__item-title">COLLECTION</h4>
            <p className="collection__item-name">Product description</p>
            <p className="collection__item-price">PRICE EUR</p>
          </div>
          <div className="collection__item">
            <div
              className="collection__item-photo-container"
              style={{ backgroundImage: `url(${sampleImg})` }}
            ></div>
            <h4 className="collection__item-title">COLLECTION</h4>
            <p className="collection__item-name">Product description</p>
            <p className="collection__item-price">PRICE EUR</p>
          </div>
          <div className="collection__item">
            <div
              className="collection__item-photo-container"
              style={{ backgroundImage: `url(${sampleImg})` }}
            ></div>
            <h4 className="collection__item-title">COLLECTION</h4>
            <p className="collection__item-name">Product description</p>
            <p className="collection__item-price">PRICE EUR</p>
          </div>
          <div className="collection__item">
            <div
              className="collection__item-photo-container"
              style={{ backgroundImage: `url(${sampleImg})` }}
            ></div>
            <h4 className="collection__item-title">COLLECTION</h4>
            <p className="collection__item-name">Product description</p>
            <p className="collection__item-price">PRICE EUR</p>
          </div>
          <button className="transparent__btn -greybtn">LOAD MORE</button>
        </div>
      </div>
      <div
        className="banner2__container"
        style={{ backgroundImage: `url(${banner2})` }}
      >
        <div className="banner2__content">
          <h3 className="banner2__title">SHOPING WITHOUT LIMITS</h3>
          <p className="banner2__text">
            You can choose the best option for you, and it does not matter
            whether you are in Prague or San Francisco. We will deliver your
            purchase anywhere!
          </p>
          <button className="transparent__btn">SHOP NOW</button>
        </div>
      </div>
      <div className="single-container">
        <h3 className="single-container__title">Featured Items</h3>
        <div className="single-container__btn-container">
           <button className="btn__arrow btn__arrow-left">
          <svg className="btn__svg"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.45624 1.3999L1.79956 7.05658L7.45624 12.7133"
              stroke="#828282"
              stroke-width="1.5"
            />
          </svg>
        </button>
        <button className="btn__arrow btn__arrow-right">
          <svg className="btn__svg"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.45624 1.3999L1.79956 7.05658L7.45624 12.7133"
              stroke="#828282"
              stroke-width="1.5"
            />
          </svg>
        </button>
        </div>
        <div className="single-container__itemList">
          <div className="single-container__item">
            <div
              className="collection__item-photo-container"
              style={{ backgroundImage: `url(${sampleImg})` }}
            ></div>
            <h4 className="collection__item-title">COLLECTION</h4>
            <p className="collection__item-name">Product description</p>
            <p className="collection__item-price">PRICE EUR</p>
          </div>
          <div className="single-container__item">
            <div
              className="collection__item-photo-container"
              style={{ backgroundImage: `url(${sampleImg})` }}
            ></div>
            <h4 className="collection__item-title">COLLECTION</h4>
            <p className="collection__item-name">Product description</p>
            <p className="collection__item-price">PRICE EUR</p>
          </div>
          <div className="single-container__item">
            <div
              className="collection__item-photo-container"
              style={{ backgroundImage: `url(${sampleImg})` }}
            ></div>
            <h4 className="collection__item-title">COLLECTION</h4>
            <p className="collection__item-name">Product description</p>
            <p className="collection__item-price">PRICE EUR</p>
          </div>
          <div className="single-container__item">
            <div
              className="collection__item-photo-container"
              style={{ backgroundImage: `url(${sampleImg})` }}
            ></div>
            <h4 className="collection__item-title">COLLECTION</h4>
            <p className="collection__item-name">Product description</p>
            <p className="collection__item-price">PRICE EUR</p>
          </div>
          <div className="single-container__item">
            <div
              className="collection__item-photo-container"
              style={{ backgroundImage: `url(${sampleImg})` }}
            ></div>
            <h4 className="collection__item-title">COLLECTION</h4>
            <p className="collection__item-name">Product description</p>
            <p className="collection__item-price">PRICE EUR</p>
          </div>
          <div className="single-container__item">
            <div
              className="collection__item-photo-container"
              style={{ backgroundImage: `url(${sampleImg})` }}
            ></div>
            <h4 className="collection__item-title">COLLECTION</h4>
            <p className="collection__item-name">Product description</p>
            <p className="collection__item-price">PRICE EUR</p>
          </div>
          <div className="single-container__item">
            <div
              className="collection__item-photo-container"
              style={{ backgroundImage: `url(${sampleImg})` }}
            ></div>
            <h4 className="collection__item-title">COLLECTION</h4>
            <p className="collection__item-name">Product description</p>
            <p className="collection__item-price">PRICE EUR</p>
          </div>
          <div className="single-container__item">
            <div
              className="collection__item-photo-container"
              style={{ backgroundImage: `url(${sampleImg})` }}
            ></div>
            <h4 className="collection__item-title">COLLECTION</h4>
            <p className="collection__item-name">Product description</p>
            <p className="collection__item-price">PRICE EUR</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
