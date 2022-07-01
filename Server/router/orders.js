import express from "express";

const { Router } = express;
const orderRouter = Router();

import OrderContainer from "../mongoContainerOrders.js"
const oContainer = new OrderContainer("order");

// MONGODB
orderRouter.post("/", async (req, res) => {
    console.log(req.body)
    const saveOrder = await oContainer.saveOrder(req.body);
    res.send({
      message: "Product has been posted",
      body: saveOrder
    });

});

orderRouter.get("/all", async (req, res) => {
    const cart = await oContainer.getAllOrders();
    res.send({
      message: "geting all the Carts",
      data: cart,
    });
  });
  
orderRouter.get("/:id", async (req, res) => {
  const user = await oContainer.getOrderById(req.params.id);
  res.send({
    message: "USERS",
    data: user,
  });
});



export default orderRouter;
