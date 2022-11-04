import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../CartContext/context";
import "./style.css";

const CarouselItem = ({ product,linkForFilter,wishlistMode}) => {
const {addToWishlist,deleteItemByIDWishlist} = useCartContext()
  let navigate = useNavigate();

  const saveToBag = () => {
    addToWishlist(product);
    navigate("/wishlist");
  }

  // Changing url depending on the actual position of the component
  let linkToProduct = `products/${product._id}`
  if (linkForFilter) {
    linkToProduct = `../products/${product._id}`
  }

  return (
    <div className="collection__item">
      <div
        className="collection__item-photo-container"
        style={{ backgroundImage: `url(${product.URLPhoto})` }}
      >
        <div className="collection__item-photo-container-options">
          <Link to={linkToProduct}>
          <button className="collection__item-photo-container-options-btn">
            ADD TO BAG
          </button>
          </Link>
          {!wishlistMode 
          ? 
          <Link to ="/wishlist">
          <button className="collection__item-photo-container-options-btn -options-btn-white" onClick={() =>{saveToBag()}}>
            <svg
              className="collection__item-addOrSave-icon"
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00645 11.3016L8.00637 11.3016L8.00279 11.305L7.9966 11.3109L7.98611 11.3018L7.98604 11.3017C6.27421 9.8204 4.85966 8.59596 3.87216 7.49453C2.88329 6.39158 2.3398 5.43014 2.3398 4.47652C2.3398 3.16287 3.37051 2.17325 4.7598 2.17325C5.83254 2.17325 6.87305 2.83937 7.23763 3.73157L7.26304 3.79374H7.3302H8.6694H8.73657L8.76197 3.73157C9.12655 2.83937 10.1671 2.17325 11.2398 2.17325C12.6291 2.17325 13.6598 3.16287 13.6598 4.47652C13.6598 5.43012 13.1163 6.39156 12.1266 7.4945C11.1382 8.59591 9.72186 9.82036 8.00645 11.3016ZM7.9998 1.98089C7.19582 1.13432 6.00223 0.599951 4.7598 0.599951C2.49162 0.599951 0.699805 2.29501 0.699805 4.47652C0.699805 5.80531 1.329 7.00551 2.41138 8.26838C3.49282 9.53017 5.03843 10.8677 6.89039 12.4692L7.93425 13.3755L7.9998 13.4324L8.06536 13.3755L9.10922 12.4692C10.9612 10.8677 12.5068 9.53017 13.5882 8.26838C14.6706 7.00551 15.2998 5.80531 15.2998 4.47652C15.2998 2.29501 13.508 0.599951 11.2398 0.599951C9.99738 0.599951 8.80379 1.13432 7.9998 1.98089Z"
                fill="#828282"
                stroke="#828282"
                strokeWidth="0.2"
              />
            </svg>
            SAVE
          </button>
          </Link> :
          <button className="collection__item-photo-container-options-btn -options-btn-white" onClick={() =>{deleteItemByIDWishlist(product._id)}}>
          DELETE
        </button>
          }
          
        </div>
      </div>

      <h4 className="collection__item-title">{product.category}</h4>
      <p className="collection__item-name">{product.name}</p>
      <p className="collection__item-price">{product.price} USD</p>
    </div>
  );
};

export default CarouselItem;
