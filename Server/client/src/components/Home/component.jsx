import React from "react";
import "./style.css";
import carrouselBackground from "../../images/carrousel/carrousel-background.jpg";
import carouselSign from "../../../src/images/carrousel/summerSale.svg";

const HomeContainer = () => {
  return (
    <div
      className="homeContainer"
      style={{ backgroundImage: `url(${carrouselBackground})` }}
    >
      <div className="carousel__container">
        <div className="carousel__sign">
          <div className="carousel__sign-text-container">
            <img className= "carousel__sign-text" src={carouselSign} alt="" />
          </div>
          <button className="carousel__sign-btn">SHOP NOW</button>
        </div>
        <div className="carousel__images"></div>
      </div>
    </div>
  );
};

export default HomeContainer;
