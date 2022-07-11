import React from 'react'
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import NavigationBar from "../NavigationBar/component";
import HomeContainer from "../Home/component";
import Login from "../Login/component"
import Signup from '../Signup/component';

import "./style.css";
import Chat from '../Chat/component';
import Products from '../Products/component';
function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<HomeContainer />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/chat" element={<Chat messagesToGet = "messages"/>}></Route>
        <Route path="/chat/email" element={<Chat messagesToGet = "email"/>}></Route>
        <Route path="/products" element={<Products/>}></Route>
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
