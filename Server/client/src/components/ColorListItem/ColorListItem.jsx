import React from "react";
import "./style.css";

const ColorListItem = ({ size, activeSize, setActiveSize, isDisabled }) => {
  return (
    <li className="selectSize__listItem">
      {isDisabled ? (
        <button className="selectSize__listItem-btn -disabledBtn" disabled>
          <h5 className="selectSize__listItem-text ">{size}</h5>
          
        </button>
      ) : (
        <button
          className={
            activeSize === size
              ? "selectSize__listItem-btn -activeSizeBtn -inactive"
              : "selectSize__listItem-btn"
          }
          onClick={() => setActiveSize(size)}
        >
          <h5
            className={
              activeSize === size
                ? "selectSize__listItem-text -activeSizeText"
                : "selectSize__listItem-text"
            }
          >
            {size}
          </h5>
        </button>
      )}
    </li>
  );
};

export default ColorListItem;
