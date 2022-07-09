import express from "express";

import {authenticateToken} from "../utils/utils.js"
import {createOrderController} from "../controller/orders.js"

const { Router } = express;
const orderRouter = Router();

orderRouter.use(authenticateToken)

// ROUTER
orderRouter.post("/create", createOrderController);
orderRouter.get("*", async (req, res) => {
  res.status(404).send('Sorry, cant find that');
});

///GetAll Method implemented but is only used to get the length of the collection to assign the ID of new order
// orderRouter.get("/all", async (req, res) => {
  // });

export default orderRouter;
