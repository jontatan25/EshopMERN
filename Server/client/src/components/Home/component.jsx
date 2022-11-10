import { React, useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

import carrouselBackground from "../../images/carrousel/carrousel-background.jpg";
import smallImage from "../../images/carrousel/smallImg.jpg";
import bigImage from "../../images/carrousel/bigImage.jpg";
import smallPromo1 from "../../images/promo/small1.jpg";
import smallPromo2 from "../../images/promo/small2.jpg";

import banner2 from "../../images/banner/banner2-background.jpg";
import banner3 from "../../images/banner/banner3-background.jpg";

import BtnTransparent from "../../stateless/btn-transparent/BtnTransparent";

import FilteredItemList from "../filteredItemList/FilteredItemList";
import CarouselSingle from "../CarouselSingle/CarouselSingle";

import Banner2 from "../Banner2.jsx/Banner2";

import { getProducts } from "../../service/index";
import { useCartContext } from "../CartContext/context";

const HomeContainer = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [isMobile,setIsMobile] = useState(false)

  const { setLoggedIn } = useCartContext();

  useEffect(() => {
    const initProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    initProducts();
  }, []);

  const getUser = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoggedIn(true);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  useEffect(() => {
    if (window.innerWidth <= 480){
      setIsMobile(true)
    }
  }, []);


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
            <Link to="/products?filterProducts=30%off">
              <BtnTransparent text={"SHOP NOW"} />
            </Link>
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
        <Link
          to="/products?filterProducts=chanel"
          className="banner__icon banner__icon-chanel"
        ></Link>
        <Link
          to="/products?filterProducts=burberry"
          className="banner__icon banner__icon-burberry"
        ></Link>
        <Link
          to="/products?filterProducts=dior"
          className="banner__icon banner__icon-dior"
        ></Link>
        <Link
          to="/products?filterProducts=fendi"
          className="banner__icon banner__icon-fendi"
        ></Link>
        <Link
          to="/products?filterProducts=versace"
          className="banner__icon banner__icon-versace"
        ></Link>
        <Link
          to="/products?filterProducts=gucci"
          className="banner__icon banner__icon-gucci"
        ></Link>
        <Link
          to="/products?filterProducts=armani"
          className="banner__icon banner__icon-armani"
        ></Link>
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
              <Link to="/products">
                <BtnTransparent text={"SEE OFFERS"} />
              </Link>
            </div>
          </div>
          <div
          className="promotion__promo-three promo-three-mobileOnly"
        >
          <div className="promotion__promo-three-container">
            <h3 className="promo__title-three">UP TO 40% OFF</h3>
            <p className="promo__text-three">Special offers and great deals</p>
            <Link to="/products?filterProducts=40%off">
              <BtnTransparent text={"SHOP NOW"} />
            </Link>
          </div>
        </div>
          
     
          <div
            className="promotion__promo-two"
            style={{ backgroundImage: `url(${smallPromo2})` }}
          >
            <div className="promotion__promo-two-container">
              <h3 className="promo__title-two">BRAND NEW STYLE</h3>
              <p className="promo__text-two">Popular clothing brands</p>
              <Link to="/products?filterProducts=showbrands">
                <BtnTransparent text={"SEE OFFERS"} />
              </Link>
            </div>
          </div>
        </div>
        <div
          className="promotion__promo-three"
        >
          <div className="promotion__promo-three-container">
            <h3 className="promo__title-three">UP TO 40% OFF</h3>
            <p className="promo__text-three">Special offers and great deals</p>
            <Link to="/products?filterProducts=40%off">
              <BtnTransparent text={"SHOP NOW"} />
            </Link>
          </div>
        </div>
      </div>
      {loading ? (
        <span>Loading data...</span>
      ) : (
        <FilteredItemList loading={loading} products={products} error={error}/>
      )}
      
      <Banner2 className="promo__banner"
        bannerImg={banner2}
        title={"SHOPING WITHOUT LIMITS"}
        text={ !isMobile ? 
          "You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!"
        :
        "Choose the best option for you, and it does not matter whether you are."
        }
        btnText="SHOP NOW"
      />
      <CarouselSingle
        products={products}
        title="Featured Items"
        category={"NEW-ARRIVALS"}
      />
      <CarouselSingle
        products={products}
        title="Most Popular"
        category={"TRENDING"}
      />
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
          <Link to="/products?filterProducts=showcolors">
            <BtnTransparent text="SHOP NOW" />
          </Link>
        </div>
      </div>
      <div className="blog__container">
        <h3 className="blog__title">Blog</h3>
        <div className="blog__container-flex">
          <Link to="/blog" className="blog__article-item">
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
          </Link>
          <Link to="/blog" className="blog__article-item">
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
          </Link>
          <Link to="/blog" className="blog__article-item">
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
          </Link>
          <Link to="/blog" className="blog__article-item">
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
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeContainer;
