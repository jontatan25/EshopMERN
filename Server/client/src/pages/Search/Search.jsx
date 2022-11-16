import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import CarouselItem from "../../components/Carouseltem/CarouselItem";
import { getProducts } from "../../service";
import "./style.css";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const productQuery = location.state;

  const getInfo = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getInfo();
  }, []);
  useEffect(() => {
    const filterProducts = () => {
      const filtered = products.filter((p) =>
        p.name.toLowerCase().includes(productQuery)
      );
      setFilteredProducts(filtered);
      // console.log(productQuery)
      // console.log(products.length)
      // console.log(filtered)
    };
    filterProducts();
  }, [productQuery, products]);

  return (
    <>
      <h5 className="search__url">Home / Search</h5>
      <h3 className="search__title">Find your favorite Product</h3>
      <div className="search__title-results">
        {!productQuery
          ? "Showing all products"
          : `Results for : ${productQuery}`}{" "}
      </div>
      <div className="search__itemContainer">
        {loading ? (
          <h4>LOADING ...</h4>
        ) : error ? (
          <h4>Ooops, Something Went wrong</h4>
        ) : products.length > 0 &&
          filteredProducts.length > 0 &&
          productQuery ? (
          filteredProducts.map((product) => (
            <CarouselItem
              key={product._id}
              product={product}
              linkForFilter={true}
            />
          ))
        ) : products.length > 0 &&
          filteredProducts.length === 0 &&
          productQuery ? (
          <h3 className="search__title">No products found</h3>
        ) : (
          products.map((product) => (
            <CarouselItem
              key={product._id}
              product={product}
              linkForFilter={true}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Search;
