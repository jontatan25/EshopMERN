import  mongoose from "mongoose";
const {connect,disconnect} = mongoose;
// MODELS

import UserModel from "./models/User.js";

const URL = "mongodb://localhost:27017/ecommerce";

let container = [];
let userContainer = [];
let containerMsg = [];

class Contenedor {
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
        edad: user.edad,
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

  async getAllUsers() {
    try {
      await connect(URL);
      console.log(`Base de datos connectada en ${URL} `);
      let getUsers = await UserModel.find({});

      getUsers.map((user) => userContainer.push(user));
      console.log("Users had been adquired");
      return userContainer;
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      await disconnect().catch((error) => console(error));
    }
  }

  async getUser(username) {
    try {
      await connect(URL);
      console.log(`Base de datos connectada en ${URL} `);
      const getUser = await __find({ username: username });
      return getUser;
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  }

  
  // PRODUCTS
  async saveProduct(info) {
    try {
      await connect(URL);

      const prod1 = {
        nombre: info.product.nombre,
        descripcion: info.product.descripcion,
        codigo: info.product.codigo,
        foto: info.product.foto,
        precio: info.product.precio,
        stock: info.product.stock,
      };
      await findOneAndUpdate(
        { username: info.user },
        {
          $push: {
            cart: prod1,
          },
        },
        { new: true, safe: true, upsert: true }
      );
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  }
  async getAll() {
    try {
      await connect(URL);
      console.log(`Base de datos connectada en ${URL} `);
      let getProducts = await find({});

      getProducts.map((product) => container.push(product));
      console.log("Products had been adquired");
      return container;
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      await disconnect().catch((error) => console(error));
    }
  }
  async getById(id) {
    try {
      await connect(URL);
      console.log(`Base de datos connectada en ${URL} `);
      const getProducts = await find({ _id: id });
      return getProducts;
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  }
  async update(newProduct) {
    try {
     
      await connect(URL);
      await updateOne(
        { _id: newProduct.id },
        { $set: { precio: newProduct.precio} }
      );
console.log(newProduct)
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  }
  async deleteById(id) {
    try {
      await connect(URL);
      await deleteOne({ _id: id });
      
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  }

  // MESSAGES

  async saveMessage(message) {
    try {
      await connect(URL);
      console.log(`Base de datos connectada en ${URL} `);
      const newMessage = new MessageModel({
        email: message.email,
        text: message.text,
        time: message.time,
      });
      await newMessage.save();
      console.log("Message saved");
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      await disconnect().catch((error) => console(error));
    }
  }

  async getAllMessages() {
    try {
      await connect(URL);
      console.log(`Base de datos connectada en ${URL} `);
      let getMessages = await _find({});

      getMessages.map((message) => containerMsg.push(message));
      console.log("Messages had been adquired");
      return containerMsg;
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      await disconnect().catch((error) => console(error));
    }
  }
}

export default Contenedor;
