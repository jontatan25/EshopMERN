import { React, useState } from "react";
import "./style.css";

import BtnGrey from "../../stateless/btn-grey/BtnGrey";

import sampleImg from "../../images/productSample.jpg";
import CarouselItem from "../Carouseltem/CarouselItem";

const FilteredItemList = ({ products }) => {
  const [isActive, setIsActive] = useState(true);
  console.log(products);
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
          className={
            isActive
              ? "collection__filter-itemList"
              : "collection__filter-itemList collection__filter-itemList-full"
          }
        >
          {products.map((product) => (
            <CarouselItem
            key = {product._id}
              urlPhoto={product.URLPhoto}
              itemTitle={product.category}
              description={product.name}
              price={product.price}
            />
          ))}
        </div>
        <div className="collection__filter-itemList-btn">
          {isActive ? (
            <BtnGrey
              text={"SEE MORE"}
              activeToogle={setIsActive}
              actualToogle={isActive}
            />
          ) : (
            <BtnGrey
              text={"SEE LESS"}
              activeToogle={setIsActive}
              actualToogle={isActive}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FilteredItemList;
