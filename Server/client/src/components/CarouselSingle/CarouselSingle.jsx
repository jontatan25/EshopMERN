import { React, useState } from "react";
import CarouselItem from "../Carouseltem/CarouselItem";

import "./style.css";

const CarouselSingle = ({ title, products, category }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    // FILTERING PRODUCTS
    const filtered = products.filter(
      (product) => product.category === category
    );
    // GETTING THE AMOUNT OF MOVEMENTS BASE ON # OF PRODUCTS
    const getMovements = filtered.length - 5;

    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > getMovements) {
      newIndex = getMovements;
    }
    setActiveIndex(newIndex);
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
        <button
          className="btn__arrow btn__arrow-right"
          onClick={() => {
            updateIndex(activeIndex + 1);
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
      </div>
      <div
        className="single-container__itemList"
        style={{ transform: `translate(${activeIndex * -303}px)` }}
      >
        {products &&
          products
            .filter((product) => product.category === category)
            .map((product) => (
              <CarouselItem
                key={product._id}
                productID = {product._id}
                urlPhoto={product.URLPhoto}
                itemTitle={product.category}
                description={product.name}
                price={product.price}
              />
            ))}
      </div>
    </div>
  );
};

export default CarouselSingle;
