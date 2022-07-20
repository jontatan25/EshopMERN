import {React,useEffect} from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddToCart = ({ item, cart, setCart, quantity}) => {

  let navigate = useNavigate();
  let Onadd = (item) => {
    let addItem = {
      title: item.title,
      category: item.category,
      description: item.description,
      id: item.id,
      image: item.image,
      price: item.price,
      cantidad: quantity,
    };

    const index = cart.findIndex(
      (productToFind) => productToFind.id === item.id
    );
    
    if (index === -1){
        setCart([...cart, addItem]);
        console.log("Not found, adding");
    }
     else {
        let copyCart = [...cart];
        copyCart[index] = addItem
        setCart(copyCart);
        console.log("replaced");
    }
    Swal.fire({
      title: "Success",
      text: "The item has been added to your Cart",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "blue",
      confirmButtonText: "Continue Shopping",
      cancelButtonText: 'Go to Cart',
    }).then((result) => {
      if (result.isConfirmed) {
          navigate("/");
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        navigate("/cart");
      }
    });  
};

useEffect(() => {
    console.log(cart)
            }
, [cart])

  return (
    <div>
      <button
        onClick={() => Onadd(item)}
        className="itemDetail__container-right-properties-button"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default AddToCart;
