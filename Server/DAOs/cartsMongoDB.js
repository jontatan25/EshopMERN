import CartModel from "../models/Carts.js";
import mongoose from "mongoose";
import { saveCartDTO, addNewProductDTO } from "../DTOs/carts.js";

const { connect, disconnect } = mongoose;

const URL = "mongodb://localhost:27017/ecommerce";

async function saveCartDB(userInfo) {
  try {
    await connect(URL);
    console.log(`DB Connected to ${URL} `);
    const cartDTO = saveCartDTO(userInfo);
    const newCart = new CartModel(cartDTO);
    const res = await newCart.save();
    return res;
  } catch (error) {
    console.log(`Server error: ${error}`);
  } finally {
    await disconnect().catch((error) => console(error));
  }
}

async function getCurrentUserCartDB(userEmail) {
  try {
    await connect(URL);
    console.log(`DB connected to ${URL} `);
    const getUserCart = await CartModel.find({ email: userEmail });
    return getUserCart;
  } catch (error) {
    console.log(`Server error: ${error}`);
  } finally {
    disconnect().catch((error) => console(error));
  }
}

async function addNewProductDB(product,cartId) {
  try {
    await connect(URL);
    console.log(product)
    const productDTO = addNewProductDTO(product)
    // console.log("DTO" + productDTO);
    await CartModel.findOneAndUpdate(
      { _id: cartId },
      {
        $push: {
          items: productDTO,
        },
      },
      { new: true, safe: true, upsert: true }
    );
  } catch (error) {
    console.log(`Server error: ${error}`);
  } finally {
    mongoose.disconnect().catch((error) => console(error));
  }
}

async function addOneProduct(productWithEmail) {
  try {
    await connect(URL);
    const productDTO = addProductDTO(productWithEmail);
    await CartModel.findOneAndUpdate(
      { email: productWithEmail.email },
      {
        $push: {
          items: productDTO,
        },
      },
      { new: true, safe: true, upsert: true }
    );
  } catch (error) {
    console.log(`Server error: ${error}`);
  } finally {
    mongoose.disconnect().catch((error) => console(error));
  }
}


export {
  saveCartDB,
  getCurrentUserCartDB,
  addNewProductDB,
};
