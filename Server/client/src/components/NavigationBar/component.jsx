import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import logo from "../../images/logo/logo.svg";
import { useCartContext } from "../CartContext/context";

const NavigationBar = () => {
  const {showLogin, setShowLogin} = useCartContext()
  return (
    <>
      <div className="header__Container">
        <div className="nav__logo">
          <NavLink to="/">
            <img className="nav-logo__img" src={logo} alt="img" />
          </NavLink>
        </div>
        <nav className="nav">
          <ul className="nav__navList">
            <li className="nav__listItem" >
              <NavLink className={(navData) => navData.isActive ? "active" : "nav-link" }
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav__listItem" >
              <NavLink className={(navData) => navData.isActive ? "active" : "nav-link" } to="/login">
                SIGN&nbsp;IN
              </NavLink>
            </li>
            <li className="nav__listItem" >
              <NavLink className={(navData) => navData.isActive ? "active" : "nav-link" } to="/signup">
                CREATE&nbsp;AN&nbsp;ACCOUNT
              </NavLink>
            </li>
            <li className="nav__listItem" >
              <NavLink className={(navData) => navData.isActive ? "active" : "nav-link" } to="/Chat">
                CHAT
              </NavLink>
            </li>
            <li className="nav__listItem" >
              <NavLink className={(navData) => navData.isActive ? "active" : "nav-link" } to="/Products">
                PRODUCTS
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="nav__login-container">
          <ul className="nav__login-list">
            <li className="nav__listItem">            
                <button className="nav__link-login" onClick={() =>{
                  setShowLogin(!showLogin)
                }}>SIGN&nbsp;IN</button>
            </li>
            <li className="nav__listItem">
              <NavLink className="nav-link" to="/register">
                CREATE&nbsp;AN&nbsp;ACCOUNT
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
