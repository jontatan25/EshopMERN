import React from 'react'
import { useCartContext } from '../CartContext/context'
import QuantitySelector from '../QuantitySelector/QuantitySelector'



const CartProduct = ({product}) => {

    const {deleteItemByID} = useCartContext();
  return (
    <div className="cart__product-container">
    <div className="cart__title__product">
      <img
        className="cart__product-img"
        src={product.URLPhoto}
        alt="product"
      />
      <div className="cart__product-det">
        <h5 className="cart__product-title">
          {product.name}
        </h5>
        <svg
          width="20"
          height="20"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.5"
            y="0.5"
            width="22"
            height="22"
            fill="white"
            stroke="#C4C4C4"
          />
          <rect x="4" y="4" width="15" height="15" fill={product.color}/>
        </svg>
      </div>
    </div>
    <span className="cart__title__price">
      {product.price},00 USD
    </span>
    <span className="cart__title__size">
      {product.size}
    </span>
    <span className="cart__title__quantity">
      <QuantitySelector cartMode ={true}  id ={product._id} quantityInCart = {product.quantity}/>
    </span>
    <div className="cart__title__total">
      <span className="cart__product-price"> {product.price*product.quantity},00 USD</span>
      <button className="cart__product-btn-del cart__product-btn-del-heart">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="#E6F1FA" />
          <path
            d="M12.4973 16.3916C11.1933 15.2193 10.1173 14.251 9.36577 13.3802C8.6115 12.5061 8.2 11.7475 8.2 10.9973C8.2 9.96345 8.97936 9.18992 10.025 9.18992C10.8337 9.18992 11.62 9.71225 11.8954 10.4126L11.9204 10.476H11.9885H13.0115H13.0796L13.1046 10.4126C13.38 9.71225 14.1663 9.18992 14.975 9.18992C16.0206 9.18992 16.8 9.96345 16.8 10.9973C16.8 11.7475 16.3885 12.5061 15.6336 13.3801C14.8814 14.251 13.804 15.2192 12.4973 16.3916ZM12.433 18.0743L12.5 18.1347L12.567 18.0743L13.3643 17.355C14.7786 16.0843 15.9607 15.0216 16.7881 14.0187C17.6165 13.0144 18.1 12.0577 18.1 10.9973C18.1 9.25714 16.7232 7.9 14.975 7.9C14.0275 7.9 13.1179 8.31909 12.5 8.98382C11.8821 8.31909 10.9725 7.9 10.025 7.9C8.27676 7.9 6.9 9.25714 6.9 10.9973C6.9 12.0577 7.38348 13.0144 8.21192 14.0187C9.03929 15.0216 10.2214 16.0843 11.6357 17.355L12.433 18.0743Z"
            fill="black"
            stroke="black"
            strokeWidth="0.2"
          />
        </svg>
      </button>
      <button className="cart__product-btn-del" onClick={() => deleteItemByID(product._id)}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="24" height="24" fill="#E6F1FA" />
          <path
            d="M8.84277 8.8418L15.9883 15.9873"
            stroke="black"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M15.9863 8.8418L8.84083 15.9873"
            stroke="black"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  </div>
  )
}

export default CartProduct