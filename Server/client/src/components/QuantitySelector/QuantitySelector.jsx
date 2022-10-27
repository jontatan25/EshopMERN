import React from "react";
import { useState } from "react";
import "./style.css";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="quantitySelectorContainer">
      <button className="quantitySelectorBtn">
        <svg 
          width="20"
          height="2"
          viewBox="0 0 10 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="10" height="2" fill="#C4C4C4" />
        </svg>
      </button>
      <h5 className="quantitySelectorText">{quantity}</h5>
      <button className="quantitySelectorBtn">
        <svg 
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="5" width="12" height="2" fill="#C4C4C4" />
          <rect
            x="7"
            width="12"
            height="2"
            transform="rotate(90 7 0)"
            fill="#C4C4C4"
          />
        </svg>
      </button>
    </div>
  );
};

export default QuantitySelector;
