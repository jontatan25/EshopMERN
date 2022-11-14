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
  const [isMobile, setIsMobile] = useState(false);

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
    if (window.innerWidth <= 480) {
      setIsMobile(true);
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
        >
          <svg
            width="125"
            height="25"
            viewBox="0 0 92 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M68.5395 12.6094L65.6865 7.60412C66.9502 6.99902 67.755 5.72312 67.7563 4.32202C67.7563 2.30801 66.1172 0.669375 64.103 0.669375H58.0012V12.6089H60.7148V7.97467H62.8744L65.5158 12.6094H68.5395ZM60.6702 5.66982V2.97996H63.5946L63.5834 2.98456C64.4735 3.03234 65.0407 3.54831 65.0407 4.32754C65.0407 5.09827 64.4331 5.63835 63.5273 5.67051L60.6702 5.66982ZM46.9197 12.6094V0.669375H55.8407V2.94757H49.7065V5.33626H55.0849V7.66523H49.7065V10.2122H56.1441V12.6094H46.9197ZM34.1961 12.6094L31.3431 7.60412C32.6066 6.99902 33.4114 5.72289 33.4125 4.32202C33.4125 2.30801 31.7739 0.669375 29.7599 0.669375H23.6577V12.6089H26.3714V7.97467H28.5317L31.1727 12.6094H34.1961ZM26.3262 5.66982V2.97996H29.251L29.2395 2.98456C30.1297 3.03234 30.6974 3.54831 30.6974 4.32754C30.6974 5.09827 30.0895 5.63835 29.1835 5.67051L26.3262 5.66982ZM16.4263 12.9037C19.691 12.9037 21.6407 11.0266 21.6407 7.88301V0.678107H18.8541V7.6967C18.8541 9.39644 17.9692 10.3714 16.4266 10.3714H16.425C14.8823 10.3714 13.9979 9.39667 13.9979 7.6967V0.678107H11.2102V7.88346C11.2102 11.0268 13.1599 12.9039 16.425 12.9039L16.4263 12.9037ZM7.56557 5.9965C9.17365 6.54485 9.95748 7.91287 9.95748 9.23196C9.95748 11.0904 8.44841 12.6034 6.59153 12.6094H0V0.668457H6.07097C7.65126 0.68316 8.92532 1.96756 8.92716 3.54807C8.92922 4.54509 8.41372 5.47226 7.56557 5.9965ZM2.73558 10.3815H5.78221C6.73993 10.3815 7.24097 9.66729 7.24097 8.96111C7.24097 8.39231 6.78864 7.59148 5.78221 7.59148H2.73558V10.3815ZM4.96645 5.36429C5.66803 5.36429 6.21846 4.82237 6.21846 4.13043C6.21846 3.46147 5.64414 2.89657 4.96599 2.89657H2.73558V5.36429H4.96645Z"
              fill="#3F3F3F"
            />
            <path
              d="M43.0302 5.9933C44.6383 6.5412 45.4221 7.90968 45.4221 9.22877C45.4221 11.0875 43.913 12.5998 42.0561 12.6062L35.4648 12.6057V0.665267L41.5349 0.665039C43.1156 0.679971 44.3897 1.9646 44.3915 3.54534C44.3934 4.54235 43.8781 5.46884 43.03 5.99284L43.0302 5.9933ZM38.2002 10.3783H41.2466C42.2043 10.3783 42.7053 9.6641 42.7053 8.95792C42.7053 8.38935 42.2526 7.58829 41.2466 7.58829H38.2002V10.3783ZM40.4304 5.3611C41.1329 5.3611 41.6833 4.81917 41.6833 4.12724C41.6833 3.45828 41.109 2.89338 40.4304 2.89338H38.2002V5.3611H40.4304V5.3611Z"
              fill="#3F3F3F"
            />
            <path
              d="M80.3468 12.6085L77.4938 7.6032C78.7573 6.9981 79.5618 5.72197 79.563 4.3211C79.563 2.30709 77.9246 0.668457 75.9106 0.668457H69.8086V12.608H72.5223V7.97374H74.6825L77.3234 12.6085H80.3468ZM72.4769 5.6689V2.97904H75.4017L75.3902 2.98364C76.2804 3.03142 76.8483 3.54739 76.8483 4.32662C76.8483 5.09735 76.2405 5.63743 75.3342 5.66959L72.4769 5.6689ZM84.3119 12.6085V7.7431L79.5752 0.668457H83.0548L85.7814 4.77343L88.5198 0.668457H91.9994L87.2512 7.7431V12.6085H84.3119Z"
              fill="#3F3F3F"
            />
          </svg>
        </Link>
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
          <div className="promotion__promo-three promo-three-mobileOnly">
            <div className="promotion__promo-three-container">
              <h3 className="promo__title-three">UP TO 40% OFF</h3>
              <p className="promo__text-three">
                Special offers and great deals
              </p>
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
        <div className="promotion__promo-three">
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
        <FilteredItemList loading={loading} products={products} error={error} />
      )}

      <Banner2
        className="promo__banner"
        bannerImg={banner2}
        title={"SHOPING WITHOUT LIMITS"}
        text={
          !isMobile
            ? "You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!"
            : "Choose the best option for you, and it does not matter whether you are."
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
