
import {React,createContext,useContext,useState} from 'react';
import Swal from "sweetalert2";

const CartContext = createContext([]);
// avoiding to import Usecontext everywhere
export const useCartContext =  ()  => useContext(CartContext);


const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [data, setData] = useState([]);
    
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
        <CartContext.Provider value={{
            cart,setCart,
            data,setData,
            // deleteItem,deleteAll
        }}>
            {children}
        </CartContext.Provider>
  )
}

export default CartContextProvider;