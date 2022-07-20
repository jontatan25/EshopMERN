import UserModel from "../models/User.js";
import mongoose from "mongoose";

const { connect, disconnect } = mongoose;

// const URL = "mongodb://localhost:27017/ecommerce";
const URL = process.env.MONGO_ATLAS_URL

async function getUserByEmail(email) {
    try {
      await connect(URL);
      const getUser = await UserModel.find({ email: email });
      return getUser;
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  }
  async function getUserByUsername(username) {
    try {
      await connect(URL);
      const getUserName = await UserModel.find({ username: username });
      return getUserName;
    } catch (error) {
      console.log(`Persistance error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  }
  
  async function getUserById(id) {
    try {
      await connect(URL);
      const getId = await UserModel.find({ _id: id });
      return getId;
    } catch (error) {
      console.log(`Persistance error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  }
async function saveUserDB(user) {
  try {
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
    const userCreatedId = userCreated._id.toString();
    return userCreatedId;
  } catch (error) {
    console.log(`Persistance error: ${error}`);
  } finally {
    await disconnect().catch((error) => console(error));
  }
}

async function deleteUserDB(email) {
    try {
      await connect(URL);
      const res = await UserModel.deleteOne({email: email });
      const deleteConfirmation = res.deletedCount
      return deleteConfirmation
    } catch (error) {
      console.log(`Persistance error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  }


export {saveUserDB,getUserByEmail,getUserByUsername, deleteUserDB, getUserById };
