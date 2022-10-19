import React from "react";
import "./style.css";

import BtnGrey from "../../stateless/btn-grey/BtnGrey";
import CarouselItem from "../Carouseltem/CarouselItem";
import { useState,useEffect,useRef } from "react";

const FilteredItemList = ({ products }) => {
  const [boxHeigth, setBoxHeigth] = useState(932);
  const [boxHeigthCounter, setBoxHeigthCounter] = useState(2);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const handleChange = (e) => { 
    setNewFilter(e.target.value)
  }; 

  const increaseHeigth = () => {
    // box heigth will expand based of the amount of items
    if (boxHeigthCounter < products.length / 4) {
      setBoxHeigth((boxHeigth) => (boxHeigth += 466));
      setBoxHeigthCounter((boxHeigthCounter) => boxHeigthCounter + 1);
    }
  };

  useEffect(() => {
    const filterItems = () => {
      const filtered = products.filter(
        (product) => product.category == newFilter
      );
      setFilteredProducts(filtered);
    };
    filterItems();
  }, [newFilter]);

  return (
    <div className="collection__container">
      <div className="collection__filter-container">
        <h3 className="filter__title">Shop Some Wear:</h3>
        <form >
          <label htmlFor="filter__all" className="filter__check">
            <input 
              type="radio"
              name="filter"
              id="filter__all"
              className="filter__input"
              value = ""
              onChange={handleChange}
            />
            All
          </label>
          <label htmlFor="filter__newArrivals" className="filter__check">
            <input
              type="radio"
              name="filter"
              id="filter__newArrivals"
              className="filter__input"
              value = "NEW-ARRIVALS"
              onChange={handleChange}
            />
            NEW ARRIVALS
          </label>
          <label htmlFor="filter__topWomen" className="filter__check">
            <input
              type="radio"
              name="filter"
              id="filter__topWomen"
              className="filter__input"
              value = "TOP-WOMEN"
              onChange={handleChange}
            />
            TOP WOMEN
          </label>
          <label htmlFor="filter__bestSeller" className="filter__check">
            <input
              type="radio"
              name="filter"
              id="filter__bestSeller"
              className="filter__input"
              value = "BEST-SELLER"
              onChange={handleChange}
            />
            BEST SELLERS
          </label>
          <label htmlFor="filter__summer" className="filter__check">
            <input
              type="radio"
              name="filter"
              id="filter__summer"
              className="filter__input"
              value = "SUMMER"
              onChange={handleChange}
            />
            SUMMER
          </label>
          <label htmlFor="filter__trending" className="filter__check">
            <input
              type="radio"
              name="filter"
              id="filter__trending"
              className="filter__input"
              value = "SPRING"
              onChange={handleChange}
            />
            SPRING
          </label>
          <label htmlFor="filter__trending" className="filter__check">
            <input
              type="radio"
              name="filter"
              id="filter__trending"
              className="filter__input"
              value = "TRENDING"
              onChange={handleChange}
            />
            TRENDING
          </label>
        </form>
   
      </div>
      <div className="collection__filter-itemList-container">
        <div
          className={"collection__filter-itemList"}
          style={{ height: `${boxHeigth}px` }}
          key={Math.random()}
        >
          {filteredProducts.length == 0
            ? products.map((product) => (
                <CarouselItem
                  key={product._id}
                  urlPhoto={product.URLPhoto}
                  itemTitle={product.category}
                  description={product.name}
                  price={product.price}
                />
              ))
            : filteredProducts.map((product) => (
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
          <BtnGrey text={"SEE MORE"} increaseHeigth={increaseHeigth} />
        </div>
      </div>
    </div>
  );
};

export default FilteredItemList;
