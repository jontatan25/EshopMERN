import { React, useState } from "react";
import sampleImg from "../../images/productSample.jpg";
import CarouselItem from "../Carouseltem/CarouselItem";

import "./style.css";

const CarouselSingle = ({title}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= 5) {
      newIndex = 4;
    }
    setActiveIndex(newIndex)
  };
  return (
    <div className="single-container">
      <h3 className="single-container__title">{title}</h3>
      <div className="single-container__btn-container">
        <button
          className="btn__arrow btn__arrow-left"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <svg
            className="btn__svg"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.45624 1.3999L1.79956 7.05658L7.45624 12.7133"
              stroke="#828282"
              strokeWidth="1.5"
            />
          </svg>
        </button>
        <button className="btn__arrow btn__arrow-right" onClick={() => {
            updateIndex(activeIndex + 1);
          }}>
          <svg
            className="btn__svg"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.45624 1.3999L1.79956 7.05658L7.45624 12.7133"
              stroke="#828282"
              strokeWidth="1.5"
            />
          </svg>
        </button>
      </div>
      <div
        className="single-container__itemList"
        style={{ transform: `translate(${activeIndex * -303}px)` }}
      >
        <CarouselItem urlPhoto= {sampleImg} itemTitle = {"COMPONENT"} description = {"Product description 1"} price = {"PRICE EUR"}/>
        <CarouselItem urlPhoto= {sampleImg} itemTitle = {"COMPONENT"} description = {"Product description 2"} price = {"PRICE EUR"}/>
        <CarouselItem urlPhoto= {sampleImg} itemTitle = {"COMPONENT"} description = {"Product description 3"} price = {"PRICE EUR"}/>
        <CarouselItem urlPhoto= {sampleImg} itemTitle = {"COMPONENT"} description = {"Product description 4"} price = {"PRICE EUR"}/>
        <CarouselItem urlPhoto= {sampleImg} itemTitle = {"COMPONENT"} description = {"Product description 5"} price = {"PRICE EUR"}/>
        <CarouselItem urlPhoto= {sampleImg} itemTitle = {"COMPONENT"} description = {"Product description 6"} price = {"PRICE EUR"}/>
        <CarouselItem urlPhoto= {sampleImg} itemTitle = {"COMPONENT"} description = {"Product description 7"} price = {"PRICE EUR"}/>
        <CarouselItem urlPhoto= {sampleImg} itemTitle = {"COMPONENT"} description = {"Product description 8"} price = {"PRICE EUR"}/>
        <CarouselItem urlPhoto= {sampleImg} itemTitle = {"COMPONENT"} description = {"Product description 8"} price = {"PRICE EUR"}/>
      </div>
    </div>
  );
};

export default CarouselSingle;
