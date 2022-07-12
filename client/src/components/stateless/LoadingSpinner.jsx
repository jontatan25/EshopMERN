import React from "react";
import "./LoadingSpinnercss.css"


const LoadingSpinner = () => {
  return (
    <div className="container">
      <div className="spinner">
        <div className="spinner-item"></div>
        <div className="spinner-item"></div>
        <div className="spinner-item"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
