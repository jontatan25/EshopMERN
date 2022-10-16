import { React, useState } from "react";
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

import banner2 from "../../images/banner/banner2-background.jpg";
import banner3 from "../../images/banner/banner3-background.jpg";

import btnCheck from "../../images/btn/check.svg";
import Footer from "../Footer/component.jsx";
import BtnTransparent from "../../stateless/btn-transparent/BtnTransparent";

import FilteredItemList from "../filteredItemList/FilteredItemList";
import CarouselSingle from "../CarouselSingle/CarouselSingle";

const HomeContainer = () => {
  const [isActive, setIsActive] = useState(false);

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
            <BtnTransparent text={"SHOP NOW"} />
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
              <BtnTransparent text={"SEE OFFERS"} />
            </div>
          </div>
          <div
            className="promotion__promo-two"
            style={{ backgroundImage: `url(${smallPromo2})` }}
          >
            <div className="promotion__promo-two-container">
              <h3 className="promo__title-two">BRAND NEW STYLE</h3>
              <p className="promo__text-two">Popular clothing brands</p>
              <BtnTransparent text={"SEE OFFERS"} />
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
            <BtnTransparent text={"SHOP NOW"} />
          </div>
        </div>
      </div>
     <FilteredItemList/>
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
     <CarouselSingle title="Featured Items"/>
     <CarouselSingle title="Most Popular"/>
      <div
        className="banner3__container"
        style={{ backgroundImage: `url(${banner3})` }}
      >
        <div className="banner3__content-container">
          <h3 className="content__title">EXPLORE THE BEST OF YOU</h3>
          <p className="content__text">
            You can choose the best option for you, and it does not matter
            whether you are in Prague or San Francisco.
          </p>
          <button className="transparent__btn">SHOP NOW</button>
        </div>
      </div>
      <div className="blog__container">
        <h3 className="blog__title">Blog</h3>
        <div className="blog__container-flex">
          <div className="blog__article-item">
            <h4 className="blog__article-type">ARTICLE</h4>
            <h5 className="article__title">
              Exactly What To Wear To Every Type Of Wedding This Summer
            </h5>
            <p className="article__text">
              A large part of the business here is building up the "experience".
              Double-page spreads in magazines. Ads on TV. Product placement and
              sponsorship in golf tournaments, tennis matches and sailing
              competitions. All of this builds up your perception of the brand -
              and additionally, it costs money.
            </p>
            <span className="article__details">21 January 2018 by guido</span>
          </div>
          <div className="blog__article-item">
            <h4 className="blog__article-type">ARTICLE</h4>
            <h5 className="article__title">
              Exactly What To Wear To Every Type Of Wedding This Summer
            </h5>
            <p className="article__text">
              A large part of the business here is building up the "experience".
              Double-page spreads in magazines. Ads on TV. Product placement and
              sponsorship in golf tournaments, tennis matches and sailing
              competitions. All of this builds up your perception of the brand -
              and additionally, it costs money.
            </p>
            <span className="article__details">21 January 2018 by guido</span>
          </div>
          <div className="blog__article-item">
            <h4 className="blog__article-type">ARTICLE</h4>
            <h5 className="article__title">
              Exactly What To Wear To Every Type Of Wedding This Summer
            </h5>
            <p className="article__text">
              A large part of the business here is building up the "experience".
              Double-page spreads in magazines. Ads on TV. Product placement and
              sponsorship in golf tournaments, tennis matches and sailing
              competitions. All of this builds up your perception of the brand -
              and additionally, it costs money.
            </p>
            <span className="article__details">21 January 2018 by guido</span>
          </div>
          <div className="blog__article-item">
            <h4 className="blog__article-type">ARTICLE</h4>
            <h5 className="article__title">
              Exactly What To Wear To Every Type Of Wedding This Summer
            </h5>
            <p className="article__text">
              A large part of the business here is building up the "experience".
              Double-page spreads in magazines. Ads on TV. Product placement and
              sponsorship in golf tournaments, tennis matches and sailing
              competitions. All of this builds up your perception of the brand -
              and additionally, it costs money.
            </p>
            <span className="article__details">21 January 2018 by guido</span>
          </div>
        </div>
      </div>
      <ul className="advantages__list">
        <li className="advangates__list-item">
          <img className="advangates__check" src={btnCheck}></img> Duties and
          Taxes Guaranteed
        </li>
        <li className="advangates__list-item">
          <img className="advangates__check" src={btnCheck}></img>Free Express
          Shipping
        </li>
        <li className="advangates__list-item">
          <img className="advangates__check" src={btnCheck}></img>Customer Love
        </li>
        <li className="advangates__list-item">
          <img className="advangates__check" src={btnCheck}></img>Easy Returns
        </li>
        <li className="advangates__list-item">
          <img className="advangates__check" src={btnCheck}></img>Secure Payment
        </li>
      </ul>
      <Footer />
    </>
  );
};

export default HomeContainer;
