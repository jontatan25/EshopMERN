import React from "react";
// import CartCounter from "../Cart/CartCounter";
import "./CartItems.css";
import { ImCross } from "react-icons/im";

import { useCartContext } from "../../../../CartContext/context";

const CartItems = () => {
  // const { cart, setCart,} = useCartContext();


  // const getInfo = async () => {
  //   const res = await axios.get("http://192.168.0.104:8080/products");
  //   setProducts(res.data.products);
  //   setloading(false);
  // };

  // useEffect(() => {
  //   getInfo();
  // }, [search]);


  return (
    <>
      {/* Cart map */}
        <p>no Hay nada en el carro</p>
      
    </>
  );
};

export default CartItems;
