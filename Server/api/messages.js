import {
  saveMessageDB,
  getAllMessagesDB,
  getLoggedUserMessagesDB,
  getMessagesByEmailDB
} from "../DAOs/messagesMongoDB.js";
import { getUserById } from "../DAOs/userMongoDB.js";
import {getMessagesByEmailDTO,saveMessageDTOClient} from "../DTOs/messages.js"

async function saveMessage(message) {
  try {
    const getUser = await getUserById(message.userId);
    if (getUser.length === 0) {
      return { success: false, message: "User not Found" };
    } else {
      try {
        const userEmail = getUser[0].email;
        const messageWithEmail= {email: userEmail, message: message.text}
        const getMessages = await saveMessageDB(messageWithEmail);
        if (getMessages.length === 0) {
          return { success: false, message: "You have no Messages yet" };
        } else {
          const messagesDTO = saveMessageDTOClient(getMessages)
          return {success: true, message: "Message saved", body: messagesDTO };
        }
        
      } catch (error) {
        console.log(`Error while getting user Messages: ${error}`);
      }
    }
  } catch (error) {
    console.log(`Error while saving: ${error}`);
  }
}

async function getAllMessages() {
  try {
    const res = await getAllMessagesDB();
    if (res.length === 0) {
      return { success: false, message: "There is no Messages yet" };
    } else {
      const messagesDTO = getMessagesByEmailDTO(res)
      return { success: true, message: " Messages gathered", messages: messagesDTO };
    }
  } catch (error) {
    console.log(`Error while saving: ${error}`);
  }
}
async function getLoggedUserMessages(userId) {
  try {
    const getUser = await getUserById(userId);
    if (getUser.length === 0) {
      return { success: false, message: "User not Found" };
    } else {
      try {
        const userEmail = getUser[0].email;
        const getMessages = await getLoggedUserMessagesDB(userEmail);
        if (getMessages.length === 0) {
          return { success: false, message: "You have no Messages yet" };
        } else {
          const messagesDTO = getMessagesByEmailDTO(getMessages)
          return {success: true, message: " User messages gathered", messages: messagesDTO };
        }
        
      } catch (error) {
        console.log(`Error while getting user Messages: ${error}`);
      }
    }
  } catch (error) {
    console.log(`Error while saving: ${error}`);
  }
}
async function getMessagesByEmail(userEmail) {
  try {
    const getMessages = await getMessagesByEmailDB(userEmail);
    if (getMessages.length === 0) {
      return { success: false, message: `No messages for the email ${userEmail}` };
    } else {
      const messagesDTO = getMessagesByEmailDTO(getMessages)
      return { success: true, message: " User Messages By Email gathered", messages: messagesDTO };
    }
  } catch (error) {
    console.log(`Error while saving: ${error}`);
  }
}

export { saveMessage, getAllMessages, getLoggedUserMessages,getMessagesByEmail };
