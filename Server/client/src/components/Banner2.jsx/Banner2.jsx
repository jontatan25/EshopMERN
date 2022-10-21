import React from "react";
import BtnTransparent from "../../stateless/btn-transparent/BtnTransparent";
import "./style.css"

const Banner2 = ({bannerImg ,title , text, btnText}) => {
  return (
    <div
      className="banner2__container"
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="banner2__content">
        <h3 className="banner2__title">{title}</h3>
        <p className="banner2__text">
          {text}
        </p>
       <BtnTransparent text = {"SHOP NOW"}/>
      </div>
    </div>
  );
};

export default Banner2;
