import React from "react";
import { useEffect, useState } from "react";
import Banner2 from "../components/Banner2.jsx/Banner2";
import "./style.css";
import catalogBackground from "../images/banner/catalog-banner1.jpg";
import CarouselItem from "../components/Carouseltem/CarouselItem";
import {getProducts} from "../service/index";

const Catalog = () => {
  const [showBrand, setShowBrand] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState("");
  const [newFilter, setNewFilter] = useState("");

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError(error);
        console.log(error)
      } finally {
        setLoading(false);
      }
    };
    initProducts();
  }, []);

  const handleChange = (e) => {
    setNewFilter(e.target.value);
  };

  useEffect(() => {
    const filterItems = () => {
      if (products) {
        const filtered = products.filter(
          (product) => product.brand == newFilter
        );
        setFilteredProducts(filtered);
        console.log(newFilter);
        console.log(filtered);
      }
    };
    filterItems();
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
                    type="radio"
                    name="filter"
                    id="burberry"
                    value="BURBERRY"
                    onChange={handleChange}
                  />
                  BURBERRY
                  <span></span>
                </label>
                <label htmlFor="dior">
                  <input
                    type="radio"
                    name="filter"
                    id="dior"
                    value="DIOR"
                    onChange={handleChange}
                  />
                  DIOR
                  <span></span>
                </label>
                <label htmlFor="fendi">
                  <input
                    type="radio"
                    name="filter"
                    id="fendi"
                    value="FENDI"
                    onChange={handleChange}
                  />
                  FENDI
                  <span></span>
                </label>
                <label htmlFor="versace">
                  <input
                    type="radio"
                    name="filter"
                    id="versace"
                    value="VERSACE"
                    onChange={handleChange}
                  />
                  VERSACE
                  <span></span>
                </label>
                <label htmlFor="gucci">
                  <input
                    type="radio"
                    name="filter"
                    id="gucci"
                    value="GUCCI"
                    onChange={handleChange}
                  />
                  GUCCI
                  <span></span>
                </label>
                <label htmlFor="armani">
                  <input
                    type="radio"
                    name="filter"
                    id="armani"
                    value="ARMANI"
                    onChange={handleChange}
                  />
                  ARMANI
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
