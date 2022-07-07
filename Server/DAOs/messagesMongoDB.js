import MessageModel from "../models/Messages.js";
import mongoose from "mongoose";
import {saveMessageDTO} from "../DTOs/messages.js"

const { connect, disconnect } = mongoose;

const URL = "mongodb://localhost:27017/ecommerce";

async function saveMessageDB (message){
    try {
        await connect(URL);
        console.log(`Base de datos connectada en ${URL} `);
        const messageDTO = saveMessageDTO(message)
        const newMessage = new MessageModel(messageDTO);
        const saveResult = await newMessage.save();
        return saveResult
      } catch (error) {
        console.log(`Server error: ${error}`);
      } finally {
        await disconnect().catch((error) => console(error));
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
export {saveMessageDB,getAllMessagesDB,getLoggedUserMessagesDB}