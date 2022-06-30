import  mongoose from "mongoose";
const {connect,disconnect} = mongoose;

// MODELS

import CartModel from "./models/Carts.js";

const URL = "mongodb://localhost:27017/ecommerce";

let container = [];
let userContainer = [];
let containerMsg = [];

class CartContainer {
  constructor(file) {
    this.file = file;
  }

  //USERS
  async saveCart(cart) {
    try {
      await connect(URL);
      console.log(`DB Connected to ${URL} `);
      console.log(cart)
      const prod1 = new CartModel({
        email: cart.email,
        date: cart.date,
        items: cart.items,
        address: cart.address,
      });
      await prod1.save();
      console.log("Documento Guardado");
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      await disconnect().catch((error) => console(error));
    }
  }

  async getCartById(id) {
    try {
      await connect(URL);
      console.log(`DB Connected to ${URL} `);
      const getProducts = await CartModel.find({ _id: id });
      return getProducts;
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  }
  async deleteCart(id) {
    try {
      await connect(URL);
      const res = await CartModel.deleteOne({ _id: id });
      if (res.deletedCount == 1) {
        console.log("Cart has been deleted")
      } else {
        console.log(`THe cart with the ID ${id} doesn't exist or has been already deleted`)
      }
      
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  }

  async getAllCarts() {
    try {
        await connect(URL);
        console.log(`DB Connected to ${URL} `);
        const getProducts = await CartModel.find({});
        return getProducts;
      } catch (error) {
        console.log(`Server error: ${error}`);
      } finally {
        disconnect().catch((error) => console(error));
      }
  }

  async addProduct(newItem) {
    try {
      await mongoose.connect(URL);
      console.log(newItem)
      const newProduct = {
        id: newItem.id,
        name: newItem.name,
        price: newItem.price,
        URLPhoto: newItem.URLPhoto,
        description: newItem.description,
        quantity: newItem.quantity,
      };
      await CartModel.findByIdAndUpdate(
        { _id: newItem.cartId },
        {
          $push: {
            items: newProduct,
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
  async deleteProduct(deleteInfo) {
    try {
      await mongoose.connect(URL);
      await CartModel.updateOne(
        { _id: deleteInfo.cartId },
        {
          $pull: {
            items: { id: deleteInfo.id },
          },
        },
        { safe: true, multi: false }
      );
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      mongoose.disconnect().catch((error) => console(error));
    }
  }
}

export default CartContainer;
