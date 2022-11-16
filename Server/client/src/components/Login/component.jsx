import React,{useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import "./style.css";

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || 'https://jhonndevelopershop.herokuapp.com/'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eyeActive,setEyeActive] = useState(false)

  let handleSubmit = async (e) => {
    e.preventDefault();
    const data = {email: email, password: password}
    try {
      const res = await axios.post(`${API_ENDPOINT}/users/login`,data)
      console.log(res.data)
      if (res.data.success === true) {
        localStorage.setItem("user", JSON.stringify(res.data.token))
        alert("Logged In !")
        navigate("/")
      }
      else alert(res.data.reason)
    } catch (error) {
      console.log(error)
    }
  }
  const handleToggle = () => {
    setEyeActive(!eyeActive)
  }
  
  const getUser = async () => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (user) {
      navigate("/")
    } 
  };
  useEffect(() => {
    getUser();
  }, []);
  
  return (
    <>
      <div className="loginContainer">
        <div className="login__container-social" id="-social">
          <button
            className="login__social-btn"
            value="Login"
          >
            Google
          </button>

          <button    
            className="login__social-btn"
            value="Login"
          >
            Facebook
          </button>
          <button
            className="login__social-btn"
            value="Login"
          >
            GitHub
          </button>
        </div>
        <div className="login__container">
          <h3>Sign in</h3>
          <form id="loginForm" onSubmit= {handleSubmit}>
            <input
              type="email"
              className="login__container-input login__container-input-1"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type={eyeActive?"text":"password"}
              className="login__container-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {eyeActive ? (
              <AiOutlineEye
                onClick={handleToggle}
                size="20px"
                color="#808080"
                className="login__container-input-fa-eye"
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={handleToggle}
                size="20px"
                color="#808080"
                className="login__container-input-fa-eye"
              />
            )}
            <div className="login__form-options">
              <div className="login__form-optionsCheck">
                <input type="checkbox" className="login__form-checkbox" />
                <label htmlFor="login__form-checkbox">Remember me</label>
              </div>
              <p>Forgot Password?</p>
            </div>
            <button
              type="submit"
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
