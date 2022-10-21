import express from "express";
import { authenticateToken } from "../utils/utils.js";
import {saveProductController, getProductByCategoryController,getProductByIdController,getAllProductsController,deleteProductController} from "../controller/products.js"
const { Router } = express;
const productsRouter = Router();

// productsRouter.use(authenticateToken)

productsRouter.post("/", saveProductController);
productsRouter.get("/category/:categoryId", getProductByCategoryController);
productsRouter.get("/id/:id", getProductByIdController);
productsRouter.get("/", getAllProductsController);
productsRouter.delete("/:id", deleteProductController);


export default productsRouter;
