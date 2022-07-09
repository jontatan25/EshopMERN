import { createOrderDB, getAllOrders } from "../DAOs/ordersMongoDB.js";
import { getCurrentUserCart } from "./carts.js";
import { resetCartDB } from "../DAOs/cartsMongoDB.js";

async function createOrder(userId) {
  try {
    ///Getting CartsCollection length for ID
    const getAllOrdersObject = await getAllOrders();
    const ordersArray = getAllOrdersObject;
    const ordersLength = ordersArray.length;
    ///Getting UserCart and finding its length
    const userCartRes = await getCurrentUserCart(userId);
    const productsInCart = userCartRes.cart[0].items;
    const productLength = productsInCart.length;

    if (userCartRes.success === true && productLength > 0) {
      const userCartWithLength = {
        cart: userCartRes.cart,
        ordersLength: ordersLength,
      };
      const res = await createOrderDB(userCartWithLength);
      if (res.items.length > 0) {
        const userCart = userCartRes.cart;
        const cartId = userCart[0]._id;
        await resetCartDB(cartId);
        return ` Order was made and the Cart has been cleared, Thanks for your order!`;
      } else return "The cart doesn't exist or its already been cleared'";
    } else if (userCartRes.success === true && productLength === 0) {
      return { message: "Cannot create an order if the cart is empty" };
    } else return userCartRes;
  } catch (error) {
    console.log(`Error while getting Cart:  ${error}`);
  }
}

export { createOrder };
