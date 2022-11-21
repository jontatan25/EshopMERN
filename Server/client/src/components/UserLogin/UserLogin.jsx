import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../CartContext/context";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";

import "./style.css";

import axios from "axios";
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'https://jhonndevshop.vercel.app/api/'

const UserLogin = () => {
  const { showLogin, setShowLogin, setLoggedIn } = useCartContext();
  const [visible, setVisible] = useState(false);
  const [info, setInfo] = useState([
    {
      email: "",
      password: "",
    },
  ]);
  const navigate = useNavigate();

  const closeAndRedirect = () => {
    setShowLogin(!showLogin);
    navigate("/register");
  };
  const handleTogglePassword = () => {
    setVisible(!visible);
  };

  const updateInfo = (e) => {
    const nameOfProperty = e.target.name;
    const newValue = e.target.value;
    const newInfo = [...info];
    newInfo[0][nameOfProperty] = newValue;
    setInfo(newInfo);
  };
  const resetInfo = (e) => {
    const resetEmail = "";
    const resetPassword = "";
    const newInfo = [...info];
    newInfo[0].email = resetEmail;
    newInfo[0].password = resetPassword;
    setInfo(newInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = info[0]
    Swal.fire({
      title: "Logging in, please wait...",
      didOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
    });
    try {
       const res = await axios.post(`${API_ENDPOINT}/users/login`,data)
       console.log(res.data)
      if (res.data.success === true) {
        resetInfo()
        Swal.fire({
          icon: "success",
          title: "Log In Successfull",
          showConfirmButton: false,
          timer: 2000,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false,
        }).then(() => {
          Swal.close();
          Swal.fire({
            title: "You are being redirected.",
            text: "Please wait ...",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
          }).then(() => navigate("/"));
        })
        localStorage.setItem("user", JSON.stringify(res.data.token))
        navigate("/")
        setShowLogin(false)
        setLoggedIn(true)

      } else {
        const rejectReason = res.data.reason;
        Swal.close();
        Swal.fire({
          icon: "error",
          title: "ERROR",
          text: rejectReason,
        });
      }
    } catch (error) {
      console.log(error)
      Swal.close();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: error,
      });
    }
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
      <form
        className="login__form"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          className="login__field"
          placeholder="Email"
          id="login-em"
          name="email"
          value={info.email}
          onChange={(e) => {
            updateInfo(e);
          }}
          required
        />
        <div className="userLogin__vision-container">
          <input
            type={visible ? "text" : "password"}
            className="login__field"
            placeholder="Password"
            id="login-pa"
            name="password"
            value={info.password}
            onChange={(e) => {
              updateInfo(e);
            }}
            required
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
        <button type="submit" className="login__btn ">
          SIGN IN
        </button>
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
