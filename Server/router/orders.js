import express from "express";
import nodemailer from "nodemailer"

import {authenticateToken} from "../utils/utils.js"
import {createOrderController} from "../controller/orders.js"

const { Router } = express;
const orderRouter = Router();

orderRouter.use(authenticateToken)

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
    subject: `Purchase details for order ${order._id}`,
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

// ROUTER
orderRouter.post("/create", createOrderController);
orderRouter.get("*", async (req, res) => {
  res.status(404).send('Sorry, cant find that');
});

///GetAll Method implemented but is only used to get the length of the collection to assign the ID of new order
// orderRouter.get("/all", async (req, res) => {
  // });

export default orderRouter;
