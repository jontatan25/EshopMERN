import React from "react";
import { useNavigate } from 'react-router-dom'

import "./style.css";

const Logout = () => {
  const navigate= useNavigate()
  let handleLogout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    alert("User logged out");
   navigate("/login");
  };
  return (
    <div className="logoutContainer">
      <button className="logoutContainer__btn" onClick={handleLogout}>
        Press Here to Log out
      </button>
    </div>
  );
};

export default Logout;
