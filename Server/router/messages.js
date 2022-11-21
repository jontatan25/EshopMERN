import express from "express";
import {authenticateToken} from "../utils/utils.js"
import {saveMessageController,getAllMessagesController,getLoggedUserMessagesController,getMessagesByEmailController} from "../controller/messages.js"
const { Router } = express;
const messagesRouter = Router();

// messagesRouter.use(authenticateToken)

messagesRouter.get("/chat", async (req, res) => {
  res.send({
    message: "Chat Home",
  });
});
messagesRouter.post("/", saveMessageController);
messagesRouter.get("/", getAllMessagesController);
messagesRouter.get("/myMessages", getLoggedUserMessagesController);
messagesRouter.get("/email/:userEmail", getMessagesByEmailController);
messagesRouter.get("*", async (req, res) => {
  res.status(404).send('Sorry, cant find that');
});

//DELETE ROUTE, DEVELOPED BUT NOT IMPLEMENTED YET
// messagesRouter.delete("/user/:emailId", async (req, res) => {
//     const productById = await mContainer.getMessageById(req.params.id);
//     if (!productById) {
//       res.send({
//         error: `"El mensaje con el id # ${req.params.id} no existe"`,
//       });
//     } else {
//       await mContainer.deleteMessage(req.params.id)
//       res.send({
//         message: `"El producto con el id # ${req.params.id} ha sido borrado`,
//       });
//       ;
//     }
// });



export default messagesRouter;
