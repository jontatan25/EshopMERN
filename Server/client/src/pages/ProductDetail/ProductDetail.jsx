import React from "react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getProducts } from "../../service/index";
import "./style.css";

import ARMANI from "../../images/brandBanner/ARMANI.png";
import BURBERRY from "../../images/brandBanner/BURBERRY.png";
import CHANEL from "../../images/brandBanner/CHANEL.png";
import DIOR from "../../images/brandBanner/DIOR.png";
import FENDI from "../../images/brandBanner/FENDI.png";
import GUCCI from "../../images/brandBanner/GUCCI.png";
import VERSACE from "../../images/brandBanner/VERSACE.png";
import ColorListItem from "../../components/ColorListItem/ColorListItem";
import QuantitySelector from "../../components/QuantitySelector/QuantitySelector";
import CarouselSingle from "../../components/CarouselSingle/CarouselSingle";
import { useCartContext } from "../../components/CartContext/context";

import Swal from "sweetalert2";

const ProductDetail = () => {
  const { addToWishlist, wishlist } = useCartContext();
  const { addProduct } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [activeColor, setActiveColor] = useState("#24426a");
  const [activeSize, setActiveSize] = useState("OSFA");
  const [productIsInWishlist, setProductIsInWishlist] = useState(false);

  const [showDetails, setShowDetails] = useState(false);
  const [showOtherInfo, setShowOtherInfo] = useState(false);
  const [showOtherTab, setShowOtherTab] = useState(false);

  const location = useLocation();

  const sizes = [
    { name: "OSFA", id: 1 },
    { name: "W26", id: 2 },
    { name: "W27", id: 3 },
    { name: "W28", id: 4 },
    { name: "W29", disabled: true, id: 5 },
    { name: "W30", id: 6 },
    { name: "W31", id: 7 },
    { name: "W32", id: 8 },
    { name: "W33", id: 9 },
    { name: "W34", disabled: true, id: 10 },
    { name: "W35", id: 11 },
    { name: "W36", id: 12 },
    { name: "W38", id: 13 },
    { name: "W40", id: 14 },
    { name: "W42", id: 15 },
    { name: "W44", id: 16 },
    { name: "W46", id: 17 },
    { name: "W48", id: 18 },
    { name: "W50", disabled: true, id: 19 },
    { name: "W52", id: 20 },
  ];
  let navigate = useNavigate();

  const addAndRedirect = () => {
    addToWishlist(product);
    Swal.fire({
      title: "Your product has been added!",
      text: "Do you want to add more products?",
      confirmButtonText: "See more products",
      showDenyButton: true,
      denyButtonText: "Go To Wishlist",
      confirmButtonColor: "#1E92F4",
      denyButtonColor: "#32CD32",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/products");
      } else if (result.isDenied) {
        navigate("/WishList");
      }
    });
  };

  // const token = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();

  useEffect(() => {
    const initProducts = async () => {
      window.scrollTo(0, 0);
      try {
        setLoading(true);
        const data = await getProducts();
        const productToShow = data.filter((product) => product._id === id);
        setProducts(data);
        const product = productToShow[0];
        setProduct(product);
        setTotalPrice(product.price);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    initProducts();
  }, [location]);

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
  
  const selectColor = (color) => {
    setActiveColor(color);
  };

  useEffect(() => {
    if (product) {
      setTotalPrice(product.price * quantity);
    }
  }, [quantity]);

  const saveProduct = () => {
    const productWithSelectedOptions = { ...product };
    productWithSelectedOptions.color = activeColor;
    productWithSelectedOptions.size = activeSize;
    productWithSelectedOptions.quantity = quantity;
    addProduct(productWithSelectedOptions);
    Swal.fire({
      title: "Your product has been added!",
      text: "Do you want to add more products?",
      confirmButtonText: "Add more",
      showDenyButton: true,
      denyButtonText: "Go To Cart",
      confirmButtonColor: "#1E92F4",
      denyButtonColor: "#32CD32",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/products");
      } else if (result.isDenied) {
        navigate("/cart");
      }
    });
  };

  return (
    <>
      {loading ? (
        <h2>LOADING</h2>
      ) : error ? (
        <h2>Something went Wrong. Try again Later</h2>
      ) : (
        product && (
          <>
            <div className="ItemDetailContainer">
              <h5 className="detailsContainerTwo__url-mobile">
                Home / Womens Dress / Details
              </h5>
              <div className="detailsContainerOne">
                <div className="detailsContainerOne__imageContainer">
                  <img
                    className="detailsContainerOne__image"
                    src={product.URLPhoto}
                    alt="Product"
                  ></img>
                </div>

                <ul className="detailsContainerOne__share">
                  <li className="share__list">
                    <h6 id="share__text">SHARE:</h6>
                  </li>
                  <li className="share__list">
                    <button className="share__list-btn">
                      <svg
                        width="6"
                        height="13"
                        viewBox="0 0 6 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 4.22501V3.08754C4 2.51879 4.07692 2.19376 4.92308 2.19376H6V0H4.23077C2.07692 0 1.38462 1.05628 1.38462 2.92503V4.30629H0V6.5H1.30769V13H4V6.5H5.76923L6 4.22501H4Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </li>
                  <li className="share__list">
                    <button className="share__list-btn">
                      {" "}
                      <svg
                        width="13"
                        height="10"
                        viewBox="0 0 13 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 1.15326C12.5135 1.36079 12.0041 1.49145 11.4795 1.53757C12.0117 1.23012 12.4222 0.738223 12.6199 0.15408C12.0953 0.438465 11.5328 0.64598 10.9474 0.768958C10.4076 0.269362 9.70058 -0.00733705 8.97076 0.000349035C7.54912 -0.0227092 6.37076 1.0995 6.30994 2.5368C6.29473 2.72126 6.31755 2.90569 6.38597 3.07478C4.28012 3.02098 2.2959 2.06793 0.912278 0.461542C0.661401 0.853533 0.532161 1.30702 0.532161 1.76819C0.547366 2.62903 1.00351 3.42066 1.74853 3.84339C1.33041 3.82033 0.912278 3.72044 0.532161 3.53598C0.554968 4.76575 1.45205 5.80338 2.66082 5.99553C2.44035 6.05702 2.20468 6.08775 1.97661 6.07238C1.79415 6.08006 1.6193 6.05702 1.44445 5.99553C1.80936 7.07159 2.82807 7.79407 3.95321 7.76332C2.98772 8.48582 1.80935 8.86241 0.608184 8.83935H0C1.24678 9.57721 2.66082 9.97689 4.10526 9.99226C8.1193 10.1767 11.5175 7.04081 11.7 2.98255C11.7 2.93644 11.7 2.89033 11.7076 2.84421V2.5368C12.1942 2.12943 12.6351 1.66823 13 1.15326Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </li>
                  <li className="share__list">
                    <button className="share__list-btn">
                      <svg
                        width="11"
                        height="13"
                        viewBox="0 0 11 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.91874 9.43848C5.29547 9.31706 4.7046 9.04185 4.21893 8.62903C3.89515 10.4098 3.49043 12.1096 2.19532 13C1.7906 10.3288 2.76192 8.30522 3.16664 6.11973C2.43814 4.90556 3.24758 2.39631 4.78553 2.96292C6.72819 3.69142 3.08569 7.57674 5.51402 8.06241C8.0233 8.54808 9.07557 3.69139 7.53763 2.0725C5.27119 -0.193938 0.981135 1.99156 1.4668 5.31028C1.62869 6.11973 2.43815 6.36257 1.7906 7.49579C0.333599 7.17201 -0.0711326 6.03878 0.00981179 4.50084C0.187889 2.15345 2.03342 0.275539 4.38081 0.0488948C7.13291 -0.274883 9.64219 1.02025 10.0469 3.61047C10.4516 6.52447 8.83274 9.68131 5.91874 9.43848Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </li>
                  <li className="share__list">
                    <button className="share__list-btn">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.99999 3.56201C4.65569 3.56201 3.56201 4.65565 3.56201 5.99996C3.56201 7.34426 4.65569 8.43795 5.99999 8.43795C7.3443 8.43795 8.43796 7.34426 8.43796 5.99996C8.43796 4.65565 7.35189 3.56201 5.99999 3.56201Z"
                          fill="black"
                        />
                        <path
                          d="M11.9544 3.04558C11.9241 2.33165 11.8025 1.94428 11.7038 1.68605C11.5747 1.34428 11.4152 1.10126 11.157 0.843027C10.8987 0.584799 10.6557 0.425328 10.3139 0.296214C10.0557 0.19748 9.66837 0.0759476 8.95444 0.0455678C8.17976 0.00759309 7.95191 0 6.00001 0C4.04811 0 3.82026 0.00759309 3.04558 0.0455678C2.33165 0.0759476 1.94431 0.19748 1.68608 0.296214C1.34431 0.425328 1.10127 0.584799 0.843039 0.843027C0.584811 1.10126 0.425316 1.34428 0.296202 1.68605C0.197468 1.94428 0.0759592 2.33165 0.0455794 3.04558C0.00760468 3.82026 0 4.04808 0 5.99998C0 7.95188 0.00760468 8.17974 0.0455794 8.95442C0.0759592 9.66835 0.197468 10.0557 0.296202 10.3139C0.425316 10.6557 0.584811 10.8987 0.843039 11.157C1.10127 11.4152 1.34431 11.5747 1.68608 11.7038C1.94431 11.8025 2.33165 11.9241 3.04558 11.9544C3.81267 11.9924 4.04811 12 6.00001 12C7.95191 12 8.18735 11.9924 8.95444 11.9544C9.66837 11.9241 10.0557 11.8025 10.3139 11.7038C10.6557 11.5747 10.8987 11.4152 11.157 11.157C11.4152 10.8987 11.5747 10.6557 11.7038 10.3139C11.8025 10.0557 11.9241 9.66835 11.9544 8.95442C11.9924 8.17974 12 7.95188 12 5.99998C12 4.04808 11.9924 3.82026 11.9544 3.04558ZM6.00001 9.75188C3.92659 9.75188 2.24811 8.0734 2.24811 5.99998C2.24811 3.92656 3.92659 2.24807 6.00001 2.24807C8.07343 2.24807 9.75191 3.92656 9.75191 5.99998C9.75951 8.0734 8.07343 9.75188 6.00001 9.75188ZM9.90381 2.9772C9.41774 2.9772 9.0228 2.58229 9.0228 2.09621C9.0228 1.61014 9.41774 1.21517 9.90381 1.21517C10.3899 1.21517 10.7848 1.61014 10.7848 2.09621C10.7848 2.58229 10.3899 2.9772 9.90381 2.9772Z"
                          fill="black"
                        />
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="detailsContainerTwo">
                <h5 className="detailsContainerTwo__url">
                  Home / Womens Dress / Details
                </h5>
                <div className="detailsContainerTwo__container-title">
                  <div
                    className="detailsContainerTwo__brandPhoto"
                    style={
                      product.brand === "ARMANI"
                        ? { backgroundImage: `url(${ARMANI})` }
                        : product.brand === "BURBERRY"
                        ? { backgroundImage: `url(${BURBERRY})` }
                        : product.brand === "CHANEL"
                        ? { backgroundImage: `url(${CHANEL})` }
                        : product.brand === "DIOR"
                        ? { backgroundImage: `url(${DIOR})` }
                        : product.brand === "FENDI"
                        ? { backgroundImage: `url(${FENDI})` }
                        : product.brand === "GUCCI"
                        ? { backgroundImage: `url(${GUCCI})` }
                        : { backgroundImage: `url(${VERSACE})` }
                    }
                  ></div>
                  <h3 className="detailsContainerTwo__title">
                    Women Black Checked Fit and Flare Dress
                  </h3>
                </div>
                <h5 className="detailsContainerTwo__selectTitle">
                  SELECT COLOR
                </h5>
                <ul className="selectColor__list">
                  <li
                    className={
                      activeColor === "#24426a"
                        ? "selectColor__list-color -colorIsActive"
                        : "selectColor__list-color"
                    }
                  >
                    <button
                      className="selectColor__list-btn -colorOne"
                      onClick={() => selectColor("#24426a")}
                    ></button>
                  </li>
                  <li
                    className={
                      activeColor === "#f3ece2"
                        ? "selectColor__list-color -colorIsActive"
                        : "selectColor__list-color"
                    }
                  >
                    <button
                      className="selectColor__list-btn -colorTwo"
                      onClick={() => selectColor("#f3ece2")}
                    ></button>
                  </li>
                  <li
                    className={
                      activeColor === "#C35C71"
                        ? "selectColor__list-color -colorIsActive"
                        : "selectColor__list-color"
                    }
                  >
                    <button
                      className="selectColor__list-btn -colorThree"
                      onClick={() => selectColor("#C35C71")}
                    ></button>
                  </li>
                </ul>
                <h5 className="detailsContainerTwo__selectTitle">
                  SELECT SIZE (INCHES)
                </h5>
                <ul className="selectSize__list">
                  {sizes.slice(0, 10).map((size) => (
                    <ColorListItem
                      key={size.id}
                      size={size.name}
                      activeSize={activeSize}
                      setActiveSize={setActiveSize}
                      isDisabled={size.disabled === true ? true : false}
                    />
                  ))}
                </ul>
                <ul className="selectSize__list" id="selectSizeLast">
                  {sizes.slice(10, 20).map((size) => (
                    <ColorListItem
                      key={size.id}
                      size={size.name}
                      activeSize={activeSize}
                      setActiveSize={setActiveSize}
                      isDisabled={size.disabled === true ? true : false}
                    />
                  ))}
                </ul>
                <div className="preCheckContainer">
                  <div className="preCheckContainer__quantityContainer">
                    <h5 className=" detailsContainerTwo__selectTitle detailsContainerTwo__selectTitle-showInMobile">
                      QUANTITY
                    </h5>
                    <div className="quantityContainer__selectAmountContainer">
                      <QuantitySelector
                        quantity={quantity}
                        setQuantity={setQuantity}
                      />
                    </div>
                  </div>
                  <div className="preCheckContainer__priceContainer">
                    <h5 className="detailsContainerTwo__selectTitle">
                      PRICE TOTAL
                    </h5>
                    {product ? (
                      <h5
                        className="detailsContainerTwo__selectTitle"
                        id="quantitySelectorTotal"
                      >
                        {totalPrice}.00 USD
                      </h5>
                    ) : (
                      <h5
                        className="detailsContainerTwo__selectTitle"
                        id="quantitySelectorTotal"
                      >
                        0
                      </h5>
                    )}
                  </div>
                  <div className="preCheckContainer__priceContainer-mobile">
                    {product ? (
                      <>
                        <h5 className="detailsContainerTwo__selectTitle detailsContainerTwo__selectTitle-mobile-big">
                          {totalPrice},00 USD
                        </h5>
                        <h5 className="detailsContainerTwo__selectTitle detailsContainerTwo__selectTitle-mobile">
                          SELECT COLOR
                        </h5>
                        <ul className="selectColor__list-mobile">
                          <li
                            className={
                              activeColor === "#24426a"
                                ? "selectColor__list-color -colorIsActive"
                                : "selectColor__list-color"
                            }
                          >
                            <button
                              className="selectColor__list-btn -colorOne"
                              onClick={() => selectColor("#24426a")}
                            ></button>
                          </li>
                          <li
                            className={
                              activeColor === "#f3ece2"
                                ? "selectColor__list-color -colorIsActive"
                                : "selectColor__list-color"
                            }
                          >
                            <button
                              className="selectColor__list-btn -colorTwo"
                              onClick={() => selectColor("#f3ece2")}
                            ></button>
                          </li>
                          <li
                            className={
                              activeColor === "#C35C71"
                                ? "selectColor__list-color -colorIsActive"
                                : "selectColor__list-color"
                            }
                          >
                            <button
                              className="selectColor__list-btn -colorThree"
                              onClick={() => selectColor("#C35C71")}
                            ></button>
                          </li>
                        </ul>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <h5 className="detailsContainerTwo__selectTitle detailsContainerTwo__selectTitle-mobile">
                  SELECT SIZE (INCHES)
                </h5>
                <form action="" className="details__size-mobile">
                  <select name="sizeMobile" id="size-Mobile">
                    {sizes
                      .filter((size) => size.disabled !== true)
                      .map((size) => (
                        <option key={size.id} value={size.name}>
                          {size.name}
                        </option>
                      ))}
                  </select>
                </form>
                <div className="addOrSaveContainer">
                  <button
                    className="addOrSave-btn"
                    id="addOrSave-btnBlack"
                    onClick={() => {
                      saveProduct(product);
                    }}
                  >
                    <span className="addOrSave-text" id="btnBlack-text">
                      ADD TO BAG
                    </span>
                  </button>
                  <button
                    className="addOrSave-btn"
                    id="addOrSave-btnWhite"
                    onClick={() => {
                      addAndRedirect();
                    }}
                  >
                    {productIsInWishlist ? (
                      <svg
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
                    ) : (
                      <svg
                        className="addOrSave-icon"
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.00645 11.3016L8.00637 11.3016L8.00279 11.305L7.9966 11.3109L7.98611 11.3018L7.98604 11.3017C6.27421 9.8204 4.85966 8.59596 3.87216 7.49453C2.88329 6.39158 2.3398 5.43014 2.3398 4.47652C2.3398 3.16287 3.37051 2.17325 4.7598 2.17325C5.83254 2.17325 6.87305 2.83937 7.23763 3.73157L7.26304 3.79374H7.3302H8.6694H8.73657L8.76197 3.73157C9.12655 2.83937 10.1671 2.17325 11.2398 2.17325C12.6291 2.17325 13.6598 3.16287 13.6598 4.47652C13.6598 5.43012 13.1163 6.39156 12.1266 7.4945C11.1382 8.59591 9.72186 9.82036 8.00645 11.3016ZM7.9998 1.98089C7.19582 1.13432 6.00223 0.599951 4.7598 0.599951C2.49162 0.599951 0.699805 2.29501 0.699805 4.47652C0.699805 5.80531 1.329 7.00551 2.41138 8.26838C3.49282 9.53017 5.03843 10.8677 6.89039 12.4692L7.93425 13.3755L7.9998 13.4324L8.06536 13.3755L9.10922 12.4692C10.9612 10.8677 12.5068 9.53017 13.5882 8.26838C14.6706 7.00551 15.2998 5.80531 15.2998 4.47652C15.2998 2.29501 13.508 0.599951 11.2398 0.599951C9.99738 0.599951 8.80379 1.13432 7.9998 1.98089Z"
                          fill="#3f3f3f"
                          stroke="#3f3f3f"
                          strokeWidth="0.2"
                        />
                      </svg>
                    )}

                    <span className="addOrSave-text" id="btnWhite-text">
                      {!productIsInWishlist ? "SAVE" : "SAVED"}
                    </span>
                  </button>
                </div>
                <div className="infoContainer">
                  <div className="infoContainer__item">
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 3L6 8L13 1"
                        stroke="#828282"
                        strokeWidth="2.4"
                      />
                    </svg>
                    <h6 className="codeText" id="codeTitle-shipping">
                      FREE SHIPPING
                    </h6>
                  </div>
                  <div className="infoContainer__item">
                    <h5 className="codeTitle">PRODUCT CODE: </h5>
                    <h6 className="codeText">RFKK1024</h6>
                  </div>
                  <div className="infoContainer__item">
                    <h5 className="codeTitle">TAGS: </h5>
                    <h6 className="codeText">NEW ARRIVALS, TOP WOMEN</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="aboutContainer">
              <div className="aboutContainer__aboutList">
                <div className="aboutList__item">
                  <div className="aboutList__headLineContainer">
                    <h6 className="headLineContainer__title">Details</h6>
                    <button
                      className="headLineContainer__btn"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowDetails(!showDetails);
                      }}
                    >
                      {showDetails ? (
                        <svg
                          className="headLineContainer__icon"
                          width="20"
                          height="2"
                          viewBox="0 0 13 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="13" height="2" fill="#828282" />
                        </svg>
                      ) : (
                        <svg
                          className="headLineContainer__icon"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect y="7" width="16" height="2" fill="#828282" />
                          <rect
                            x="9"
                            width="16"
                            height="2"
                            transform="rotate(90 9 0)"
                            fill="#828282"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  <div
                    className="aboutList__detailsContainer"
                    aria-expanded={!showDetails}
                  >
                    <ul className="detailsContainer__list">
                      <li className="detailsContainer__list-listItem">
                        <h5 className="list__listItemTitle">ABOUT PRODUCTS</h5>
                        <p className="list__listItemText">
                          Cool off this summer in the Mini Ruffle Smocked Tank
                          Top from our very own LA Hearts. This tank features a
                          smocked body, adjustable straps, scoop neckline,
                          ruffled hems, and a cropped fit
                        </p>
                      </li>
                      <li className="detailsContainer__list-listItem">
                        <h5 className="list__listItemTitle">ADVANTAGES</h5>
                        <ul className="advantagesList">
                          <li className="advantagesList__listItem list__listItemText">
                            <svg
                              width="3"
                              height="3"
                              viewBox="0 0 3 3"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="3" height="3" fill="#3F3F3F" />
                            </svg>
                            Smocked body
                          </li>
                          <li className="advantagesList__listItem list__listItemText">
                            <svg
                              width="3"
                              height="3"
                              viewBox="0 0 3 3"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="3" height="3" fill="#3F3F3F" />
                            </svg>
                            Adjustable straps
                          </li>
                          <li className="advantagesList__listItem list__listItemText">
                            <svg
                              width="3"
                              height="3"
                              viewBox="0 0 3 3"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="3" height="3" fill="#3F3F3F" />
                            </svg>
                            Scoop neckline
                          </li>
                          <li className="advantagesList__listItem list__listItemText">
                            <svg
                              width="3"
                              height="3"
                              viewBox="0 0 3 3"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="3" height="3" fill="#3F3F3F" />
                            </svg>
                            Ruffled hems
                          </li>
                          <li className="advantagesList__listItem list__listItemText">
                            <svg
                              width="3"
                              height="3"
                              viewBox="0 0 3 3"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="3" height="3" fill="#3F3F3F" />
                            </svg>
                            Cropped length
                          </li>
                          <li className="advantagesList__listItem list__listItemText">
                            <svg
                              width="3"
                              height="3"
                              viewBox="0 0 3 3"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="3" height="3" fill="#3F3F3F" />
                            </svg>
                            Model is wearing a small
                          </li>
                          <li className="advantagesList__listItem list__listItemText">
                            <svg
                              width="3"
                              height="3"
                              viewBox="0 0 3 3"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="3" height="3" fill="#3F3F3F" />
                            </svg>
                            100% rayon
                          </li>
                          <li className="advantagesList__listItem list__listItemText">
                            <svg
                              width="3"
                              height="3"
                              viewBox="0 0 3 3"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="3" height="3" fill="#3F3F3F" />
                            </svg>
                            Machine washable
                          </li>
                        </ul>
                      </li>
                      <li className="detailsContainer__list-listItem">
                        <h5 className="list__listItemTitle">ADVANTAGES ++</h5>
                        <ul className="advantagesList">
                          <li className="advantagesList__listItem list__listItemText">
                            <svg
                              width="3"
                              height="3"
                              viewBox="0 0 3 3"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="3" height="3" fill="#3F3F3F" />
                            </svg>
                            Smocked body
                          </li>
                          <li className="advantagesList__listItem list__listItemText">
                            <svg
                              width="3"
                              height="3"
                              viewBox="0 0 3 3"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="3" height="3" fill="#3F3F3F" />
                            </svg>
                            Adjustable straps
                          </li>
                          <li className="advantagesList__listItem list__listItemText">
                            <svg
                              width="3"
                              height="3"
                              viewBox="0 0 3 3"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect width="3" height="3" fill="#3F3F3F" />
                            </svg>
                            Scoop neckline
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <div className="aboutList__containerB">
                      <h5 className="list__listItemTitle">SHIPPING</h5>
                      <p className="advantagesList__listItem list__listItemText">
                        We offer Free Standard Shipping for all orders over $75
                        to the 50 states and the District of Columbia. The
                        minimum order value must be $75 before taxes, shipping
                        and handling. Shipping fees are non-refundable.
                      </p>
                      <p className="advantagesList__listItem list__listItemText">
                        Please allow up to 2 business days (excluding weekends,
                        holidays, and sale days) to process your order.
                      </p>
                      <p className="advantagesList__listItem list__listItemText">
                        Processing Time + Shipping Time = Delivery Time
                      </p>
                    </div>
                  </div>
                </div>
                <div className="aboutList__item">
                  <div className="aboutList__headLineContainer">
                    <h6 className="headLineContainer__title">
                      Other Information
                    </h6>
                    <button
                      className="headLineContainer__btn"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowOtherInfo(!showOtherInfo);
                      }}
                    >
                      {showOtherInfo ? (
                        <svg
                          className="headLineContainer__icon"
                          width="20"
                          height="2"
                          viewBox="0 0 13 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="13" height="2" fill="#828282" />
                        </svg>
                      ) : (
                        <svg
                          className="headLineContainer__icon"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect y="7" width="16" height="2" fill="#828282" />
                          <rect
                            x="9"
                            width="16"
                            height="2"
                            transform="rotate(90 9 0)"
                            fill="#828282"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  <div
                    className="aboutList__detailsContainer"
                    aria-expanded={!showOtherInfo}
                  >
                    <ul className="detailsContainer__list">
                      <li className="detailsContainer__list-listItem">
                        <h5 className="list__listItemTitle">
                          MORE INFORMATION
                        </h5>
                        <p className="list__listItemText">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quos officiis harum ipsam temporibus quo magnam,
                          eligendi odit voluptatem dolorum in, dignissimos modi!
                          Dolorem consequuntur, praesentium doloremque fugit
                          odio modi ipsum? Dignissimos obcaecati molestias
                          assumenda praesentium, odit cupiditate tempore, eum
                          labore nemo iure numquam ad odio veritatis eligendi
                          deleniti rem earum quod iste aspernatur voluptates
                          sint repellat! Ab, temporibus similique. A. Provident,
                          molestiae ut. Nesciunt doloribus explicabo ut
                          aspernatur cum! Iusto fugiat assumenda explicabo
                          doloremque iure earum accusamus in quisquam illum
                          minus quos, aut dolor eius quibusdam maxime culpa
                          tenetur temporibus.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="aboutList__item">
                  <div className="aboutList__headLineContainer">
                    <h6 className="headLineContainer__title">Another Tab</h6>
                    <button
                      className="headLineContainer__btn"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowOtherTab(!showOtherTab);
                        console.log(showOtherTab);
                      }}
                    >
                      {showOtherTab ? (
                        <svg
                          className="headLineContainer__icon"
                          width="20"
                          height="2"
                          viewBox="0 0 13 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="13" height="2" fill="#828282" />
                        </svg>
                      ) : (
                        <svg
                          className="headLineContainer__icon"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect y="7" width="16" height="2" fill="#828282" />
                          <rect
                            x="9"
                            width="16"
                            height="2"
                            transform="rotate(90 9 0)"
                            fill="#828282"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                  <div
                    className="aboutList__detailsContainer"
                    aria-expanded={!showOtherTab}
                  >
                    <ul className="detailsContainer__list">
                      <li className="detailsContainer__list-listItem">
                        <h5 className="list__listItemTitle">
                          Another Tab Information
                        </h5>
                        <p className="list__listItemText">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Quisquam ipsum consequuntur vel laboriosam hic
                          dolores doloribus, quam id impedit quasi reiciendis
                          iste beatae, voluptatibus tenetur soluta rerum. Eaque,
                          ad quis.
                        </p>
                        <p className="list__listItemText">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Quisquam ipsum consequuntur vel laboriosam hic
                          dolores doloribus, quam id impedit quasi reiciendis
                          iste beatae, voluptatibus tenetur soluta rerum. Eaque,
                          ad quis.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <CarouselSingle
              title="You May Also Like"
              products={products}
              category="NEW-ARRIVALS"
              origin="ProductDetail"
            />
          </>
        )
      )}
    </>
  );
};

export default ProductDetail;
