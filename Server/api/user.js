import { saveCartDB } from "../DAOs/cartsMongoDB.js";
import {
  saveUserDB,
  getUserByEmail,
  getUserByUsername,
  deleteUserDB,
} from "../DAOs/userMongoDB.js";
import {
  signJWT,
  createHash,
  isValidPassword,
  signJWTLogin,
} from "../utils/utils.js";

async function saveUser(user) {
  try {
    const emailExists = await getUserByEmail(user.email);
    const userNameExists = await getUserByUsername(user.username);
    const passwordHash = createHash(user.password);
    const userEncrypted = { ...user, password: passwordHash };

    if (emailExists.length == 0 && userNameExists.length == 0) {
      
      const userSaved = await saveUserDB(userEncrypted);
      const accessToken = signJWT(userSaved);
      const createCart = await saveCartDB(user);
  
      return {
        success: true,
        user: userSaved,
        token: accessToken.token,
        expiresnIn: accessToken.expires,
        cart: createCart
      };
    } else if (emailExists.length == 1 && userNameExists.length == 0) {
      const res = {
        status: 409,
        reason: "The email already exists. please try with a different email",
      };
      return res;
    } else if (emailExists.length == 0 && userNameExists.length == 1) {
      const res = {
        status: 409,
        reason:
          "The username already exists please try with a different username",
      };
      return res;
    } else {
      const res = {
        status: 409,
        reason:
          "The email and username already exists please try with a different email and username",
      };
      return res;
    }
  } catch (error) {
    console.log("Error in Users Service" + error);
  }
}

async function loginUser(loginInfo) {
  try {
    const user = await getUserByEmail(loginInfo.email);
    if (user.length == 0) {
      return { success: false, reason: "Email not found" };
    } else if (!isValidPassword(user[0], loginInfo.password)) {
      return { success: false, reason: "you entered the wrong password" };
    } else {
      const accessToken = signJWTLogin(user);
      return {
        success: true,
        user: user[0],
        token: accessToken.token,
        expiresnIn: accessToken.expires,
      };
    }
  } catch (error) {
    console.log("Error in Users Service" + error);
  }
}

async function deleteUser(email) {
  try {
    const user = await deleteUserDB(email);
    if (user === 0) {
      return {
        success: false,
        message: `The Account with the email ${email} was not found or it's been deleted`,
      };
    } else {
      await deleteUserDB(email);
      return {
        success: true,
        message: `"The Account with the email ${email} has been deleted`,
      };
    }
  } catch (error) {}
}

export { saveUser, loginUser, deleteUser };
