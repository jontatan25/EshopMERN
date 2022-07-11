import React, { useEffect, useState } from "react";
import axios from "axios";
import {useLocation} from "react-router-dom"

import "./style.css"
import Item from "../Item/component";
import LoadingSpinner from "../stateless/LoadingSpinner"

const Products = () => {
  const [products, setProducts] = useState([]);
  let [loading, setloading] = useState(true);

  
  const search = useLocation().search;
  // const emailFromParams = new URLSearchParams(search).get('email');
  
  const getInfo = async () => {
    // if (messagesToGet === "email") {
    //   const res = await axios.get("http://192.168.0.104:8080/messages/email/"+emailFromParams)
    //   setMessages(res.data.messages)
    //   return
    // }
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
