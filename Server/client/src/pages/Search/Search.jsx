import React, { useState } from "react";
import { useEffect } from "react";
import CarouselItem from "../../components/Carouseltem/CarouselItem";
import { useCartContext } from "../../components/CartContext/context";
import { getProducts } from "../../service";
import "./style.css";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const {productQuery, setProductQuery} =useCartContext()
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
      <form className="search__form" onSubmit={(e) => {e.preventDefault();}}>
                  <input
                    onChange={(e) => {
                      setProductQuery(e.target.value);
                    }}
                    className="search__field"
                    type="text"
                    placeholder="Search"
                    value={productQuery}
                  />
                  <button
                  type="submit"
                    className="search__field-btn"
                    // onClick={() => {
                    //   searchProduct();
                    // }}
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="4.61538"
                        cy="4.61538"
                        r="3.91538"
                        stroke="black"
                        strokeWidth="1.4"
                      />
                      <path
                        d="M8.61548 8.61523L12.0001 11.9998"
                        stroke="black"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </button>
                </form>
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
