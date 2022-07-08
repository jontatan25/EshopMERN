import CartModel from "../models/Carts.js"
import mongoose from "mongoose";
// import {saveMessageDTO} from "../DTOs/messages.js"

const { connect, disconnect } = mongoose;

const URL = "mongodb://localhost:27017/ecommerce";

async function saveCartDB (cart){
    try {
        await connect(URL);
        console.log(`DB Connected to ${URL} `);
        console.log(cart)
        const newCart = new CartModel({
          email: cart.email,
          date: cart.date,
          items: cart.items,
          address: cart.address,
        });
        await newCart.save();
        console.log("Documento Guardado");
      } catch (error) {
        console.log(`Server error: ${error}`);
      } finally {
        await disconnect().catch((error) => console(error));
      }
}

export {saveCartDB}