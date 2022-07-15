import React,{useState,useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "./style.css";

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    const data = {email: email, password: password}
    try {
      const res = await axios.post('http://192.168.0.102:8080/users/login',data)
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
              type="text"
              className="login__container-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
