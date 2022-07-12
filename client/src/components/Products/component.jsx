import React, { useEffect, useState } from "react";
import axios from "axios";
import {useLocation} from "react-router-dom"

import "./style.css"
import Item from "../Item/component";
import LoadingSpinner from "../stateless/LoadingSpinner"

const Products = ({filter}) => {
  const [products, setProducts] = useState([]);
  let [loading, setloading] = useState(true);
  
  const search = useLocation().search;
  const categoryParams = new URLSearchParams(search).get('category');
  const idParams = new URLSearchParams(search).get('id');
  
  const getInfo = async () => {
    if (filter === "category") {
      const res = await axios.get("http://192.168.0.104:8080/products/category/"+categoryParams)
      setProducts(res.data.products)
      setloading(false);
      return
    } 
    else if (filter === "id"){
      const res = await axios.get("http://192.168.0.104:8080/products/id/"+idParams)
      
      setProducts(res.data.product)
      setloading(false);
      return
    }
    const res = await axios.get("http://192.168.0.104:8080/products");
    setProducts(res.data.products);
    setloading(false);
    console.log(res.data)
  };

  useEffect(() => {
    getInfo();
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
