import express from "express";
import { authenticateToken } from "../utils/utils.js";
import {saveProductController, getProductByCategoryController,getAllProductsController,deleteProductController} from "../controller/products.js"
const { Router } = express;
const productsRouter = Router();

productsRouter.post("/",authenticateToken, saveProductController);
productsRouter.get("/category/:categoryId", authenticateToken, getProductByCategoryController);
productsRouter.get("/", authenticateToken, getAllProductsController);
productsRouter.delete("/:id", deleteProductController);


export default productsRouter;
