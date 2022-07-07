import express from "express";

import {authenticateToken} from "../utils/utils.js"
import MessagesContainer from "../mongoContainerMessages.js"
const { Router } = express;
const messagesRouter = Router();
const mContainer = new MessagesContainer("messages");

messagesRouter.use(authenticateToken)

messagesRouter.get("/chat", async (req, res) => {
  
  res.send({
    message: "chat started",
  });
});

// MONGODB
messagesRouter.post("/", async (req, res) => {
    console.log(req.body)
    const saveMessage = await mContainer.saveMessage(req.body);
    res.send({
      message: "Product has been posted",
      body: saveMessage
    });
});

messagesRouter.get("/all", async (req, res) => {
    const messages = await mContainer.getAllMessages();
    res.send({
      message: "USERS",
      data: messages,
    });
  });
  
messagesRouter.get("/id/:id", async (req, res) => {
  const user = await mContainer.getMessageById(req.params.id);
  res.send({
    message: "USERS",
    data: user,
  });
});

messagesRouter.delete("/id/:id", async (req, res) => {

  console.log(req.params.id)

    const productById = await mContainer.getMessageById(req.params.id);
    if (!productById) {
      res.send({
        error: `"El mensaje con el id # ${req.params.id} no existe"`,
      });
    } else {
      await mContainer.deleteMessage(req.params.id)
      res.send({
        message: `"El producto con el id # ${req.params.id} ha sido borrado`,
      });
      ;
    }
});

messagesRouter.get("*", async (req, res) => {
  res.status(404).send('Sorry, cant find that');
});

//SOCKET.IO



export default messagesRouter;
