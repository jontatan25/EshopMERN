import React from "react";
import {Link} from 'react-router-dom'

import "./style.css"

const Item = ({productsArray}) => {
  return (
    <>
      {productsArray &&
        productsArray.map((product) => (
          <div className="itemcontainer__item" key={product._id}>
            <div
              className="itemcontainer__item-imgContainer"
            ><img  className="itemcontainer__item-img"src={product.URLPhoto} alt="product Image" /> </div>
            <div className="itemcontainer__item-body">
              <h4>{product.name}</h4>
              <p>${product.price} USD</p>
              <Link to={`/product/${product._id}`}>
                <button>More Details</button>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default Item;
