import { React, useState } from "react";
import sampleImg from "../../images/productSample.jpg";

import "./style.css";

const CarouselSingle = ({title}) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const updateIndex = (newIndex) => {
    if (newIndex < 1) {
      newIndex = 1;
    } else if (newIndex >= 6) {
      newIndex = 5;
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
        <div className="single-container__item">
          <div
            className="collection__item-photo-container"
            style={{ backgroundImage: `url(${sampleImg})` }}
          ></div>
          <h4 className="collection__item-title">COLLECTION</h4>
          <p className="collection__item-name">Product description 1</p>
          <p className="collection__item-price">PRICE EUR</p>
        </div>
        <div className="single-container__item">
          <div
            className="collection__item-photo-container"
            style={{ backgroundImage: `url(${sampleImg})` }}
          ></div>
          <h4 className="collection__item-title">COLLECTION</h4>
          <p className="collection__item-name">Product description 2</p>
          <p className="collection__item-price">PRICE EUR</p>
        </div>
        <div className="single-container__item">
          <div
            className="collection__item-photo-container"
            style={{ backgroundImage: `url(${sampleImg})` }}
          ></div>
          <h4 className="collection__item-title">COLLECTION</h4>
          <p className="collection__item-name">Product description 3</p>
          <p className="collection__item-price">PRICE EUR</p>
        </div>
        <div className="single-container__item">
          <div
            className="collection__item-photo-container"
            style={{ backgroundImage: `url(${sampleImg})` }}
          ></div>
          <h4 className="collection__item-title">COLLECTION</h4>
          <p className="collection__item-name">Product description 4</p>
          <p className="collection__item-price">PRICE EUR</p>
        </div>
        <div className="single-container__item">
          <div
            className="collection__item-photo-container"
            style={{ backgroundImage: `url(${sampleImg})` }}
          ></div>
          <h4 className="collection__item-title">COLLECTION</h4>
          <p className="collection__item-name">Product description 5</p>
          <p className="collection__item-price">PRICE EUR</p>
        </div>
        <div className="single-container__item">
          <div
            className="collection__item-photo-container"
            style={{ backgroundImage: `url(${sampleImg})` }}
          ></div>
          <h4 className="collection__item-title">COLLECTION</h4>
          <p className="collection__item-name">Product description 6</p>
          <p className="collection__item-price">PRICE EUR</p>
        </div>
        <div className="single-container__item">
          <div
            className="collection__item-photo-container"
            style={{ backgroundImage: `url(${sampleImg})` }}
          ></div>
          <h4 className="collection__item-title">COLLECTION</h4>
          <p className="collection__item-name">Product description 7</p>
          <p className="collection__item-price">PRICE EUR</p>
        </div>
        <div className="single-container__item">
          <div
            className="collection__item-photo-container"
            style={{ backgroundImage: `url(${sampleImg})` }}
          ></div>
          <h4 className="collection__item-title">COLLECTION</h4>
          <p className="collection__item-name">Product description 8</p>
          <p className="collection__item-price">PRICE EUR</p>
        </div>
        <div className="single-container__item">
          <div
            className="collection__item-photo-container"
            style={{ backgroundImage: `url(${sampleImg})` }}
          ></div>
          <h4 className="collection__item-title">COLLECTION</h4>
          <p className="collection__item-name">Product description 8</p>
          <p className="collection__item-price">PRICE EUR</p>
        </div>
        <div className="single-container__item">
          <div
            className="collection__item-photo-container"
            style={{ backgroundImage: `url(${sampleImg})` }}
          ></div>
          <h4 className="collection__item-title">COLLECTION</h4>
          <p className="collection__item-name">Product description 8</p>
          <p className="collection__item-price">PRICE EUR</p>
        </div>
        <div className="single-container__item">
          <div
            className="collection__item-photo-container"
            style={{ backgroundImage: `url(${sampleImg})` }}
          ></div>
          <h4 className="collection__item-title">COLLECTION</h4>
          <p className="collection__item-name">Product description 8</p>
          <p className="collection__item-price">PRICE EUR</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselSingle;
