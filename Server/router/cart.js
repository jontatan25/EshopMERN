import express from "express";
import { authenticateToken } from "../utils/utils.js";
import { saveCartController,getCurrentUserCartController,addProductController,deleteProductController } from "../controller/carts.js";

const { Router } = express;
const cartRouter = Router();
// import CartContainer from "../mongoContainercart.js"
// const mContainer = new CartContainer("cart");

cartRouter.use(authenticateToken);

cartRouter.post("/newCart", saveCartController);
cartRouter.get("/myCart", getCurrentUserCartController);
cartRouter.post("/addProduct", addProductController);

cartRouter.delete("/deleteProduct", deleteProductController);
// cartRouter.delete("/product/:cartId", async (req, res) => {
//   const deleteInfo = { ...req.body, cartId: req.params.cartId };

//   const cart = await mContainer.deleteProduct(deleteInfo);
//   res.send({
//     message: "product deleted",
//   });
// });

cartRouter.delete("/id/:id", async (req, res) => {
  console.log(req.params.id);

  const productById = await mContainer.getCartById(req.params.id);
  if (!productById) {
    res.send({
      error: `"El mensaje con el id # ${req.params.id} no existe"`,
    });
  } else {
    await mContainer.deleteCart(req.params.id);
    res.send({
      message: `"El producto con el id # ${req.params.id} ha sido borrado`,
    });
  }
});


// cartRouter.get("/all", async (req, res) => {
//     const cart = await mContainer.getAllcarts();
//     res.send({
//       message: "geting all the Carts",
//       data: cart,
//     });
//   });

cartRouter.get("*", async (req, res) => {
  res.status(404).send("Sorry, cant find that");
});

export default cartRouter;
