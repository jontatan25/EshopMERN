import React from "react";
import "./style.css";
import logo from "../../images/logo/logo-white.svg";
import fbLogo from "../../images/logo/fblogo.svg";
import twtLogo from "../../images/logo/twtlogo.svg";
import itLogo from "../../images/logo/itlogo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="home__footer-container">
        <ul className="footer__list">
          <li className="footer__list-item">
            <img src={logo} alt="" />
          </li>
          <li className="footer__list-item">
            <h4 className="footer__list-item-title">FEATURES</h4>
            <ul className="item__sublist">
              <li className="sublist__item">MEN</li>
              <li className="sublist__item">WOMEN</li>
              <li className="sublist__item">BOYS</li>
              <li className="sublist__item">GIRLS</li>
              <li className="sublist__item">NEW ARRIVALS</li>
              <li className="sublist__item">SHOES</li>
              <li className="sublist__item">CLOTHES</li>
              <li className="sublist__item">ACCESORIES</li>
            </ul>
          </li>
          <li className="footer__list-item">
            <h4 className="footer__list-item-title">MENU</h4>
            <ul className="item__sublist">
              <li className="sublist__item">ABOUT US</li>
              <li className="sublist__item">CONTACT US</li>
              <li className="sublist__item">MY ACCOUNT</li>
              <li className="sublist__item">ORDER HISTORY</li>
              <li className="sublist__item">MY WISHLIST</li>
              <li className="sublist__item">BLOG</li>
              <li className="sublist__item">LOGIN</li>
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
              <li className="sublist__item sublist__item-follow">
                <img
                  className="sublist__logo"
                  src={fbLogo}
                  alt="facebook logo"
                />
                <span className="sublist__item-text">FACEBOOK</span>
              </li>
              <li className="sublist__item sublist__item-follow">
                <img
                  className="sublist__logo"
                  src={twtLogo}
                  alt="twitter logo"
                />
                <span className="sublist__item-text">TWITTER</span>
              </li>
              <li className="sublist__item sublist__item-follow">
                <img
                  className="sublist__logo"
                  src={itLogo}
                  alt="instagram logo"
                />
                <span className="sublist__item-text">INSTAGRAM</span>
              </li>
            </ul>
          </li>
          <li className="footer__list-item">
            <h4 className="footer__list-item-title">JOIN US</h4>
            <ul className="item__sublist">
              <li className="sublist__item sublist__item-join">
                <span className="sublist__item-text">SUBSCRIBE TO OUR NEWSLETTER</span>
              </li>
              <li className="sublist__item">
                <input className="sublist__item-email" placeholder="Email Adress" type="email"/>
                <button className="sublist__item-btn">SUBSCRIBE!</button>
              </li>
              
            </ul>
          </li>
        </ul>
        <div className="home__footer-credits">
          <h5 className="footer__credits-info">© 2019. Crisp theme Developed by Belvg</h5>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
