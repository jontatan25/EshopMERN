import OrderModel from "../models/Orders.js";
import mongoose from "mongoose";
import { createOrderDTO } from "../DTOs/orders.js";

const { connect, disconnect } = mongoose;

// const URL = "mongodb://localhost:27017/ecommerce";
const URL = process.env.MONGO_ATLAS_URL

async function createOrderDB(userCartWithLength) {
  try {
    await connect(URL);
    console.log(`DB Connected to ${URL} `);
    const orderDTO = createOrderDTO(userCartWithLength);
    const orderModel = new OrderModel(orderDTO)
    const res = await orderModel.save();
    return res;
  } catch (error) {
    console.log(`Server error: ${error}`);
  } finally {
    await disconnect().catch((error) => console(error));
  }
}

async function getAllOrders(){
    try {
        await connect(URL);
        console.log(`Base de datos connectada en ${URL} `);
        const getAllOrders = await OrderModel.find({});
        return getAllOrders;
      } catch (error) {
        console.log(`Server error: ${error}`);
      } finally {
        disconnect().catch((error) => console(error));
      }
}

export { createOrderDB,getAllOrders };
