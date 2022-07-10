import React from "react";
import "./style.css";

const Login = () => {
  let redirect_gg = (e) => {
    e.preventDefault();
    window.open("http://192.168.0.104:8000/auth/google");
  };
  let redirect_fb = (e) => {
    e.preventDefault();
    window.open("http://192.168.0.104:8000/auth/facebook");
  };
  return (
    <>
      <div className="loginContainer">
        <div className="login__container-social" id="-social">
          <button
            onClick={redirect_gg}
            className="login__social-btn"
            value="Login"
          >
            Google
          </button>

          <button
            onClick={redirect_fb}
            className="login__social-btn"
            value="Login"
          >
            Facebook
          </button>
          <button
            onClick={redirect_fb}
            className="login__social-btn"
            value="Login"
          >
            GitHub
          </button>
        </div>
        <div className="login__container">
          <h3>Sign in</h3>
          <form id="loginForm" action="">
            <input
              type="text"
              className="login__container-input login__container-input-1"
              placeholder="Username"
            />
            <input
              type="text"
              className="login__container-input"
              placeholder="Password"
            />
            <div className="login__form-options">
              <div className="login__form-optionsCheck">
                <input type="checkbox" className="login__form-checkbox" />
                <label for="login__form-checkbox">Remember me</label>
              </div>
              <p>Forgot Password?</p>
            </div>
            <button
              type="submit"
              onClick={redirect_fb}
              className="login__form-btn"
              value="Login"
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
