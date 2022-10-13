import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import logo from "../../images/logo/logo.svg"

const NavigationBar = () => {
  return (
    <>
      <div className="header__Container">
        <div className="nav__logo">
          <img
            className="nav-logo__img"
            src={logo}
            alt="img"
          />
        </div>
        <nav className="nav">
          <ul className="nav navList">
            <li>
              <Link className="navContainer__Link" to="/">
                HOME
              </Link>
            </li>
            <li>
              <Link className="navContainer__Link" to="/login">
                SIGN&nbsp;IN
              </Link>
            </li>
            <li>
              <Link className="navContainer__Link" to="/signup">
                CREATE&nbsp;AN&nbsp;ACCOUNT
              </Link>
            </li>
            <li>
              <Link className="navContainer__Link" to="/Chat">
                CHAT
              </Link>
            </li>
            <li>
              <Link className="navContainer__Link" to="/Products">
                PRODUCTS
              </Link>
            </li>
          </ul>
        </nav>
        <div className="nav__login">
          <ul className="nav navList login">
            <li>
              <Link className="navContainer__Link" to="/login">
                SIGN&nbsp;IN
              </Link>
            </li>
            <li>
              <Link className="navContainer__Link" to="/signup">
                CREATE&nbsp;AN&nbsp;ACCOUNT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
