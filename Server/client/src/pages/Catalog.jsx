import React from "react";
import { useEffect, useState } from "react";
import Banner2 from "../components/Banner2.jsx/Banner2";
import "./style.css";
import catalogBackground from "../images/banner/catalog-banner1.jpg";
import catalogBackgroundDark from "../images/banner/catalog-banner2.jpg";

import CarouselItem from "../components/Carouseltem/CarouselItem";
import { getProducts } from "../service/index";
import CatalogFilter from "../components/CatalogFilter/CatalogFilter";
import { useLocation } from "react-router-dom";

const Catalog = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [queryIsActive, setQueryIsActive] = useState(false);

  const useQuery = () => new URLSearchParams(useLocation().search);
  let query = useQuery();
  const queryFilter = query.get("filterProducts");

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

  useEffect(() => {
    if (queryFilter) {
      setQueryIsActive(true)
      window.scrollTo({
        top: 470,
        behavior: "smooth",
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  useEffect(() => {
    if (filteredProducts.length > 0) {
      setQueryIsActive(false);
    }
  }, [filteredProducts]);

  return (
    <div>
      <Banner2
        bannerImg={catalogBackground}
        title={"SHOPING WITHOUT LIMITS"}
        text={
          "You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!"
        }
        btnText="SHOP NOW"
        scroll={true}
      />
      <span className="catalog__location">
        Home / Womens Dress / Best Chose
      </span>
      <div className="productsContainer">
        {loading ? (
          <h2></h2>
        ) : error ? (
          <h2>Something went Wrong. Try again Later</h2>
        ) : (
          <CatalogFilter
            setFilteredProducts={setFilteredProducts}
            products={products}
            queryFilter={queryFilter}
          />
        )}
        <div className="productsContainer_productsAndBanners">
          <div className="productsContainer__itemList showTripleRow">
            {loading ? (
              <h2>LOADING</h2>
            ) : error ? (
              <h2>Something went Wrong. Try again Later</h2>
            ) : queryIsActive && filteredProducts.length === 0 ? (
              <h2>LOADING FILTER...</h2>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <CarouselItem
                  key={product._id}
                  product={product}
                  linkForFilter={true}
                />
              ))
            ) : (
              products?.map((product) => (
                <CarouselItem
                  key={product._id}
                  product={product}
                  linkForFilter={true}
                />
              ))
            )}
          </div>
          <Banner2
            bannerImg={catalogBackgroundDark}
            title={"SHOPING WITHOUT LIMITS"}
            text={
              "You can choose the best option for you, and it does not matter whether you are in Prague or San Francisco. We will deliver your purchase anywhere!"
            }
            btnText="SHOP NOW"
            color={"white"}
          />
          <div className="productsContainer__itemList showTripleRow">
            {loading ? (
              <h2>LOADING</h2>
            ) : error ? (
              <h2>Something went Wrong. Try again Later</h2>
            ) : (
              products?.map((product) => (
                <CarouselItem
                  key={product._id}
                  product={product}
                  linkForFilter={true}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
