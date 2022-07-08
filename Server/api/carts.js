import {
  saveCartDB,
  getCurrentUserCartDB,
  addNewProductDB
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
  const findProduct = cart.filter((product) => product._id === productId);
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
    const productInArray = await getProductsByIdDB(productId)
    console.log(findProduct);
    if (!findProduct) {
      try {
        const cartId = cart._id
        const product = productInArray[0]
        product.quantity = 1
        const res =await addNewProductDB(product,cartId)
        return res
      } catch (error) {
        console.log(`Error while saving: AddnewProductDB ${error}`);
      }
    }
    // if (getUser.length === 0) {
    //   return { success: false, message: "User not Found" };
    // } else {
    //   try {
    //     const userEmail = getUser[0].email;
    //     const getCart = await getCurrentUserCart(userEmail)
    //     console.log(getCart)
    // const productWithEmail = {
    //   email: userEmail,
    //   product: productWithUserId,
    // };
    // const productId = productWithUserId.newProduct.id;
    // const getProduct = await getProductsByIdDB(productId);
    // if (!getProduct) {
    //   return {
    //     success: false,
    //     message: "Persistance Error-cannot find the provided ID",
    //   };
    // } else {
    //   console.log(getProduct)
    //   const res = await addProductDB(productWithEmail);
    //   if (res) {
    //     return {
    //       success: true,
    //       message: "Product added to Cart",
    //       message: res,
    //     };
    //   }
    // }
    //   } catch (error) {
    //     console.log(`Error while saving getUser/else: ${error}`);
    //   }
    // }
  } catch (error) {
    console.log(`Error while saving: ${error}`);
  }
}

export { saveCart, getCurrentUserCart, addProduct };
