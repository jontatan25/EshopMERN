import {
  saveCartDB,
  getCurrentUserCartDB,
  addNewProductDB,
  addOneProductDB,
} from "../DAOs/cartsMongoDB.js";
import { getUserById } from "../DAOs/userMongoDB.js";
import { getProductsByIdDB } from "../DAOs/productsMongoDB.js";
async function getCurrentUserCart(userId) {
  try {
    const getUser = await getUserById(userId);
    if (getUser.length === 0) {
      return { success: false, message: "User not Found" };
    } else {
      try {
        const userEmail = getUser[0].email;
        const getCart = await getCurrentUserCartDB(userEmail);
        if (getCart.length === 0) {
          return {
            success: false,
            message:
              "User doesn't have any cart yet. please create one Before you try to access this page.",
          };
        } else {
          // const messagesDTO = getMessagesByEmailDTO(getMessages)
          return {
            success: true,
            message: " User cart gathered",
            cart: getCart,
          };
        }
      } catch (error) {
        console.log(`Error while getting user Messages: ${error}`);
      }
    }
  } catch (error) {
    console.log(`Error while saving: ${error}`);
  }
}

async function saveCart(userId) {
  try {
    const checkIfCartIsCreated = await getCurrentUserCart(userId);
    if (checkIfCartIsCreated.success === true) {
      return { success: false, message: "The User already has a Cart created" };
    } else {
      try {
        const userInfo = await getUserById(userId);
        const res = await saveCartDB(userInfo[0]);
        if (res) {
          return { success: true, message: "User Cart created", message: res };
        }
      } catch (error) {
        console.log(
          `Error while saving: checkIfCartIsCreated.success / else ${error}`
        );
      }
    }
  } catch (error) {
    console.log(`Error while saving: ${error}`);
  }
}
function checkIfProductInCart(cart, productId) {
  const cartProducts = cart[0].items;
  const findProduct = cartProducts.filter(
    (product) => product._id === productId
  );
  if (findProduct.length === 0) {
    return false;
  } else return true;
}

async function addProduct(productWithUserId) {
  try {
    const userId = productWithUserId.userId;
    const getCart = await getCurrentUserCart(userId);
    const cart = getCart.cart;
    const productId = productWithUserId.newProduct.id;
    const findProduct = checkIfProductInCart(cart, productId);
    const productInArray = await getProductsByIdDB(productId);
    const cartId = cart[0]._id;
    let product = {
      ...productInArray[0]._doc,
      quantity: 1,
      cartId: cartId,
    };
    if (!findProduct) {
      try {
        const res = await addNewProductDB(product);
        if (res)
          return { success: true, message: "New product added successfully" };
      } catch (error) {
        console.log(`Error while saving: AddnewProductDB ${error}`);
      }
    } else {
      const res = await addOneProductDB(product);
      return { success: true, message: res };
    }
  } catch (error) {
    console.log(`Error while saving: ${error}`);
  }
}

export { saveCart, getCurrentUserCart, addProduct };
