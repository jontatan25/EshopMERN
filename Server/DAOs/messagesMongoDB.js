import MessageModel from "../models/Messages.js";
import ChatUserModel from "../models/ChatUser.js";
import mongoose from "mongoose";
import {saveMessageDTO,saveUserDTO} from "../DTOs/messages.js"

const { connect, disconnect } = mongoose;

const URL = "mongodb://localhost:27017/ecommerce";
// const URL = process.env.MONGO_ATLAS_URL

async function saveUserDB (userInfo){
    try {
        await connect(URL);
        console.log(`Base de datos connectada en ${URL} `);
        const userDTO = saveUserDTO(userInfo)
        const newUser = new ChatUserModel(userDTO);
        const saveResult = await newUser.save();
        return saveResult
      } catch (error) {
        console.log(`Server error: ${error}`);
      } finally {
        await disconnect().catch((error) => console(error));
      }
}
async function saveMessageDB (messageInfo){
    try {
        await connect(URL);
        console.log(`Base de datos connectada en ${URL} `);
        const messageDTO = saveMessageDTO(messageInfo)
        const newMessage = new MessageModel(messageDTO);
        const saveResult = await newMessage.save();
        return saveResult
      } catch (error) {
        console.log(`Server error: ${error}`);
      } finally {
        await disconnect().catch((error) => console(error));
      }
}

async function getChatUsersDB (){
    try {
        await connect(URL);
        console.log(`Base de datos connectada en ${URL} `);
        const getConnectedUsers = await ChatUserModel.find({});
        return getConnectedUsers;
      } catch (error) {
        console.log(`Server error: ${error}`);
      } finally {
        disconnect().catch((error) => console(error));
      }
}
async function getAllMessagesDB (){
    try {
        await connect(URL);
        console.log(`Base de datos connectada en ${URL} `);
        const getAllMessages = await MessageModel.find({});
        return getAllMessages;
      } catch (error) {
        console.log(`Server error: ${error}`);
      } finally {
        disconnect().catch((error) => console(error));
      }
}

async function getLoggedUserMessagesDB (userEmail){
    try {
        await connect(URL);
        console.log(`Base de datos connectada en ${URL} `);
        const getUserMessages = await MessageModel.find({email:userEmail});
        return getUserMessages;
      } catch (error) {
        console.log(`Server error: ${error}`);
      } finally {
        disconnect().catch((error) => console(error));
      }
}
async function getMessagesByEmailDB (userEmail){
  try {
      await connect(URL);
      console.log(`Base de datos connectada en ${URL} `);
      const getMessagesByEmail = await MessageModel.find({email:userEmail});
      return getMessagesByEmail;
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
}
export {saveUserDB,saveMessageDB,getChatUsersDB,getAllMessagesDB,getLoggedUserMessagesDB,getMessagesByEmailDB}