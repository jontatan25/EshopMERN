import React from "react";
import "./style.css";

import BtnGrey from "../../stateless/btn-grey/BtnGrey";
import CarouselItem from "../Carouseltem/CarouselItem";
import { useState, useEffect } from "react";

const FilteredItemList = ({ loading, products, error }) => {
  const [boxHeight, setBoxHeight] = useState(918);
  const [unitHeight, setUnitHeight] = useState(459);
  const [boxHeightCounter, setBoxHeightCounter] = useState(2);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [newFilter, setNewFilter] = useState("ALL");

  const handleChange = (e) => {
    setNewFilter(e.target.value);
  };

  const increaseHeigth = () => {
    // box heigth will expand based of the amount of items
    if (boxHeightCounter < products.length / 4) {
      setBoxHeight((boxHeight) => (boxHeight += unitHeight));
      setBoxHeightCounter((boxHeightCounter) => boxHeightCounter + 1);
    }
  };

  useEffect(() => {
    const filterItems = () => {
      if (products) {
        const filtered = products.filter(
          (product) => product.category === newFilter
        );
        setFilteredProducts(filtered);
      }
    };
    filterItems();
  }, [newFilter]);

  useEffect(() => {
    if (window.innerWidth < 481) {
      setBoxHeight(828);
      setUnitHeight(414);
    }
  }, []);

  return (
    <div className="collection__container">
      <div className="collection__filter-container">
        <h3 className="filter__title">Shop Some Wear:</h3>
        <form className="filter__form">
          <label htmlFor="check">
            <input
              type="radio"
              name="filter"
              id="check"
              value="ALL"
              onChange={handleChange}
            />
            ALL
            <span></span>
          </label>
          <label htmlFor="filter__newArrivals">
            <input
              type="radio"
              name="filter"
              id="filter__newArrivals"
              value="NEW-ARRIVALS"
              onChange={handleChange}
            />
            NEW ARRIVALS
            <span></span>
          </label>
          <label htmlFor="filter__topWomen">
            <input
              type="radio"
              name="filter"
              id="filter__topWomen"
              value="TOP-WOMEN"
              onChange={handleChange}
            />
            TOP WOMEN
            <span></span>
          </label>
          <label htmlFor="filter__bestSeller">
            <input
              type="radio"
              name="filter"
              id="filter__bestSeller"
              value="BEST-SELLER"
              onChange={handleChange}
            />
            BEST SELLERS
            <span></span>
          </label>
          <label htmlFor="filter__summer">
            <input
              type="radio"
              name="filter"
              id="filter__summer"
              value="SUMMER"
              onChange={handleChange}
            />
            SUMMER
            <span></span>
          </label>
          <label htmlFor="filter__spring">
            <input
              type="radio"
              name="filter"
              id="filter__spring"
              value="SPRING"
              onChange={handleChange}
            />
            SPRING
            <span></span>
          </label>
          <label htmlFor="filter__trending">
            <input
              type="radio"
              name="filter"
              id="filter__trending"
              value="TRENDING"
              onChange={handleChange}
            />
            TRENDING
            <span></span>
          </label>
        </form>
      </div>
      <div className="collection__filter-itemList-container">
        <div
          className={
            ((newFilter !== "ALL") || (boxHeight === 918) || (boxHeight === 858))
              ? "collection__filter-itemList animate"
              : "collection__filter-itemList"
          }
          style={
            filteredProducts.length === 0
              ? { height: `${boxHeight}px` }
              : { height: `${unitHeight}px` }
          }
          key={Math.random()}
        >
          {loading ? (
            <h2>LOADING</h2>
          ) : error ? (
            <h2>Something went Wrong. Try again Later</h2>
          ) : filteredProducts && newFilter !== "ALL" ? (
            filteredProducts.map((product) => (
              <CarouselItem key={product._id} product={product} />
            ))
          ) : (
            products?.map((product) => (
              <CarouselItem key={product._id} product={product} />
            ))
          )}
        </div>
        {newFilter === "ALL" && boxHeight !== 3262 ? (
          <div className="collection__filter-itemList-btn">
            <BtnGrey text={"SEE MORE"} increaseHeigth={increaseHeigth} />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default FilteredItemList;
