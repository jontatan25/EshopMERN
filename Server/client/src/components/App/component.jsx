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
// import ItemDetailContainer from "../ItemDetail/ItemDetailContainer";

import Catalog from "../../pages/Catalog";
import Footer from "../Footer/component";
import ProductDetail from "../../pages/ProductDetail/ProductDetail";
import ShoppingCart from "../../pages/ShoppingCart/ShoppingCart";
import Blog from "../../pages/Blog/Blog";
function App() {
  
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomeContainer/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          {/* <Route
            path="/chat"
            element={<Chat/>}
          ></Route> */}
          <Route
            path="/chat/:email"
            element={<Chat/>}
          ></Route>     
          <Route path="/products" element={<Catalog/>}></Route>
          <Route path="/products/:id" element={<ProductDetail/>}></Route>
          {/* <Route
            path="/products/category/:category"
            element={<Products/>}
          ></Route> */}
          <Route path="/cart" element={<ShoppingCart />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          {/* <Route path="/loginfb" element={<LoginFacebook />}></Route>
        <Route
          path="/datos"
          element={user ? <ProfileDetails /> : <Navigate to="/login" />}
        ></Route> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
