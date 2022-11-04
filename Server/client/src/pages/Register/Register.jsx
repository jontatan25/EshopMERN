import React, { useState } from "react";
import "./style.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
  const [eyeActive, seteyeActive] = useState(false);
  const [confirmationActive, setConfirmationActive] = useState(false);

  const handleTogglePassword = () => {
    seteyeActive(!eyeActive);
  };

  const handleToggleConfirm = () => {
    setConfirmationActive(!confirmationActive);
  };
  return (
    <>
      <h5 className="register__url">Home / Register</h5>
      <h3 className="register__title">Create a New Account</h3>
      <div className="register__container">
        <div className="register__info-container">
          <form action="">
            <h4 className="register__form-title">Personal Information</h4>
            <div className="register__field">
              <label htmlFor="username" className="register__lb">
                Username <span>*</span>
              </label>
              <input type="text" className="register__in" id="username" />
            </div>
            <div className="register__field">
              <label htmlFor="email" className="register__lb">
                Email <span>*</span>
              </label>
              <input type="email" className="register__in" id="email" />
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
              <div className="register__vision-container">
                <input
                  type={confirmationActive ? "text" : "password"}
                  className="register__in"
                  id="confirm-password"
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
