import express from "express";
import { authenticateToken } from "../utils/utils.js";
import { saveCartController,getCurrentUserCartController,addProductController,substractOneProductController, deleteProductController } from "../controller/carts.js";

const { Router } = express;
const cartRouter = Router();

cartRouter.use(authenticateToken);

cartRouter.post("/newCart", saveCartController);
cartRouter.get("/myCart", getCurrentUserCartController);
cartRouter.post("/addProduct", addProductController);
cartRouter.post("/substractOneProduct", substractOneProductController);
cartRouter.delete("/deleteProduct", deleteProductController);

cartRouter.get("*", async (req, res) => {
  res.status(404).send("Sorry, cant find that");
});

export default cartRouter;
