import CartModel from "../models/Carts.js";
import mongoose from "mongoose";
import { saveCartDTO, addNewProductDTO } from "../DTOs/carts.js";

const { connect, disconnect } = mongoose;

const URL = "mongodb://localhost:27017/ecommerce";

async function saveCartDB(user) {
  try {
    await connect(URL);
    console.log(`DB Connected to ${URL} `);
    const cartDTO = saveCartDTO(user);
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

async function addNewProductDB(product) {
  try {
    await connect(URL);
    const productDTO = addNewProductDTO(product);

    const res = await CartModel.findOneAndUpdate(
      { _id: product.cartId },
      {
        $push: {
          items: productDTO,
        },
      },
      { new: true, safe: true, upsert: true }
    );
    return res;
  } catch (error) {
    console.log(`Server error: ${error}`);
  } finally {
    mongoose.disconnect().catch((error) => console(error));
  }
}

async function addOneProductDB(product) {
  try {
    await connect(URL);
    const productDTO = addNewProductDTO(product);
    const res = await CartModel.findOneAndUpdate(
      { _id: product.cartId, "items._id": productDTO._id },
      {
        $inc: {
          "items.$.quantity": 1,
        },
      },
      { new: true }
    );
    return res;
  } catch (error) {
    console.log(`Server error: ${error}`);
  } finally {
    mongoose.disconnect().catch((error) => console(error));
  }
}
async function substractOneProductDB(product) {
  try {
    await connect(URL);
    const productDTO = addNewProductDTO(product);
    const res = await CartModel.findOneAndUpdate(
      { _id: product.cartId, "items._id": productDTO._id },
      {
        $inc: {
          "items.$.quantity": -1,
        },
      },
      { new: true }
    );
    return res;
  } catch (error) {
    console.log(`Server error: ${error}`);
  } finally {
    mongoose.disconnect().catch((error) => console(error));
  }
}

async function deleteProductFromCartDB(product) {
  try {
    await connect(URL);
    const productDTO = addNewProductDTO(product);
    const res = await CartModel.findOneAndUpdate(
      { _id: product.cartId },
      {
        $pull: {
          items: { _id: productDTO._id },
        },
      }
    );
    return res;
  } catch (error) {
    console.log(`Server error: ${error}`);
  } finally {
    mongoose.disconnect().catch((error) => console(error));
  }
}
async function deleteCartFromDB(cartId) {
  try {
    await connect(URL);
    const res = await CartModel.deleteOne({ _id: cartId });
    if (res.deletedCount == 1) {
      console.log("Cart has been deleted");
    } else {
      console.log(
        `THe cart with the ID ${cartId} doesn't exist or has been already deleted`
      );
    }
  } catch (error) {
    console.log(`Server error: ${error}`);
  } finally {
    disconnect().catch((error) => console(error));
  }
}

async function resetCartDB(cartId) {
  try {
    await connect(URL);
    const res = await CartModel.findOneAndUpdate(
      { _id: cartId },
      {
        $set: {
          items: [],
        },
      }
    );
    return res;
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
  addOneProductDB,
  substractOneProductDB,
  deleteProductFromCartDB,
  deleteCartFromDB,
  resetCartDB,
};
