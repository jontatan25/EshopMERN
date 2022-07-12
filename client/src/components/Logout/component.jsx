import React from "react";
import "./style.css";

const Logout = () => {
  let handleLogout = async (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    alert("User logged out");
    window.open("http://192.168.0.104:3000/login", "_self");
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
