import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../CartContext/context";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./style.css";

const UserLogin = () => {
  const { showLogin, setShowLogin } = useCartContext();
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const closeAndRedirect = () => {
    setShowLogin(!showLogin);
    navigate("/register");
  };
  const handleTogglePassword = () => {
    setVisible(!visible);
  };

  return (
    <div
      className={
        !showLogin
          ? "login__container"
          : "login__container login__container-active"
      }
    >
      <button
        className="login__btn-close"
        onClick={() => {
          setShowLogin(!showLogin);
        }}
      >
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L22 22M22 1L1 22" stroke="#C4C4C4" strokeWidth="2" />
        </svg>
      </button>
      <h4 className="login__title">LOGIN YOUR ACCOUNT</h4>
      <form action="" className="login__form">
        <input
          type="text"
          className="login__field"
          placeholder="Email"
          id="login-em"
        />
        <div className="userLogin__vision-container">
        <input
          type={visible?"text":"password"}
          className="login__field"
          placeholder="Password"
          id="login-pa"
          />
           {visible ? (
                  <AiOutlineEye
                    onClick={handleTogglePassword}
                    size="24px"
                    fill="#3F3F3F"
                    className="signup__formContainer-fa-eye"
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={handleTogglePassword}
                    size="24px"
                    fill="#3F3F3F"
                    className="signup__formContainer-fa-eye"
                  />
                )}
          </div>
        <span className="login__ag-container">
          <input type="checkbox" className="login__agreement" id="login__ag" />
          <label htmlFor="login__ag" className="login__ag-text">
            By using this form you agree with the storage and handling of your
            data by this website.
          </label>
        </span>
        <button className="login__btn ">SIGN IN</button>
        <Link to="/register">
          <button
            className="login__btn login__btn-createAcc"
            onClick={() => {
              closeAndRedirect();
            }}
          >
            CREATE AN ACCOUNT
          </button>
        </Link>
      </form>
    </div>
  );
};

export default UserLogin;
