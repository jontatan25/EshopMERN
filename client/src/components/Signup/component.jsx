import React from "react";
import "./style.css";

const Signup = () => {
  
  let redirect_fb = (e) => {
    e.preventDefault();
    console.log("Signup");
  };
  return (
    <>
      <div className="signupContainer">
        <div className="signup__container">
          <h3>Register</h3>
          <form id="signupForm" action="">
            <input
              type="text"
              className="signup__container-input"
              placeholder="Email"
            />
            <input
              type="text"
              className="signup__container-input"
              placeholder="Password"
            />
            <input
              type="text"
              className="signup__container-input"
              placeholder="Username"
            />
            <input
              type="text"
              className="signup__container-input"
              placeholder="Address"
            />
            <button
              type="submit"
              onClick={redirect_fb}
              className="signup__form-btn"
              value="Signup"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
