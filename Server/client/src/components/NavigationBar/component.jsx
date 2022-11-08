import React from "react";
import { NavLink} from "react-router-dom";
import "./style.css";
import logo from "../../images/logo/logo.svg";
import { useCartContext } from "../CartContext/context";

import Swal from "sweetalert2";

const NavigationBar = () => {
  const { showLogin, setShowLogin, cart, loggedIn, setLoggedIn } =
    useCartContext();

  const confirmLogout = () => {
    Swal.fire({
      title: "Do you want to Log Out?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Log Out",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("user");
        setLoggedIn(false);
        Swal.fire({
          icon: "success",
          title: "Log Out Successfull",
          showConfirmButton: false,
          timer: 2000,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        }).then(() => {
          Swal.fire({
            title: "You are being redirected.",
            text: "Please wait ...",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
          }).then(() =>  window.location.reload(false));
        });
      }
    });
  };
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
            <li className="nav__listItem">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active" : "nav-link"
                }
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav__listItem">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active" : "nav-link"
                }
                to="/products"
              >
                SHOP
              </NavLink>
            </li>
            <li className="nav__listItem">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active" : "nav-link"
                }
                to="/blog"
              >
                BLOG
              </NavLink>
            </li>
            <li className="nav__listItem">
              <NavLink
                className={(navData) =>
                  navData.isActive ? "active" : "nav-link"
                }
                to="/chat"
              >
                SEARCH
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="nav__login-container">
          <ul className="nav__login-list">
            {!loggedIn && (
              <>
                <li className="nav__listItem">
                  <button
                    className="nav__link-login"
                    onClick={() => {
                      setShowLogin(!showLogin);
                    }}
                  >
                    SIGN&nbsp;IN
                  </button>
                </li>
                <li className="nav__listItem">
                  <NavLink
                    className={(navData) =>
                      navData.isActive ? "active" : "nav-link"
                    }
                    to="/register"
                  >
                    CREATE&nbsp;AN&nbsp;ACCOUNT
                  </NavLink>
                </li>
              </>
            )}

            <li className="nav__listItem" id="nav-heart">
              <NavLink to="/wishlist">
                <button className="nav__wishlist">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="24" height="24" fill="#f4d06f" />
                    <path
                      d="M12.4973 16.3916C11.1933 15.2193 10.1173 14.251 9.36577 13.3802C8.6115 12.5061 8.2 11.7475 8.2 10.9973C8.2 9.96345 8.97936 9.18992 10.025 9.18992C10.8337 9.18992 11.62 9.71225 11.8954 10.4126L11.9204 10.476H11.9885H13.0115H13.0796L13.1046 10.4126C13.38 9.71225 14.1663 9.18992 14.975 9.18992C16.0206 9.18992 16.8 9.96345 16.8 10.9973C16.8 11.7475 16.3885 12.5061 15.6336 13.3801C14.8814 14.251 13.804 15.2192 12.4973 16.3916ZM12.433 18.0743L12.5 18.1347L12.567 18.0743L13.3643 17.355C14.7786 16.0843 15.9607 15.0216 16.7881 14.0187C17.6165 13.0144 18.1 12.0577 18.1 10.9973C18.1 9.25714 16.7232 7.9 14.975 7.9C14.0275 7.9 13.1179 8.31909 12.5 8.98382C11.8821 8.31909 10.9725 7.9 10.025 7.9C8.27676 7.9 6.9 9.25714 6.9 10.9973C6.9 12.0577 7.38348 13.0144 8.21192 14.0187C9.03929 15.0216 10.2214 16.0843 11.6357 17.355L12.433 18.0743Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="0.2"
                    />
                  </svg>
                </button>
              </NavLink>
            </li>
            <li className="nav__listItem">
              <NavLink to="/cart">
                <button id="nav-cart" className="nav__wishlist"></button>
              </NavLink>
              {cart.length > 0 ? (
                <span className="nav__cart-counter"> {cart.length} </span>
              ) : (
                ""
              )}
            </li>
            {loggedIn && (
              <li className="nav__listItem nav__listItem-logout">
                <button
                  className="nav__link-login"
                  onClick={() => {
                    confirmLogout();
                  }}
                >
                  LOG&nbsp;OUT
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
