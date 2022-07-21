import React, { useState, useEffect } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [eyeActive, seteyeActive] = useState(false);
  const [eyeActiveConfirm, seteyeActiveConfirm] = useState(false);
  const navigate = useNavigate();
  let handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = {
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      username: username,
      address: address,
    };
    console.log(data)
    try {
      const res = await axios.post(
        "https://mern-eshop-espitia-jonathans.herokuapp.com/users/signup",
        data
      );
      console.log(res)
      if (res.data.success === true) {
        alert("User Created, Redirecting to Login Page...");
        navigate("/login");
      } else alert(res.data.reason);
    } catch (error) {
      console.log(error);
    }
  };
  const getUser = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/products");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleToggle = () => {
    seteyeActive(!eyeActive);
  };
  const handleToggleConfirm = () => {
    seteyeActiveConfirm(!eyeActiveConfirm);
  };

  return (
    <>
      <div className="signup__container">
        <div className="signup__formContainer">
          <h3>Register</h3>
          <form id="signupForm" onSubmit={handleSubmit}>
            <input
              type="email"
              className="signup__formContainer-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="signup__formContainer-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              className="signup__formContainer-input"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type={eyeActive?"text":"password"}
              className="signup__formContainer-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {eyeActive ? (
              <AiOutlineEye
                onClick={handleToggle}
                size="20px"
                color="#808080"
                className="signup__formContainer-fa-eye"
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={handleToggle}
                size="20px"
                color="#808080"
                className="signup__formContainer-fa-eye"
              />
            )}
            <input
              type={eyeActiveConfirm?"text":"password"}
              className="signup__formContainer-input"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
             {eyeActiveConfirm ? (
              <AiOutlineEye
                onClick={handleToggleConfirm}
                size="20px"
                color="#808080"
                className="signup__formContainer-fa-eye fa-eye-confirm"
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={handleToggleConfirm}
                size="20px"
                color="#808080"
                className="signup__formContainer-fa-eye fa-eye-confirm"
              />
            )}
            <button type="submit" className="signup__form-btn" value="submit">
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
