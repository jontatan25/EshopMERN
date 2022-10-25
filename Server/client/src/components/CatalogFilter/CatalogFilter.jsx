import React, { useState } from "react";
import "./style.css"

const CatalogFilter = ({setFilteredProducts,products}) => {
  const [showBrand, setShowBrand] = useState(false);
  const [showSale, setShowSale] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [price, setPrice] = useState("150");

  const [brandFilters, setBrandFilters] = useState([
    { name: "burberry", status: false },
    { name: "dior", status: false },
    { name: "fendi", status: false },
    { name: "versace", status: false },
    { name: "gucci", status: false },
    { name: "armani", status: false },
  ]);

  const [saleFilters, setsaleFilters] = useState([
    { name: "30%off", status: false },
    { name: "40%off", status: false },
  ]);
  const [colorFilters, setColorFilters] = useState([
    { name: "black", status: false },
    { name: "white", status: false },
    { name: "blue", status: false },
    { name: "pink", status: false },
    { name: "purple", status: false },
  ]);

  const getFilteredProducts = (filtersToApply, propertyToFilter) => {
    const filteredProductsArray = [];

    for (let index = 0; index < filtersToApply.length; index++) {
      const activeFilter = filtersToApply[index];
      let propertyToFilterFromActive = null;
      //   promo is in lowercase in DB
      if (propertyToFilter === "promo") {
        propertyToFilterFromActive = activeFilter.name;
      } else {
        propertyToFilterFromActive = activeFilter.name.toUpperCase();
      }
      for (
        let productIndex = 0;
        productIndex < products.length;
        productIndex++
      ) {
        const product = products[productIndex];
        const propertyToFilterFromItem = product[propertyToFilter];
        if (propertyToFilterFromItem === propertyToFilterFromActive) {
          filteredProductsArray.push(product);
        }
      }
    }
    return filteredProductsArray;
  };

  const getActiveFilters = (allFilters) => {
    return allFilters.filter((filter) => filter.status === true);
  };
  const updateAndFilter = (
    stateWithFilters,
    valueInLowerCase,
    itemProperty
  ) => {
    const objIndex = stateWithFilters.findIndex(
      (filter) => filter.name === valueInLowerCase
    );
    const updatedBrandFilters = stateWithFilters;
    updatedBrandFilters[objIndex].status =
      !updatedBrandFilters[objIndex].status;
    const brandFilterUpdate = getActiveFilters(updatedBrandFilters);
    const newItems = getFilteredProducts(brandFilterUpdate, itemProperty);
    return newItems;
  };

  let filteredProductsBrand = [];
  let filteredProductsSale = [];
  let filteredProductsColor = [];
  let filteredProductsPrice = [];

  const toogleFilter = (value, itemProperty) => {
    const productsWithFiltersApplied = [];
    const valueInLowerCase = value.toLowerCase();

    if (itemProperty === "brand") {
      const res = updateAndFilter(brandFilters, valueInLowerCase, itemProperty);
      filteredProductsBrand = res;
    } else if (itemProperty === "promo") {
      const res = updateAndFilter(saleFilters, valueInLowerCase, itemProperty);
      filteredProductsSale = res;
    } else if (itemProperty === "color") {
      const res = updateAndFilter(colorFilters, valueInLowerCase, itemProperty);
      filteredProductsColor = res;
    } else if (itemProperty === "price") {
      const res = products.filter((product) => product.price <= value);
      filteredProductsPrice = res;
    }

    // PUSHING FILTERED PRODUCTS FROM CATEGORY TO ARRAY
    for (let i = 0; i < filteredProductsBrand.length; i++) {
      const element = filteredProductsBrand[i];
      const productAlreadyExists = productsWithFiltersApplied.findIndex(
        (product) => product.name === element.name
      );
      if (productAlreadyExists === -1) {
        productsWithFiltersApplied.push(element);
      }
    }

    for (let i = 0; i < filteredProductsSale.length; i++) {
      const element = filteredProductsSale[i];
      const productAlreadyExists = productsWithFiltersApplied.findIndex(
        (product) => product.name === element.name
      );
      if (productAlreadyExists === -1) {
        productsWithFiltersApplied.push(element);
      }
    }
    for (let i = 0; i < filteredProductsColor.length; i++) {
      const element = filteredProductsColor[i];
      const productAlreadyExists = productsWithFiltersApplied.findIndex(
        (product) => product.name === element.name
      );
      if (productAlreadyExists === -1) {
        productsWithFiltersApplied.push(element);
      }
    }
    for (let i = 0; i < filteredProductsPrice.length; i++) {
      const element = filteredProductsPrice[i];
      const productAlreadyExists = productsWithFiltersApplied.findIndex(
        (product) => product.name === element.name
      );
      if (productAlreadyExists === -1) {
        productsWithFiltersApplied.push(element);
      }
    }
    setFilteredProducts(productsWithFiltersApplied);
  };
  return (
    <div className="productsContainer__filter">
      <ul className="productsContainer__list">
        <li>
          <h4 className="productsContainer__listTitle">
            Brand
            <button
              className={
                showBrand
                  ? "productsContainer__btn -minus"
                  : "productsContainer__btn -plus"
              }
              onClick={(e) => {
                e.preventDefault();
                setShowBrand(!showBrand);
              }}
            ></button>
          </h4>
          <form
            className="productsContainer__listTitle-form"
            aria-expanded={!showBrand}
          >
            <label htmlFor="burberry">
              <input
                type="checkbox"
                name="filter"
                id="burberry"
                value="BURBERRY"
                onChange={(e) => toogleFilter(e.target.value, "brand")}
              />
              BURBERRY
              <span></span>
            </label>
            <label htmlFor="dior">
              <input
                type="checkbox"
                name="filter"
                id="dior"
                value="DIOR"
                onChange={(e) => toogleFilter(e.target.value, "brand")}
              />
              DIOR
              <span></span>
            </label>
            <label htmlFor="fendi">
              <input
                type="checkbox"
                name="filter"
                id="fendi"
                value="FENDI"
                onChange={(e) => toogleFilter(e.target.value, "brand")}
              />
              FENDI
              <span></span>
            </label>
            <label htmlFor="versace">
              <input
                type="checkbox"
                name="filter"
                id="versace"
                value="VERSACE"
                onChange={(e) => toogleFilter(e.target.value, "brand")}
              />
              VERSACE
              <span></span>
            </label>
            <label htmlFor="gucci">
              <input
                type="checkbox"
                name="filter"
                id="gucci"
                value="GUCCI"
                onChange={(e) => toogleFilter(e.target.value, "brand")}
              />
              GUCCI
              <span></span>
            </label>
            <label htmlFor="armani">
              <input
                type="checkbox"
                name="filter"
                id="armani"
                value="ARMANI"
                onChange={(e) => toogleFilter(e.target.value, "brand")}
              />
              ARMANI
              <span></span>
            </label>
          </form>
        </li>
        <li className="productsContainer__listFilterName">
          <h4 className="productsContainer__listTitle">
            Sale
            <button
              className={
                showSale
                  ? "productsContainer__btn -minus"
                  : "productsContainer__btn -plus"
              }
              onClick={(e) => {
                e.preventDefault();
                setShowSale(!showSale);
              }}
            ></button>
          </h4>
          <form
            className="productsContainer__listTitle-form"
            aria-expanded={!showSale}
          >
            <label htmlFor="off30">
              <input
                type="checkbox"
                name="filter"
                id="off30"
                value="30%OFF"
                onChange={(e) => toogleFilter(e.target.value, "promo")}
              />
              30% OFF
              <span></span>
            </label>
            <label htmlFor="off40">
              <input
                type="checkbox"
                name="filter"
                id="off40"
                value="40%OFF"
                onChange={(e) => toogleFilter(e.target.value, "promo")}
              />
              40% OFF
              <span></span>
            </label>
          </form>
        </li>
        <li className="productsContainer__listFilterName">
          <h4 className="productsContainer__listTitle">
            Color
            <button
              className={
                showColor
                  ? "productsContainer__btn -minus"
                  : "productsContainer__btn -plus"
              }
              onClick={(e) => {
                e.preventDefault();
                setShowColor(!showColor);
              }}
            ></button>
          </h4>
          <form
            className="productsContainer__listTitle-form"
            aria-expanded={!showColor}
          >
            <label htmlFor="blackColor">
              <input
                type="checkbox"
                name="filter"
                id="blackColor"
                value="black"
                onChange={(e) => toogleFilter(e.target.value, "color")}
              />BLACK
              <span></span>
            </label>
            <label htmlFor="whiteColor">
              <input
                type="checkbox"
                name="filter"
                id="whiteColor"
                value="white"
                onChange={(e) => toogleFilter(e.target.value, "color")}
              />
              WHITE
              <span></span>
            </label>
            <label htmlFor="blueColor">
              <input
                type="checkbox"
                name="filter"
                id="blueColor"
                value="blue"
                onChange={(e) => toogleFilter(e.target.value, "color")}
              />
              BLUE
              <span></span>
            </label>
            <label htmlFor="pinkColor">
              <input
                type="checkbox"
                name="filter"
                id="pinkColor"
                value="pink"
                onChange={(e) => toogleFilter(e.target.value, "color")}
              />
              PINK
              <span></span>
            </label>
            <label htmlFor="purpleColor">
              <input
                type="checkbox"
                name="filter"
                id="purpleColor"
                value="purple"
                onChange={(e) => toogleFilter(e.target.value, "color")}
              />
              PURPLE
              <span></span>
            </label>
          </form>
        </li>
        <li className="productsContainer__listFilterName">
          <h4 className="productsContainer__listTitle">
            Price Range
            <button
              className={
                showPrice
                  ? "productsContainer__btn -minus"
                  : "productsContainer__btn -plus"
              }
              onClick={(e) => {
                e.preventDefault();
                setShowPrice(!showPrice);
              }}
            ></button>
          </h4>
          <form
            className="productsContainer__listTitle-form"
            aria-expanded={!showPrice}
          >
            <label htmlFor="priceRange" id="priceRange">
              <input
                type="range"
                id="priceRange"
                name="volume"
                min="49"
                max="300"
                value={price}
                onInput={(e) => {
                  setPrice(e.target.value);
                }}
                onMouseUp={(e) => {
                  toogleFilter(e.target.value, "price");
                }}
              />
              {price}
              <span></span>
            </label>
          </form>
        </li>
        <li className="productsContainer__listFilterName">
          <h4 className="productsContainer__listTitle">
            About our Dresses
          </h4>
          <p className="productsContainer__listText">Every day we’re gonna be dropping the latest trends to help you nail every Summer sitch. Whether it’s a graduation, your mate's wedding, or just a cute day at the races with the gals, our occasion dresses have got you covered. Not looking for something fancy? No stress. We’ve got day dresses for days (aka bodycon dresses, t-shirt dresses, oversized shirt dresses).</p>
        </li>
      </ul>
    </div>
  );
};

export default CatalogFilter;
