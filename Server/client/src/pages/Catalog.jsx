import React from "react";
import { useEffect, useState } from "react";
import Banner2 from "../components/Banner2.jsx/Banner2";
import "./style.css";
import catalogBackground from "../images/banner/catalog-banner1.jpg";
import CarouselItem from "../components/Carouseltem/CarouselItem";
import { getProducts } from "../service/index";

const Catalog = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  const [showBrand, setShowBrand] = useState(false);
  const [showSale, setShowSale] = useState(false);

  const [filteredProducts, setFilteredProducts] = useState("");
  const [newFilter, setNewFilter] = useState("");
  //   const [activeFilters, setActiveFilters] = useState(null);
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

  useEffect(() => {
    const initProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    initProducts();
  }, []);

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

  const toogleFilter = (value, itemProperty) => {
    const valueInLowerCase = value.toLowerCase();
    
    const brandActiveFilters = getActiveFilters(brandFilters)
    const saleActiveFilters = getActiveFilters(saleFilters)
    if (itemProperty === "brand") {
        const objIndex = brandFilters.findIndex(
          (filter) => filter.name === valueInLowerCase
        );
      const updatedBrandFilters = brandFilters;
      updatedBrandFilters[objIndex].status = !updatedBrandFilters[objIndex].status;
      const brandFilterUpdate = getActiveFilters(updatedBrandFilters)
      const newItems = getFilteredProducts(brandFilterUpdate, itemProperty);
      console.log(newItems)
    }
  //   const checkStatus = activeFilters

    // const check = filterGroupIsActive();
    // console.log(check);
  };

  
  useEffect(() => {
    const filterItems = () => {
      if (products) {
        const filtered = products.filter(
          (product) => product.brand === newFilter
        );
        return filtered;
      }
    };
    const res = filterItems();
    setFilteredProducts(res);
  }, [newFilter]);

  return (
    <div>
      {" "}
      <Banner2
        bannerImg={catalogBackground}
        title={"SHOPING WITHOUT LIMITS"}
        text={
          "You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!"
        }
        btnText="SHOP NOW"
      />
      <span className="catalog__location">
        Home / Womens Dress / Best Chose
      </span>
      <div className="productsContainer">
        <div className="productsContainer__filter">
          <ul className="productsContainer__list">
            <li className="productsContainer__listFilterName">
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
                    value="40%off"
                    onChange={(e) => toogleFilter(e.target.value, "promo")}
                  />
                  40% OFF
                  <span></span>
                </label>
              </form>
            </li>
          </ul>
        </div>
        <div className="productsContainer__itemList">
          {loading ? (
            <h2>LOADING</h2>
          ) : error ? (
            <h2>Something went Wrong. Try again Later</h2>
          ) : filteredProducts ? (
            filteredProducts.map((product) => (
              <CarouselItem
                key={product._id}
                urlPhoto={product.URLPhoto}
                itemTitle={product.category}
                description={product.name}
                price={product.price}
              />
            ))
          ) : (
            products?.map((product) => (
              <CarouselItem
                key={product._id}
                urlPhoto={product.URLPhoto}
                itemTitle={product.category}
                description={product.name}
                price={product.price}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
