import React from "react";
import "./style.css"

const CartCountries = ({countryName}) => {
  return (
    <option className="shipping__information-opt" value={countryName}>
      {countryName}
    </option>
  );
};

export default CartCountries;
