import React from "react";
import { Link } from "react-router-dom";
import BtnTransparent from "../../stateless/btn-transparent/BtnTransparent";
import "./style.css";

const Banner2 = ({ bannerImg, title, text, color, btnText, scroll }) => {
  const scrollToProducts = () => {
    window.scrollTo({
      top: 470,
      behavior: "smooth",
    });
  };
  return (
    <>
      {color === "white" ? (
        <div
          className="banner2__container -whiteBanner"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="banner2__content">
            <h3 className="banner2__title -whiteTitle">{title}</h3>
            <p className="banner2__text -whiteText">{text}</p>
            <Link to="/products">
              <BtnTransparent
                text={btnText}
                color={color}
                clickFunction={scrollToProducts}
              />
            </Link>
          </div>
        </div>
      ) : scroll ? (
        <div
          className="banner2__container"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="banner2__content">
            <h3 className="banner2__title">{title}</h3>
            <p className="banner2__text">{text}</p>
            <BtnTransparent text={"SHOP NOW"}  clickFunction={scrollToProducts}/>
          </div>
        </div>
      ) : (
        <div
          className="banner2__container"
          style={{ backgroundImage: `url(${bannerImg})` }}
        >
          <div className="banner2__content">
            <h3 className="banner2__title">{title}</h3>
            <p className="banner2__text">{text}</p>
            <Link to="/products" >
            <BtnTransparent text={"SHOP NOW"} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner2;
