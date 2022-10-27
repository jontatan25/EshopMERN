import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByID } from "../../service/index";
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

const ProductDetail = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);

  const token = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();

  useEffect(() => {
    const initProducts = async () => {
      try {
        setLoading(true);
        const data = await getProductByID(id);
        setProduct(data[0]);
        // console.log(data)
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    initProducts();
  }, []);

  const selectColor = (color) => {
    setActiveColor(color);
  };
  const selectSize = (size) => {
    setActiveSize(size);
    console.log(activeSize);
  };

  return (
    <>
      {loading ? (
        <h2>LOADING</h2>
      ) : error ? (
        <h2>Something went Wrong. Try again Later</h2>
      ) : (
        product && (
          <div className="ItemDetailContainer">
            <div className="detailsContainerOne">
              <img
                className="detailsContainerOne__image"
                src={product.URLPhoto}
              ></img>
              <ul className="detailsContainerOne__share">
                <li className="share__list">SHARE</li>
                <li className="share__list">2</li>
                <li className="share__list">3</li>
                <li className="share__list">4</li>
                <li className="share__list">5</li>
              </ul>
            </div>
            <div className="detailsContainerTwo">
              <h5 className="detailsContainerTwo__url">
                Home / Womens Dress / Details
              </h5>
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
              <h5 className="detailsContainerTwo__selectTitle">SELECT COLOR</h5>
              <ul className="selectColor__list">
                <li
                  className={
                    activeColor === "blue"
                      ? "selectColor__list-color -colorIsActive"
                      : "selectColor__list-color"
                  }
                >
                  <button
                    className="selectColor__list-btn -colorOne"
                    onClick={() => selectColor("blue")}
                  ></button>
                </li>
                <li
                  className={
                    activeColor === "white"
                      ? "selectColor__list-color -colorIsActive"
                      : "selectColor__list-color"
                  }
                >
                  <button
                    className="selectColor__list-btn -colorTwo"
                    onClick={() => selectColor("white")}
                  ></button>
                </li>
                <li
                  className={
                    activeColor === "purple"
                      ? "selectColor__list-color -colorIsActive"
                      : "selectColor__list-color"
                  }
                >
                  <button
                    className="selectColor__list-btn -colorThree"
                    onClick={() => selectColor("purple")}
                  ></button>
                </li>
              </ul>
              <h5 className="detailsContainerTwo__selectTitle">
                SELECT SIZE (INCHES)
              </h5>
              <ul className="selectSize__list">
                <ColorListItem
                  size={"OSFA"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
                <ColorListItem
                  size={"W26"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
                <ColorListItem
                  size={"W27"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
                <ColorListItem
                  size={"W28"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
                <ColorListItem
                  size={"W29"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                  isDisabled={true}
                />
                <ColorListItem
                  size={"W30"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
                <ColorListItem
                  size={"W31"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
                <ColorListItem
                  size={"W32"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
                <ColorListItem
                  size={"W33"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
                <ColorListItem
                  size={"W34"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                  isDisabled={true}
                />
              </ul>
              <ul className="selectSize__list" id="selectSizeLast">
                <ColorListItem
                  size={"W35"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
                <ColorListItem
                  size={"W36"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
                <ColorListItem
                  size={"W38"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
                <ColorListItem
                  size={"W40"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
                <ColorListItem
                  size={"W42"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
                <ColorListItem
                  size={"W44"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
                <ColorListItem
                  size={"W46"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
                <ColorListItem
                  size={"W48"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
                <ColorListItem
                  size={"W50"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                  isDisabled={true}
                />
                <ColorListItem
                  size={"W52"}
                  activeSize={activeSize}
                  setActiveSize={setActiveSize}
                />
              </ul>
              <div className="preCheckContainer">
                <div className="preCheckContainer__quantityContainer">
                  <h5 className="detailsContainerTwo__selectTitle">QUANTITY</h5>
                  <div className="quantityContainer__selectAmountContainer">
                    <QuantitySelector />
                  </div>
                </div>
                <div className="preCheckContainer__priceContainer">
                  <h5 className="detailsContainerTwo__selectTitle">
                    PRICE TOTAL
                  </h5>
                  <h5
                    className="detailsContainerTwo__selectTitle"
                    id="quantitySelectorTotal"
                  >
                    90.00 EUR
                  </h5>
                </div>
              </div>
              <div className="addOrSaveContainer">
                <button className="addOrSave-btn" id="addOrSave-btnBlack">
                  <span className="addOrSave-text" id="btnBlack-text">
                    ADD TO BAG
                  </span>
                </button>
                <button className="addOrSave-btn" id="addOrSave-btnWhite">
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00645 11.3016L8.00637 11.3016L8.00279 11.305L7.9966 11.3109L7.98611 11.3018L7.98604 11.3017C6.27421 9.8204 4.85966 8.59596 3.87216 7.49453C2.88329 6.39158 2.3398 5.43014 2.3398 4.47652C2.3398 3.16287 3.37051 2.17325 4.7598 2.17325C5.83254 2.17325 6.87305 2.83937 7.23763 3.73157L7.26304 3.79374H7.3302H8.6694H8.73657L8.76197 3.73157C9.12655 2.83937 10.1671 2.17325 11.2398 2.17325C12.6291 2.17325 13.6598 3.16287 13.6598 4.47652C13.6598 5.43012 13.1163 6.39156 12.1266 7.4945C11.1382 8.59591 9.72186 9.82036 8.00645 11.3016ZM7.9998 1.98089C7.19582 1.13432 6.00223 0.599951 4.7598 0.599951C2.49162 0.599951 0.699805 2.29501 0.699805 4.47652C0.699805 5.80531 1.329 7.00551 2.41138 8.26838C3.49282 9.53017 5.03843 10.8677 6.89039 12.4692L7.93425 13.3755L7.9998 13.4324L8.06536 13.3755L9.10922 12.4692C10.9612 10.8677 12.5068 9.53017 13.5882 8.26838C14.6706 7.00551 15.2998 5.80531 15.2998 4.47652C15.2998 2.29501 13.508 0.599951 11.2398 0.599951C9.99738 0.599951 8.80379 1.13432 7.9998 1.98089Z"
                      fill="#3F3F3F"
                      stroke="#3F3F3F"
                      stroke-width="0.2"
                    />
                  </svg>
                  <span className="addOrSave-text" id="btnWhite-text">
                    SAVE
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
                      stroke-width="2.4"
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
        )
      )}
    </>
  );
};

export default ProductDetail;
