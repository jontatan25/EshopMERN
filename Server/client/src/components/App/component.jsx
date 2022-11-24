import React from "react";

import { Route, BrowserRouter, Routes } from "react-router-dom";

import NavigationBar from "../NavigationBar/component";
import HomeContainer from "../Home/component";

import "./style.css";

import CartContextProvider from "../CartContext/context";
import Logout from "../Logout/component";
import Catalog from "../../pages/Catalog";
import Footer from "../Footer/component";
import ProductDetail from "../../pages/ProductDetail/ProductDetail";
import ShoppingCart from "../../pages/ShoppingCart/ShoppingCart";
import Blog from "../../pages/Blog/Blog";
import UserLogin from "../UserLogin/UserLogin";
import Wishlist from "../Wishlist/Wishlist";
import Register from "../../pages/Register/Register";
import Search from "../../pages/Search/Search";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavigationBar />
        <UserLogin />
        <Routes>
          <Route path="/" element={<HomeContainer />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/products" element={<Catalog />}></Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<ShoppingCart />}></Route>
          <Route path="/wishlist" element={<Wishlist />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/search" element={<Search />}></Route>
        
          {/* <Route path="/loginfb" element={<LoginFacebook />}></Route>
        <Route
          path="/datos"
          element={user ? <ProfileDetails /> : <Navigate to="/login" />}
        ></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
