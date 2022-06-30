import  mongoose from "mongoose";
const {connect,disconnect} = mongoose;

// MODELS

import MessageModel from "./models/Messages.js";

const URL = "mongodb://localhost:27017/ecommerce";

let container = [];
let userContainer = [];
let containerMsg = [];

class MessagesContainer {
  constructor(file) {
    this.file = file;
  }

  //USERS
  async saveMessage(message) {
    try {
      await connect(URL);
      console.log(`Base de datos connectada en ${URL} `);
      console.log(message)
      const prod1 = new MessageModel({
        email: message.email,
        type: message.type,
        date: message.date,
        body: message.body,
      });
      await prod1.save();
      console.log("Documento Guardado");
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      await disconnect().catch((error) => console(error));
    }
  }

  async getMessageById(id) {
    try {
      await connect(URL);
      console.log(`Base de datos connectada en ${URL} `);
      const getProducts = await MessageModel.find({ _id: id });
      return getProducts;
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  }
  async deleteMessage(id) {
    try {
      await connect(URL);
      const res = await MessageModel.deleteOne({ _id: id });
      if (res.deletedCount == 1) {
        console.log("User has been deleted")
      } else {
        console.log(`THe user with the ID ${id} doesn't exist or has been already deleted`)
      }
      
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  }
  

  async getAllMessages() {
    try {
        await connect(URL);
        console.log(`Base de datos connectada en ${URL} `);
        const getProducts = await MessageModel.find({});
        return getProducts;
      } catch (error) {
        console.log(`Server error: ${error}`);
      } finally {
        disconnect().catch((error) => console(error));
      }
  }
}

export default MessagesContainer;
