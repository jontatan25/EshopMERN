import { React, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import ItemDetail from "./ItemDetail";
import LoadingSpinner from "../stateless/LoadingSpinner";

import "./ItemDetailContainer.css";
import "../stateless/LoadingSpinnercss.css";

const ItemDetailContainer = () => {
  
  let [loadingItem, setloadingItem] = useState(true);
  const [item, setitem] = useState();
  const token = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();

  let getProduct = async () => {
    try {
      const res = await axios.get(
        `https://jhonndevshop.vercel.app/api/products/id/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setitem(res.data.product[0]);
      setloadingItem(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <div className="itemDetail__container">
      {loadingItem ? (
        <LoadingSpinner/>
      ) : (
        <ItemDetail item={item} />
      )}
      </div>
        
      
      
    </>
  );
};

export default ItemDetailContainer;
