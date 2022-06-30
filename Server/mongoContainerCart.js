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
      console.log(`Base de datos connectada en ${URL} `);
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
      console.log(`Base de datos connectada en ${URL} `);
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
        console.log(`Base de datos connectada en ${URL} `);
        const getProducts = await CartModel.find({});
        return getProducts;
      } catch (error) {
        console.log(`Server error: ${error}`);
      } finally {
        disconnect().catch((error) => console(error));
      }
  }
}

export default CartContainer;
