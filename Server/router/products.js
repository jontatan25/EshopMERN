import express from "express";
import { authenticateToken } from "../utils/utils.js";
import {saveProductController, getProductByCategoryController,getAllProductsController,deleteProductController} from "../controller/products.js"
const { Router } = express;
const productsRouter = Router();

// productsRouter.use(authenticateToken)

productsRouter.post("/", saveProductController);
productsRouter.get("/category/:categoryId", getProductByCategoryController);
productsRouter.get("/", getAllProductsController);
productsRouter.delete("/:id", deleteProductController);


export default productsRouter;
