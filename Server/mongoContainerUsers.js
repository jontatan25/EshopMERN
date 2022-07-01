import  mongoose from "mongoose";
const {connect,disconnect} = mongoose;
// MODELS

import UserModel from "./models/User.js";

const URL = "mongodb://localhost:27017/ecommerce";

let container = [];
let userContainer = [];
let containerMsg = [];

class Container {
  constructor(file) {
    this.file = file;
  }

  //USERS
  async saveUser(user) {
    try {
      await connect(URL);
      console.log(`Base de datos connectada en ${URL} `);
      const prod1 = new UserModel({
        email: user.email,
        password: user.password,
        username: user.username,
        direccion: user.direccion,
        telefono: user.telefono,
        avatar: user.avatar,
      });
      await prod1.save();
      console.log("Documento Guardado");
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      await disconnect().catch((error) => console(error));
    }
  }

  async getUserById(id) {
    try {
      await connect(URL);
      console.log(`Base de datos connectada en ${URL} `);
      const getUser = await UserModel.find({ _id: id });
      return getUser;
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  }
  async deleteUser(id) {
    try {
      await connect(URL);
      const res = await UserModel.deleteOne({ _id: id });
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
}

export default Container;
