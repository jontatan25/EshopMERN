import React, { useEffect, useState } from "react";
import axios from "axios";
import {useLocation} from "react-router-dom"

import "./style.css"
import Item from "../Item/component";
import LoadingSpinner from "../stateless/LoadingSpinner"

const Products = ({filter}) => {
  const [products, setProducts] = useState([]);
  let [loading, setloading] = useState(true);
  const token = JSON.parse(localStorage.getItem("user"));
  const search = useLocation().search;
  const categoryParams = new URLSearchParams(search).get('category');
  
  const getInfo = async (token) => {
    if (filter === "category") {
      const res = await axios.get("http://192.168.0.104:8080/products/category/"+categoryParams,
      {
        headers: { Authorization: `Bearer ${token}` },
      })
      setProducts(res.data.products)
      setloading(false);
      return
    } 

    const res = await axios.get("http://192.168.0.104:8080/products",
    {
      headers: { Authorization: `Bearer ${token}` },
    });
    setProducts(res.data.products);
    setloading(false);
  };

  useEffect(() => {
    getInfo(token)
  }, [search]);

  return (
    <>
      <div className="item__container">
      {loading ? (
         <LoadingSpinner/>
      ) : (
        <Item productsArray= {products}/>
      )}
    </div>
    </>
  );
};

export default Products;
