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
    console.log(activeSize)
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
                <ColorListItem size = {"OSFA"} activeSize = {activeSize} setActiveSize = {setActiveSize}/>
                <ColorListItem size = {"W26"} activeSize = {activeSize} setActiveSize = {setActiveSize}/>
                <ColorListItem size = {"W27"} activeSize = {activeSize} setActiveSize = {setActiveSize}/>
                <ColorListItem size = {"W28"} activeSize = {activeSize} setActiveSize = {setActiveSize}/>
                <ColorListItem size = {"W29"} activeSize = {activeSize} setActiveSize = {setActiveSize} isDisabled = {true}/>
                <ColorListItem size = {"W30"} activeSize = {activeSize} setActiveSize = {setActiveSize}/>
                <ColorListItem size = {"W31"} activeSize = {activeSize} setActiveSize = {setActiveSize}/>
                <ColorListItem size = {"W32"} activeSize = {activeSize} setActiveSize = {setActiveSize}/>
                <ColorListItem size = {"W33"} activeSize = {activeSize} setActiveSize = {setActiveSize}/>
                <ColorListItem size = {"W34"} activeSize = {activeSize} setActiveSize = {setActiveSize} isDisabled = {true}/>
              </ul>
              <ul className="selectSize__list">
              <ColorListItem size = {"W35"} activeSize = {activeSize} setActiveSize = {setActiveSize}/>
              <ColorListItem size = {"W36"} activeSize = {activeSize} setActiveSize = {setActiveSize}/>
              <ColorListItem size = {"W38"} activeSize = {activeSize} setActiveSize = {setActiveSize}/>
              <ColorListItem size = {"W40"} activeSize = {activeSize} setActiveSize = {setActiveSize}/>
              <ColorListItem size = {"W42"} activeSize = {activeSize} setActiveSize = {setActiveSize}/>
              <ColorListItem size = {"W44"} activeSize = {activeSize} setActiveSize = {setActiveSize}/>
              <ColorListItem size = {"W46"} activeSize = {activeSize} setActiveSize = {setActiveSize}/>
              <ColorListItem size = {"W48"} activeSize = {activeSize} setActiveSize = {setActiveSize}/>
              <ColorListItem size = {"W50"} activeSize = {activeSize} setActiveSize = {setActiveSize} isDisabled = {true}/>
              <ColorListItem size = {"W52"} activeSize = {activeSize} setActiveSize = {setActiveSize}/>
              </ul>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default ProductDetail;
