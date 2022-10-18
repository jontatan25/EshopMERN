import { React, useState } from "react";
import "./style.css";

import BtnGrey from "../../stateless/btn-grey/BtnGrey";
import CarouselItem from "../Carouseltem/CarouselItem";

const FilteredItemList = ({ products }) => {

  const [boxHeigth, setBoxHeigth] = useState(932);
  const [boxHeigthCounter, setBoxHeigthCounter] = useState(2);

  const increaseHeigth = () => {
    // box heigth will expand based of the amount of items
    if (boxHeigthCounter < products.length / 4) {
      setBoxHeigth((boxHeigth) => (boxHeigth += 466));
      setBoxHeigthCounter((boxHeigthCounter) => boxHeigthCounter + 1);
    }
  };

  return (
    <div className="collection__container">
      <div className="collection__filter-container">
        <h3 className="filter__title">Shop Some Wear:</h3>
        <ul className="filter__list">
          <li className="filter__list-item">
            <button className="square__btn-empty"></button>BEST SELLERS
          </li>
          <li className="filter__list-item">
            <button className="square__btn-empty"></button>NEW ARRIVALS
          </li>
          <li className="filter__list-item">
            <button className="square__btn-empty"></button>TOP WOMEN
          </li>
          <li className="filter__list-item">
            <button className="square__btn-empty"></button>COLLECTION: SUMMER
          </li>
          <li className="filter__list-item">
            <button className="square__btn-empty"></button>COLLECTION: SPRING
          </li>
          <li className="filter__list-item">
            <button className="square__btn-empty"></button>TRENDING
          </li>
        </ul>
      </div>
      <div className="collection__filter-itemList-container">
        <div
          className={"collection__filter-itemList"}
          style={{ height: `${boxHeigth}px` }}
        >
          {products.map((product) => (
            <CarouselItem
              key={product._id}
              urlPhoto={product.URLPhoto}
              itemTitle={product.category}
              description={product.name}
              price={product.price}
            />
          ))}
        </div>
        <div className="collection__filter-itemList-btn">
          <BtnGrey
            text={"SEE MORE"}
            increaseHeigth={increaseHeigth}
          />
        </div>
      </div>
    </div>
  );
};

export default FilteredItemList;
