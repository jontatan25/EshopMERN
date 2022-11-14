import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../CartContext/context";
import "./style.css";
import Swal from "sweetalert2";

const CarouselItem = ({ product, linkForFilter, wishlistMode, origin }) => {
  const { addToWishlist, deleteItemByIDWishlist, wishlist } = useCartContext();
  const [productIsInWishlist, setProductIsInWishlist] = useState(false);
  let navigate = useNavigate();

  const saveToBag = () => {
    addToWishlist(product);
    Swal.fire({
      icon: "success",
      text: "Added to your Wishlist.",
      confirmButtonText: "Stay here",
      showDenyButton: true,
      denyButtonText: "Go To Wishlist",
      confirmButtonColor: "#1E92F4",
      denyButtonColor: "#32CD32",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.close();
      } else if (result.isDenied) {
        navigate("/WishList");
      }
    });
  };

  useEffect(() => {
    if (
      product &&
      wishlist.some(
        (productInWishlist) => productInWishlist._id === product._id
      )
    ) {
      setProductIsInWishlist(true);
    } else {
      setProductIsInWishlist(false);
    }
  }, [wishlist]);

  // Changing url depending on the actual position of the component
  let linkToProduct = `products/${product._id}`;
  if (linkForFilter) {
    linkToProduct = `../products/${product._id}`;
  } else if (origin) {
    linkToProduct = `/products/${product._id}`;
  }

  return (
    <div
      className={
        wishlistMode
          ? "collection__item collection__item-wishlist"
          : "collection__item"
      }
    >
      <div
        className={
          !wishlistMode
            ? "collection__item-photo-container"
            : "collection__item-photo-container collection__photo"
        }
        style={{ backgroundImage: `url(${product.URLPhoto})` }}
      >
        <div className="collection__item-photo-container-options">
          <Link to={linkToProduct}>
            <button className="collection__item-photo-container-options-btn">
              ADD TO BAG
            </button>
          </Link>
          {!wishlistMode ? (
            <button
              className="collection__item-photo-container-options-btn -options-btn-white"
              onClick={() => {
                saveToBag();
              }}
            >
              {!productIsInWishlist ? (
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
              ) : (
                <svg
                  className="collection__item-addOrSave-icon-inCart"
                  viewBox="195.183 170.941 14.6 12.832"
                  width="14.6"
                  height="12.832"
                >
                  <path
                    d="M 187.803 219.385 L 186.524 220.665 L 186.518 220.671 L 190.608 216.743 C 188.896 215.261 183.381 217.956 182.393 216.854 C 181.404 215.751 186.876 216.704 186.876 215.75 C 186.876 214.437 185.264 216.363 186.653 216.363 C 187.726 216.363 185.394 212.199 185.759 213.091 L 185.784 213.154 L 185.851 213.154 L 187.19 213.154 L 187.258 213.154 L 188.924 213.82 C 189.289 212.928 188.688 211.533 189.761 211.533 C 191.15 211.533 179.696 213.708 179.696 215.021 C 179.696 215.975 183.526 215.386 182.537 216.489 C 181.548 217.591 189.519 217.904 187.803 219.385 Z M 186.521 211.341 C 185.717 210.494 184.523 209.96 183.281 209.96 C 181.013 209.96 179.221 211.655 179.221 213.836 C 179.221 215.165 179.85 216.365 180.932 217.628 C 182.014 218.89 183.559 220.228 185.411 221.829 L 186.455 222.735 L 186.521 222.792 L 186.586 222.735 L 187.63 221.829 C 189.482 220.228 191.028 218.89 192.109 217.628 C 193.192 216.365 193.821 215.165 193.821 213.836 C 193.821 211.655 192.029 209.96 189.761 209.96 C 188.518 209.96 187.325 210.494 186.521 211.341 Z"
                    fill="#EB5757"
                    stroke="#EB5757"
                    strokeWidth="0.2"
                    transform="matrix(1, 0, 0, 1, 15.961995, -39.018643)"
                  ></path>
                </svg>
              )}
              {!productIsInWishlist ? "SAVE" : "SAVED"}
            </button>
          ) : (
            <button
              className="collection__item-photo-container-options-btn -options-btn-white"
              onClick={() => {
                deleteItemByIDWishlist(product._id);
              }}
            >
              DELETE
            </button>
          )}
        </div>
      </div>
      {wishlistMode ? (
        <>
          <button
            onClick={() => {
              deleteItemByIDWishlist(product._id);
            }}
            className="collection__btn"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="24" height="24" fill="#E6F1FA" />
              <path
                d="M8.84277 8.8418L15.9883 15.9873"
                stroke="black"
                stroke-width="1.6"
                stroke-linecap="round"
              />
              <path
                d="M15.9863 8.8418L8.84083 15.9873"
                stroke="black"
                stroke-width="1.6"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <Link to={linkToProduct}>
            <button className="collection__btn collection__btn-edit">
              <svg
                width="29"
                height="30"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect y="0.0581055" width="20" height="20" fill="#E6F1FA" />
                <path
                  d="M6.64295 15.0582C6.47581 15.0582 6.31125 14.9927 6.18846 14.8699C6.00654 14.688 5.95061 14.4154 6.04575 14.1763L7.33143 10.9621C7.36421 10.8817 7.41243 10.8078 7.47414 10.7467L11.974 6.24686C12.2254 5.99551 12.6316 5.99551 12.883 6.24686L14.8115 8.17537C15.0628 8.42672 15.0628 8.833 14.8115 9.08435L12.2401 11.6557C11.9888 11.907 11.5825 11.907 11.3312 11.6557C11.0798 11.4043 11.0798 10.9981 11.3312 10.7467L13.448 8.62986L12.4285 7.61032L8.47697 11.5625L7.79684 13.2615L9.49651 12.582L9.591 12.4869L9.40265 12.2985C9.1513 12.0472 9.1513 11.6409 9.40265 11.3896C9.654 11.1382 10.0603 11.1382 10.3116 11.3896L10.9545 12.0324C11.2058 12.2837 11.2058 12.69 10.9545 12.9414L10.3116 13.5842C10.2499 13.6459 10.1766 13.6941 10.0956 13.7269L6.88144 15.0126C6.8043 15.0435 6.7233 15.0582 6.64295 15.0582Z"
                  fill="black"
                />
              </svg>
            </button>
          </Link>
        </>
      ) : (
        ""
      )}

      <h4 className="collection__item-title">{product.category}</h4>
      <p className="collection__item-name">{product.name}</p>
      <p className="collection__item-price">{product.price},00 USD</p>
      {wishlistMode ? (
        <div className="collection__item-btn-container">
            <Link to={linkToProduct} className="collection__item-link-container">
            <button className="collection__item-photo-container-options-btn">
              ADD TO CART
            </button>
            </Link>
            <button
              onClick={() => {
                deleteItemByIDWishlist(product._id);
              }}
              className="collection__item-photo-container-options-btn -options-btn-white"
            >
              DELETE
            </button>
          </div>

      ) : (
        ""
      )}

      {!wishlistMode ? (
        <Link to={linkToProduct} className="collection__link-container">
          <div className="collection__link-container"></div>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default CarouselItem;
