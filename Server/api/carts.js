import {
  saveCartDB,
  getCurrentUserCartDB,
  addNewProductDB,
  addOneProductDB,
  substractOneProductDB,
  deleteProductFromCartDB
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
function checkIfQuantityIsOne(cart, productId) {
  const cartProducts = cart[0].items;
  const findProduct = cartProducts.filter(
    (product) => product._id === productId
  );
  // console.log(cart)
  // console.log("-------------------------------")
  // console.log(findProduct[0])
  if (findProduct[0].quantity === 1) {
    return true;
  } else return false;
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
async function substractOneProduct(productWithUserId) {
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
    if (findProduct) {
      try {
        const productQuantityIsOne = checkIfQuantityIsOne(cart, productId);
        if (!productQuantityIsOne) {
          const res = await substractOneProductDB(product);
          if (res)
            return {
              success: true,
              message: "Product quantity -1",
              product: res,
            };
        } else {
          const res = await deleteProductFromCartDB(product);
          if (res)
            return {
              success: true,
              message:
                "Product quantity -1, itemQuantity is now 0, deleting from Cart",
            };
        }
      } catch (error) {
        console.log(`Error while saving: substractOneProductDB ${error}`);
      }
    } else {
      return {
        success: false,
        message: "The products does not exist in the cart",
      };
    }
  } catch (error) {
    console.log(`Error while saving: ${error}`);
  }
}

export { saveCart, getCurrentUserCart, addProduct, substractOneProduct };
