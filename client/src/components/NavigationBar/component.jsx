import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const NavigationBar = () => {

  return (
    <>
      <div className="navContainer">
        <nav className="nav">
          <ul className="nav navList">
            <li>
              <Link className="navContainer__Link" to="/">Home</Link>
            </li>
            <li>
              <Link className="navContainer__Link" to="/login">login</Link>
            </li>
            <li>
              <Link className="navContainer__Link" to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link className="navContainer__Link" to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;
