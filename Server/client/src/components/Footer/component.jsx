import React from "react";
import "./style.css";
import logo from "../../images/logo/logo-white.svg";
import fbLogo from "../../images/logo/fblogo.svg";
import twtLogo from "../../images/logo/twtlogo.svg";
import itLogo from "../../images/logo/itlogo.svg";
import btnCheck from "../../images/btn/check.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="home__footer-container">
        <ul className="advantages__list">
          <li className="advantages__list-item">
            <img
              className="advantages__check"
              src={btnCheck}
              alt="Duties and
          Taxes Guaranteed"
            ></img>{" "}
            Duties and Taxes Guaranteed
          </li>
          <li className="advantages__list-item">
            <img
              className="advantages__check"
              src={btnCheck}
              alt="Free Express
          Shipping"
            ></img>
            Free Express Shipping
          </li>
          <li className="advantages__list-item">
            <img
              className="advantages__check"
              src={btnCheck}
              alt="Customer Love"
            ></img>
            Customer Love
          </li>
          <li className="advantages__list-item">
            <img
              className="advantages__check"
              src={btnCheck}
              alt="Easy Returns"
            ></img>
            Easy Returns
          </li>
          <li className="advantages__list-item">
            <img
              className="advantages__check"
              src={btnCheck}
              alt="Secure Payment"
            ></img>
            Secure Payment
          </li>
        </ul>
        <ul className="footer__list">
          <li className="footer__list-item">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </li>
          <li className="footer__list-item">
            <h4 className="footer__list-item-title">BRANDS</h4>
            <ul className="item__sublist">
              <Link to="/products?filterProducts=chanel">
                <li className="sublist__item">CHANEL</li>
              </Link>
              <Link to="/products?filterProducts=burberry">
                <li className="sublist__item">BURBERRY</li>
              </Link>
              <Link to="/products?filterProducts=dior">
                <li className="sublist__item">DIOR</li>
              </Link>
              <Link to="/products?filterProducts=fendi">
                <li className="sublist__item">FENDI</li>
              </Link>
              <Link to="/products?filterProducts=versace">
                <li className="sublist__item">VERSACE</li>
              </Link>
              <Link to="/products?filterProducts=gucci">
                <li className="sublist__item">GUCCI</li>
              </Link>
              <Link to="/products?filterProducts=armani">
                <li className="sublist__item">ARMANI</li>
              </Link>
            </ul>
          </li>
          <li className="footer__list-item">
            <h4 className="footer__list-item-title">MENU</h4>
            <ul className="item__sublist">
              <Link to="/">
                <li className="sublist__item">HOME</li>
              </Link>
              <Link to="/products">
                <li className="sublist__item">SHOP</li>
              </Link>
              <Link to="/blog">
                <li className="sublist__item">BLOG</li>
              </Link>
              <Link to="/cart">
                <li className="sublist__item">MY BAG</li>
              </Link>
              <Link to="/wishlist">
                <li className="sublist__item">MY WISHLIST</li>
              </Link>
            </ul>
          </li>
          <li className="footer__list-item">
            <h4 className="footer__list-item-title">CONTACT US</h4>
            <ul className="item__sublist">
              <li className="sublist__item sublist__item-contact">
                <h5 className="sublist__item-title">ADDRESS:</h5>
                <span className="sublist__item-text">
                  123 STREET NAME, CITY, ENGLAND
                </span>
              </li>
              <li className="sublist__item sublist__item-contact">
                <h5 className="sublist__item-title">PHONE:</h5>
                <span className="sublist__item-text">(123) 456-7890</span>
              </li>
              <li className="sublist__item sublist__item-contact">
                <h5 className="sublist__item-title">EMAIL:</h5>
                <span className="sublist__item-text">MAIL@EXAMPLE.COM</span>
              </li>
              <li className="sublist__item sublist__item-contact">
                <h5 className="sublist__item-title">WORKING DAYS/HOURS:</h5>
                <span className="sublist__item-text">
                  MON - SUN / 9:00AM - 8:00PM
                </span>
              </li>
            </ul>
          </li>
          <li className="footer__list-item">
            <h4 className="footer__list-item-title">FOLLOW US</h4>
            <ul className="item__sublist">
              <Link to="">
                <li className="sublist__item sublist__item-follow">
                  <img
                    className="sublist__logo"
                    src={fbLogo}
                    alt="facebook logo"
                  />
                  <span className="sublist__item-text sublist__item-text-social">FACEBOOK</span>
                </li>
              </Link>
              <Link to="">
                <li className="sublist__item sublist__item-follow">
                  <img
                    className="sublist__logo"
                    src={twtLogo}
                    alt="twitter logo"
                  />
                  <span className="sublist__item-text sublist__item-text-social">TWITTER</span>
                </li>
              </Link>
              <Link to="">
                <li className="sublist__item sublist__item-follow">
                  <img
                    className="sublist__logo"
                    src={itLogo}
                    alt="instagram logo"
                  />
                  <span className="sublist__item-text sublist__item-text-social">INSTAGRAM</span>
                </li>
              </Link>
            </ul>
          </li>
          <li className="footer__list-item">
            <h4 className="footer__list-item-title">JOIN US</h4>
            <ul className="item__sublist">
              <li className="sublist__item sublist__item-join">
                <span className="sublist__item-text">
                  SUBSCRIBE TO OUR NEWSLETTER
                </span>
              </li>
              <li className="sublist__item">
                <input
                  className="sublist__item-email"
                  placeholder="Email Adress"
                  type="email"
                />
                <button className="sublist__item-btn">SUBSCRIBE!</button>
              </li>
            </ul>
          </li>
        </ul>
        <div className="home__footer-credits">
          <h5 className="footer__credits-info">
            © 2019. Crisp theme Developed by Belvg
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
