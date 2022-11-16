import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams,useNavigate } from "react-router-dom";

import "./style.css";
import Item from "../Item/component";
import LoadingSpinner from "../stateless/LoadingSpinner";

const Products = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);
  let [loading, setloading] = useState(true);
  const token = JSON.parse(localStorage.getItem("user"));
  const { category } = useParams();

  const getInfo = async (token) => {
    if (token) {
      if (category) {
        try {
          const res = await axios.get(
            "https://jhonndevelopershop.herokuapp.com//products/category/" + category,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setProducts(res.data.products);
          setloading(false);
          
          return;
        } catch (error) {
          console.log(error)
        }
      }
      try {
        const res = await axios.get("https://jhonndevelopershop.herokuapp.com//products", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProducts(res.data.products);
        setloading(false);
        
      } catch (error) {
        switch (error.response.status) {
          case 403:
              alert("Session expired, redirecting to login..")
              localStorage.removeItem("user");
              navigate("/login")
              break
          default:
            console.log(error)
              break
       }
      }
    } else {alert("Please login before continuing"); navigate("/login")}
  };

  useEffect(() => {
    getInfo(token);
  }, []);

  return (
    <>
      <div className="item__container">
        {loading ? <LoadingSpinner /> : <Item productsArray={products} />}
      </div>
    </>
  );
};

export default Products;
