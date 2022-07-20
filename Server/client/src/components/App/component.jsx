import React from "react";

import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import NavigationBar from "../NavigationBar/component";
import HomeContainer from "../Home/component";
import Login from "../Login/component";
import Signup from "../Signup/component";

import "./style.css";
import Chat from "../Chat/component";
import Products from "../Products/component";
import Cart from "../Cart/component";
import Logout from "../Logout/component";

import CartContextProvider,{useCartContext} from "../CartContext/context";
import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";
function App() {
  
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomeContainer />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route
            path="/chat"
            element={<Chat/>}
          ></Route>
          <Route
            path="/chat/:email"
            element={<Chat/>}
          ></Route>     
          <Route path="/products" element={<Products />}></Route>
          <Route path="/product/:id" element={<ItemDetailContainer/>}></Route>
          <Route
            path="/products/category/:category"
            element={<Products/>}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          {/* <Route path="/loginfb" element={<LoginFacebook />}></Route>
        <Route
          path="/datos"
          element={user ? <ProfileDetails /> : <Navigate to="/login" />}
        ></Route> */}
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
