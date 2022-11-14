import React from "react";
import CarouselItem from "../Carouseltem/CarouselItem";
import { useCartContext } from "../CartContext/context";
import "./style.css";

const Wishlist = () => {

    const {wishlist,deleteAllFromWishlist} = useCartContext()
  
  return (
    <>
      <h5 className="wishlist__url">Home / My Wishlist</h5>
      <h3 className="wishlist__title">My Wishlist</h3>
      <div className="wishlist__container">
        <div className= {(wishlist.length === 1 ) ? "wishlist__products wishlist__single" : "wishlist__products"}>
            {(wishlist.length === 0) ? <h5 className="wishlist__title wishlist__title-empty">YOUR WISHLIST IS EMPTY</h5> 
                :  
                    wishlist && wishlist.map((product)=> ( 
                        <CarouselItem
                            key={product._id}
                            product={product}
                            linkForFilter={true}
                            wishlistMode = {true}
                        /> ))                  
                }
        </div>
        <div className="wishlist__btn-container">
            <button className={(wishlist.length === 0) ? "wishlist__btn-hidden" : "wishlist__btn"}>ADD ALL TO BAG</button>
            <button className={(wishlist.length === 0) ? "wishlist__btn-hidden" : "wishlist__btn wishlist__btn-delAll"} onClick={() => deleteAllFromWishlist()}>DELETE ALL FROM WHISLIST</button>
        </div>
       
      </div>
    </>
  );
};

export default Wishlist;
