import React from "react";
import { useCartContext } from "../CartContext/context";
import "./style.css";

const QuantitySelector = ({ quantity, setQuantity, cartMode, id , quantityInCart }) => {

  const {updateItemQuantity} = useCartContext();
  const updateQuantity = (number) => {
    if ((quantity >= 1 && number === 1)|| (quantity > 1 && number === -1))
    setQuantity(quantity + number);
  };
  const updateQuantityInCart = (number) => {
    if ((quantityInCart >= 1 && number === 1)|| (quantityInCart > 1 && number === -1))
    {
      const newQuantity = (quantityInCart + number);
      updateItemQuantity(id,newQuantity);
    }
  };

  return (
   <>
   {!cartMode ? 
   <div className="quantitySelectorContainer">
      <button className="quantitySelectorBtn" onClick={() => updateQuantity(-1)}>
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
      <button className="quantitySelectorBtn" onClick={()=> updateQuantity(1)}>
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
     :  
     <div className="quantitySelectorContainer">
     <button className="quantitySelectorBtn" onClick={() => updateQuantityInCart(-1)}>
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
     <h5 className="quantitySelectorText">{quantityInCart}</h5>
     <button className="quantitySelectorBtn" onClick={()=> updateQuantityInCart(1)}>
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
    }
   </>
  
  );
};

export default QuantitySelector;
