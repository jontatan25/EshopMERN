import React from "react";
import "./LoadingSpinnercss.css"


const LoadingSpinner = () => {
  return (
    <div class="container">
      <div class="spinner">
        <div class="spinner-item"></div>
        <div class="spinner-item"></div>
        <div class="spinner-item"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
