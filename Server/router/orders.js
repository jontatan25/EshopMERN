import express from "express";
import nodemailer from "nodemailer"

import OrderContainer from "../mongoContainerOrders.js"
import utils from "../utils/utils.js"

const { Router } = express;
const orderRouter = Router();
const jwtAuth = utils.authenticateToken
const oContainer = new OrderContainer("order");

orderRouter.use(jwtAuth)

//Nodemailer
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "zamiipx@gmail.com",
    pass: process.env.NODEMAILER_KEY,
  },
  port: 465,
  host: 'smtp.gmail.com'
});

function sendOrderNodeMailer(order) {
  let newOrder = {
    from: "zamiipx@gmail.com",
    to: order.email,
    subject: `Detalles de la compra username`,
    text: JSON.stringify(order.items, null, "\t"),
  };
  transporter.sendMail(newOrder, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Se ha enviado la Orden al correo");
      console.log(newOrder);
    }
  });
}

// MONGODB
orderRouter.post("/create", async (req, res) => {
    const saveOrder = await oContainer.saveOrder(req.body);

    res.send({
      message: "Order has been posted",
      body: saveOrder
    });
    console.log(saveOrder)
    sendOrderNodeMailer(saveOrder)
});

orderRouter.get("/all", async (req, res) => {
    const cart = await oContainer.getAllOrders();
    res.send({
      message: "geting all the Orders",
      data: cart,
    });
  });
  
orderRouter.get("/id/:id", async (req, res) => {
  const order = await oContainer.getOrderById(req.params.id);
  res.send({
    message: "Orders",
    data: order,
  });
});

orderRouter.get("*", async (req, res) => {
  res.status(404).send('Sorry, cant find that');
});

export default orderRouter;
