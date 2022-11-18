import { React, useEffect, useState } from "react";
import CarouselItem from "../Carouseltem/CarouselItem";

import "./style.css";

const CarouselSingle = ({ title, products, category, origin }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselMoves, setCarouselMoves] = useState(5);
  const [itemWidth, setItemWidth] = useState(-295.5);
  const [touchPosition, setTouchPosition] = useState(null);

  const updateIndex = (newIndex) => {
    // FILTERING PRODUCTS
    const filtered = products.filter(
      (product) => product.category === category
    );
    // GETTING THE AMOUNT OF MOVEMENTS BASE ON # OF PRODUCTS (5 by defect)
    const getMovements = filtered.length - carouselMoves;

    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex > getMovements) {
      newIndex = getMovements;
    }
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (window.innerWidth > 1024) {
      setCarouselMoves(5);
    } else if (window.innerWidth <= 1024 && window.innerWidth > 769) {
      console.log("Small Scren");
      setCarouselMoves(3);
    } else if (window.innerWidth <= 769 && window.innerWidth > 481) {
      console.log("tablet");
      setCarouselMoves(2);
    } else if (window.innerWidth <= 480) {
      console.log("mobile");
      setCarouselMoves(1);
      setItemWidth(-233.5);
    }
  }, []);

  const handleSwipe = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      updateIndex(activeIndex + 1);
    }

    if (diff < -5) {
      updateIndex(activeIndex - 1);
    }

    setTouchPosition(null);
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
        onTouchStart={handleSwipe}
        onTouchMove={handleTouchMove}
        style={{ transform: `translate(${activeIndex * itemWidth}px)` }}
      >
        {products &&
          products
            .filter((product) => product.category === category)
            .map((product) => (
              <CarouselItem
                key={product._id}
                product={product}
                origin={origin}
              />
            ))}
      </div>
    </div>
  );
};

export default CarouselSingle;
