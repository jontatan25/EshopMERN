import React from "react";
import { useEffect, useState } from "react";
import Banner2 from "../components/Banner2.jsx/Banner2";
import "./style.css";
import catalogBackground from "../images/banner/catalog-banner1.jpg";
import CarouselItem from "../components/Carouseltem/CarouselItem";
import { getProducts } from "../service/index";
import CatalogFilter from "../components/CatalogFilter/CatalogFilter";

const Catalog = () => {
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
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    initProducts();
  }, []);

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
        <CatalogFilter
          setFilteredProducts={setFilteredProducts}
          products={products}
        />
        <div className="productsContainer__itemList">
          {loading ? (
            <h2>LOADING</h2>
          ) : error ? (
            <h2>Something went Wrong. Try again Later</h2>
          ) : filteredProducts.length > 0 ? (
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
