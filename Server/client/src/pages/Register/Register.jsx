import React, { useState } from "react";
import "./style.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const API_ENDPOINT =
  process.env.REACT_APP_API_ENDPOINT ||
  "https://jhonndevelopershop.herokuapp.com/";

const Register = () => {
  const [info, setInfo] = useState([
    {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      address: "",
    },
  ]);
  const navigate = useNavigate();
  const [eyeActive, seteyeActive] = useState(false);
  const [confirmationActive, setConfirmationActive] = useState(false);
  const [wrongPasswordStyle, setwrongPasswordStyle] = useState(false);

  const handleTogglePassword = () => {
    seteyeActive(!eyeActive);
  };

  const handleToggleConfirm = () => {
    setConfirmationActive(!confirmationActive);
  };

  const handleFormChange = (e) => {
    let updatedInfo = [...info];
    updatedInfo[0][e.target.name] = e.target.value;
    setInfo(updatedInfo);
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    const data = info[0];
    if (data.password === data.confirmPassword) {
      Swal.fire({
        title: "Creating your account, please wait...",
        didOpen: () => {
          Swal.showLoading();
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
      });
      async function createAccount() {
        try {
          const res = await axios.post(`${API_ENDPOINT}/users/signup`, data);
          if (res.data.success === true) {
            Swal.close();
            Swal.fire({
              icon: "success",
              title: "Account Created",
              text: "You can now Sign in!",
            }).then(() => {
              Swal.close();
              Swal.fire({
                title: "You are being redirected.",
                text: "Please wait ...",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
              }).then(() => navigate("/"));
            });
          } else {
            const rejectReason = res.data.reason;
            Swal.close();
            Swal.fire({
              icon: "error",
              title: "ERROR",
              text: rejectReason,
              footer: "Please try again",
            });
          }
        } catch (error) {
          console.log(error);
          Swal.close();
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      }
      createAccount();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords Does not match!",
        footer: "Please try again.",
      });
      setwrongPasswordStyle(true);
    }
  };

  return (
    <>
      <h5 className="register__url">Home / Register</h5>
      <h3 className="register__title">Create a New Account</h3>
      <div className="register__container">
        <div className="register__info-container">
          <form onSubmit={handleSubmit}>
            <h4 className="register__form-title">Personal Information</h4>
            <div className="register__field">
              <label htmlFor="username" className="register__lb">
                Username <span>*</span>
              </label>
              <input
                type="text"
                className="register__in"
                id="username"
                name="username"
                onChange={(e) => handleFormChange(e)}
                value={info.username}
                required
              />
            </div>
            <div className="register__field">
              <label htmlFor="email" className="register__lb">
                Email <span>*</span>
              </label>
              <input
                type="email"
                className="register__in"
                id="email"
                name="email"
                onChange={(e) => handleFormChange(e)}
                value={info.email}
                required
              />
            </div>
            <div className="register__field">
              <label htmlFor="password" className="register__lb">
                Password <span>*</span>
              </label>
              <div className="register__vision-container">
                <input
                  type={eyeActive ? "text" : "password"}
                  className="register__in"
                  id="password"
                  name="password"
                  onChange={(e) => handleFormChange(e)}
                  value={info.password}
                  required
                />
                {eyeActive ? (
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
            </div>
            <div className="register__field">
              <label htmlFor="confirm-password" className="register__lb">
                Confirm Password <span>*</span>
              </label>
              <div
                className={
                  wrongPasswordStyle === false
                    ? "register__vision-container"
                    : "register__vision-container register__vision-container-red"
                }
              >
                <input
                  type={confirmationActive ? "text" : "password"}
                  className="register__in"
                  id="confirm-password"
                  name="confirmPassword"
                  onChange={(e) => handleFormChange(e)}
                  value={info.confirmPassword}
                  required
                />
                {confirmationActive ? (
                  <AiOutlineEye
                    onClick={handleToggleConfirm}
                    size="24px"
                    fill="#3F3F3F"
                    className="signup__formContainer-fa-eye"
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={handleToggleConfirm}
                    size="24px"
                    fill="#3F3F3F"
                    className="signup__formContainer-fa-eye"
                  />
                )}
              </div>
            </div>
            <div className="register__field">
              <label htmlFor="address" className="register__lb">
                Address <span>*</span>
              </label>
              <input
                type="text"
                className="register__in"
                id="address"
                name="address"
                onChange={(e) => handleFormChange(e)}
                value={info.address}
                required
              />
            </div>
            <div className="register__btn-container">
              <button type="submit" className="register__btn-create">
                CREATE AN ACCOUNT
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
