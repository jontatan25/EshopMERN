import { React, createContext, useContext, useState } from "react";
// import Swal from "sweetalert2";

const CartContext = createContext([]);
// avoiding to import Usecontext everywhere
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([])
  const [data, setData] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false)

  const addProduct = (productWithOptions) => {
    const productIndex = cart.findIndex(
      (product) => product._id === productWithOptions._id
    );

    if (productIndex === -1) {
      const updatedCart = [...cart];
      updatedCart.push(productWithOptions);
      setCart(updatedCart);
    } else {
      const updatedCart = [...cart];
      updatedCart[productIndex] = productWithOptions;
      setCart(updatedCart);
    }
  };

  const updateItemQuantity = (productID, newquantity) => {
    const productIndex = cart.findIndex(
      (product) => product._id === productID
    );
    const updatedCart = [...cart];
    updatedCart[productIndex].quantity = newquantity;
    setCart(updatedCart);
  };

  const deleteItemByID = (productID) => {
      const updatedCart = cart.filter(product => product._id != productID)
      setCart(updatedCart);
  }
  const deleteAllFromCart = () => {
      const updatedCart = []
      setCart(updatedCart);
  }

  const addToWishlist = (productWithOptions) => {
    const productIndex = wishlist.findIndex(
      (product) => product._id === productWithOptions._id
    );

    if (productIndex === -1) {
      const updatedWishlist = [...wishlist];
      updatedWishlist.push(productWithOptions);
      setWishlist(updatedWishlist);
    } else {
      const updatedWishlist = [...wishlist];
      updatedWishlist[productIndex] = productWithOptions;
      setWishlist(updatedWishlist);
    }
  };

  const deleteItemByIDWishlist = (productID) => {
    const updatedWishlist = wishlist.filter(product => product._id != productID)
    setWishlist(updatedWishlist);
}

const deleteAllFromWishlist = () => {
  const updatedWishlist = []
  setWishlist(updatedWishlist);
}
  // const deleteItem = (id) => {
  //     Swal.fire({
  //         title: "Are you sure?",
  //         text: "You are about to delete this item from the cart",
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonColor: "#3085d6",
  //         cancelButtonColor: "#d33",
  //         confirmButtonText: "Yes, delete it!",
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //             setCart(cart.filter((item) => item.id !== id));
  //             Swal.fire("Deleted!", "Your file has been deleted.", "success");
  //         }
  //       });
  // }
  // const deleteAll = () => {
  //     Swal.fire({
  //         title: "Are you sure?",
  //         text: "You are about to delete all the items from the cart",
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonColor: "#3085d6",
  //         cancelButtonColor: "#d33",
  //         confirmButtonText: "Yes, delete all!",
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //             setCart([]);
  //             Swal.fire("Deleted!", "Your cart is now empty.", "success");
  //         }
  //       });
  // }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        data,
        setData,
        addProduct,
        updateItemQuantity,
        deleteItemByID,
        deleteAllFromCart,
        showLogin,setShowLogin,
        wishlist,setWishlist,
        addToWishlist,
        deleteItemByIDWishlist,
        deleteAllFromWishlist,
        loggedIn,setLoggedIn,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
