import React,{useState,useRef} from "react";
import axios from "axios";
import "./style.css";

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    const data = {email: email, password: password, username: username, address: address}
    console.log(data)
    try {
      const res = await axios.post('http://localhost:8080/users/signup',data)
      console.log(res.data)
      if (res.data.success === true) {
        alert("User Created")
      }
      else alert(res.data.reason)
    } catch (error) {
      console.log(error)
    }
  }
  
  
  return (
    <>
    <div className="signup__container">
        <div className="signup__formContainer">
          <h3>Register</h3>
          <form id="signupForm" onSubmit={handleSubmit}>
            <input
              type="text"
              className="signup__formContainer-input"
              placeholder="Email"
              value = {email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              className="signup__formContainer-input"
              placeholder="Password"
              value = {password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              className="signup__formContainer-input"
              placeholder="Username"
              value = {username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="text"
              className="signup__formContainer-input"
              placeholder="Address" 
              value = {address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button
              type="submit"
              className="signup__form-btn"
              value="submit"
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
