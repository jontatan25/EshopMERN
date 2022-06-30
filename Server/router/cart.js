import express from "express";

const { Router } = express;
const cartRouter = Router();

import CartContainer from "../mongoContainercart.js"
const mContainer = new CartContainer("cart");

// MONGODB
cartRouter.post("/", async (req, res) => {
    console.log(req.body)
    const saveCart = await mContainer.saveCart(req.body);
    res.send({
      message: "Product has been posted",
      body: saveCart
    });

});

cartRouter.get("/all", async (req, res) => {
    const cart = await mContainer.getAllcarts();
    res.send({
      message: "USERS",
      data: cart,
    });
  });
  
cartRouter.get("/:id", async (req, res) => {
  const user = await mContainer.getCartById(req.params.id);
  res.send({
    message: "USERS",
    data: user,
  });
});


cartRouter.delete("/:id", async (req, res) => {

  console.log(req.params.id)

    const productById = await mContainer.getCartById(req.params.id);
    if (!productById) {
      res.send({
        error: `"El mensaje con el id # ${req.params.id} no existe"`,
      });
    } else {
      await mContainer.deleteCart(req.params.id)
      res.send({
        message: `"El producto con el id # ${req.params.id} ha sido borrado`,
      });
      ;
    }
});


export default cartRouter;
