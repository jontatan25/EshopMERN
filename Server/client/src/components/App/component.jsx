import {React,useState, useEffect} from "react";

import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";

import axios from "axios";

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
import Catalog from "../../pages/Catalog";
function App() {

  const [products, setProducts] = useState("");
  const [loading,setLoading] = useState(true)

  let getAllProducts = async () => {
    try {
      const res = await axios.get(
        // `https://mern-eshop-espitia-jonathans.herokuapp.com/products/id/${id}`,
        // {
        //   headers: { Authorization: `Bearer ${token}` },
        // }
        "http://192.168.0.105:8080/products",
        {
          headers: {
            Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjJkN2M0NzQwM2I0ZGE0ZGI4ZGZjMzEwIiwiaWF0IjoxNjY2MjU0MDQ4LCJleHAiOjE2NjYyODQwNDh9.HFcu1vGdhipD3laWXDXTpivVpmhkOsd5dXXhXh4VALQ"}`,
          },
        }
      );
      return res.data.products;
    } catch (error) {
      console.log(error);
    } finally {setLoading(false);}
  };

  useEffect(() => {
    const initProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    initProducts();
  }, []);
  
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomeContainer/>}></Route>
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
          <Route path="/products" element={<Catalog products = {products} loading = {loading}/>}></Route>
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
