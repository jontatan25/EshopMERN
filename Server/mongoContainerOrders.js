import  mongoose from "mongoose";
const {connect,disconnect} = mongoose;

// MODELS

import OrderModel from "./models/Orders.js";

const URL = "mongodb://localhost:27017/ecommerce";

let container = [];
let userContainer = [];
let containerMsg = [];

class OrderContainer {
  constructor(file) {
    this.file = file;
  }

  //USERS
  async saveOrder(order) {
    try {
      await connect(URL);
      console.log(`DB Connected to ${URL} `);
      const orderNumberFromLength = await OrderModel.countDocuments({})
      const newOrder = new OrderModel({
        _id: orderNumberFromLength,
        items: order.items,
        date: order.date,
        status: order.status,
        email: order.email,
      });
      await newOrder.save();
      console.log("Document saved");
      return newOrder
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      await disconnect().catch((error) => console(error));
    }
  }

  async getOrderById(id) {
    try {
      await connect(URL);
      console.log(`DB Connected to ${URL} `);
      const getProducts = await OrderModel.find({ _id: id });
      return getProducts;
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  }
  async deleteOrder(id) {
    try {
      await connect(URL);
      const res = await OrderModel.deleteOne({ _id: id });
      if (res.deletedCount == 1) {
        console.log("Order has been deleted")
      } else {
        console.log(`THe Order with the ID ${id} doesn't exist or has been already deleted`)
      }
      
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  }

  async getAllOrders() {
    try {
        await connect(URL);
        console.log(`DB Connected to ${URL} `);
        const getProducts = await OrderModel.find({});
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
      await OrderModel.findByIdAndUpdate(
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
      await OrderModel.updateOne(
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

export default OrderContainer;
