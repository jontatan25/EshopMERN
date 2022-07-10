import React from 'react'
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import NavigationBar from "../NavigationBar/component";
import HomeContainer from "../Home/component";
import Login from "../Login/component"

import "./style.css";
function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<HomeContainer />}></Route>
        <Route path="/login" element={<Login />}></Route>
        {/* <Route path="/loginfb" element={<LoginFacebook />}></Route>
        <Route
          path="/datos"
          element={user ? <ProfileDetails /> : <Navigate to="/login" />}
        ></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
