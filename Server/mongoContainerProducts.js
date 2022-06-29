import  mongoose from "mongoose";
const {connect,disconnect} = mongoose;

// MODELS

import ProductModel from "./models/Products.js";

const URL = "mongodb://localhost:27017/ecommerce";

let container = [];
let userContainer = [];
let containerMsg = [];

class Container {
  constructor(file) {
    this.file = file;
  }

  //USERS
  async saveProduct(product) {
    try {
      await connect(URL);
      console.log(`Base de datos connectada en ${URL} `);
      console.log(product)
      const prod1 = new ProductModel({
        name: product.name,
        price: product.price,
        URLPhoto: product.URLPhoto,
        description: product.description,
        category: product.category,
        stock: product.stock,
      });
      await prod1.save();
      console.log("Documento Guardado");
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      await disconnect().catch((error) => console(error));
    }
  }

  async getProductById(id) {
    try {
      await connect(URL);
      console.log(`Base de datos connectada en ${URL} `);
      const getProducts = await ProductModel.find({ _id: id });
      return getProducts;
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  }
  async deleteProduct(id) {
    try {
      await connect(URL);
      const res = await ProductModel.deleteOne({ _id: id });
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
  
  // PRODUCTS
//   async saveProduct(product) {
//     try {
//       await connect(URL);

//       const prod1 = {
//         name: product.name,
//         price: product.price,
//         URLPhoto: product.URLPhoto,
//         description: product.description,
//         category: product.category,
//         stock: product.stock,
//       };
//       await findOneAndUpdate(
//         { username: info.user },
//         {
//           $push: {
//             cart: prod1,
//           },
//         },
//         { new: true, safe: true, upsert: true }
//       );
//     } catch (error) {
//       console.log(`Server error: ${error}`);
//     } finally {
//       disconnect().catch((error) => console(error));
//     }
//   }

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

export default Container;
