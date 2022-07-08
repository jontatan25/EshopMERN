import {saveMessage,getAllMessages,getLoggedUserMessages,getMessagesByEmail} from "../api/messages.js"

async function saveMessageController(req, res) {
    try {
        const message = req.body;
        const saveResult = await saveMessage(message);
        res.json(saveResult);
      } catch (error) {
        console.log("Error in Message Controller:" + error);
      }
}

async function getAllMessagesController(req, res) {
    try {
        const getResult = await getAllMessages();
        res.json(getResult);
      } catch (error) {
        console.log("Error in Product Controller:" + error);
      }
}
async function getLoggedUserMessagesController(req, res) {
  try {
    const userId = req.user
    const getResult = await getLoggedUserMessages(userId);
    res.json(getResult);
  } catch (error) {
    console.log("Error in Product Controller:" + error);
  }
}
async function getMessagesByEmailController(req, res) {
  try {
    const userEmail = req.params.userEmail
    const getResult = await getMessagesByEmail(userEmail);
    res.json(getResult);
  } catch (error) {
    console.log("Error in Product Controller:" + error);
  }
}
export {saveMessageController,getAllMessagesController,getLoggedUserMessagesController,getMessagesByEmailController}