import mongoose from "mongoose";
import UserModel from "./models/User.js";
const { connect, disconnect } = mongoose;

// MODELS


const URL = "mongodb://localhost:27017/ecommerce";

let container = [];
let userContainer = [];
let containerMsg = [];

class Container {
  constructor(file) {
    this.file = file;
  }

  //USERS

  async getUserByEmail(email) {
    try {
      await connect(URL);
      console.log(`Base de datos connectada en ${URL} `);
      const getUser = await UserModel.find({ email: email });
      return getUser;
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  }
  async getUserByUsername(username) {
    try {
      await connect(URL);
      console.log(`Base de datos connectada en ${URL} `);
      const getUserName = await UserModel.find({ username: username });
      return getUserName;
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
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

  async saveUser(user) {
    try {
      await connect(URL);
      console.log(`Base de datos connectada en ${URL} `);
      const emailExists = await this.getUserByEmail(user.email);
      const userNameExists = await this.getUserByUsername(user.username);
      if (emailExists.length == 0 && userNameExists.length == 0) {
        await connect(URL);
        const newUser = new UserModel({
          email: user.email,
          password: user.password,
          username: user.username,
          address: user.address,
          cart: [],
        });
        const userCreated = await newUser.save();
        console.log("User has been created");
        const userCreatedId = userCreated._id.toString()
        return userCreatedId;
      } else if (emailExists.length == 1 && userNameExists.length == 0) {
        const res = {
          status: 409,
          reason: "The email already exists please try with a different email",
        };
        return res;
      } else if (emailExists.length == 0 && userNameExists.length == 1) {
        const res = {
          status: 409,
          reason: "The username already exists please try with a different username",
        };
        return res;
      } else {
        const res = {
          status: 409,
          reason: "The email and username already exists please try with a different email and username",
        };
        return res;
      }
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      await disconnect().catch((error) => console(error));
    }
  }

  async deleteUser(id) {
    try {
      await connect(URL);
      const res = await UserModel.deleteOne({ _id: id });
      if (res.deletedCount == 1) {
        console.log("User has been deleted");
      } else {
        console.log(
          `The user with the ID ${id} doesn't exist or has been already deleted`
        );
      }
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  }
}

export default Container;
