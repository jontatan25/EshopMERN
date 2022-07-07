import {
  saveMessageDB,
  getAllMessagesDB,
  getLoggedUserMessagesDB,
} from "../DAOs/messagesMongoDB.js";
import { getUserById } from "../DAOs/userMongoDB.js";
import {getMessagesByEmailDTO} from "../DTOs/messages.js"
async function saveMessage(message) {
  try {
    const res = await saveMessageDB(message);
    if (res) {
      return { message: " Message saved", message: res };
    }
  } catch (error) {
    console.log(`Error while saving: ${error}`);
  }
}

async function getAllMessages() {
  try {
    const res = await getAllMessagesDB();
    if (res) {
      return { message: " Messages gathered", messages: res };
    }
  } catch (error) {
    console.log(`Error while saving: ${error}`);
  }
}
async function getLoggedUserMessages(userId) {
  try {
    const getUser = await getUserById(userId);
    if (getUser.length == 0) {
      return { success: false, message: "User not Found" };
    } else {
      try {
        const userEmail = getUser[0].email;
        const getMessages = await getLoggedUserMessagesDB(userEmail);
        if (getMessages.length == 0) {
          return { success: false, message: "You have no Messages yet" };
        } else {
          const messagesDTO = getMessagesByEmailDTO(getMessages)
          return { message: " User messages gathered", messages: messagesDTO };
        }
        
      } catch (error) {
        console.log(`Error while getting user Messages: ${error}`);
      }
    }
  } catch (error) {
    console.log(`Error while saving: ${error}`);
  }
}

export { saveMessage, getAllMessages, getLoggedUserMessages };
