import {saveCart,getCurrentUserCart,addProduct,substractOneProduct} from "../api/carts.js"

async function saveCartController(req, res) {
  try {
    const userId = req.user.data
    const saveResult = await saveCart(userId);
    res.json(saveResult);
  } catch (error) {
    console.log("Error in Cart Controller:" + error);
  }
}
async function getCurrentUserCartController(req, res) {
    try {
      const userId = req.user.data
      const getResult = await getCurrentUserCart(userId);
      res.json(getResult);
    } catch (error) {
      console.log("Error in Cart Controller:" + error);
    }
  }
async function addProductController(req, res) {
    try {
      const productWithUserId = {userId: req.user.data, newProduct :req.body}
      const addResult = await addProduct(productWithUserId);
      res.json(addResult);
    } catch (error) {
      console.log("Error in Cart Controller:" + error);
    }
  }
async function substractOneProductController(req, res) {
  try {
    const productWithUserId = {userId: req.user.data, newProduct :req.body}
    const substractOneResult = await substractOneProduct(productWithUserId);
    res.json(substractOneResult);
  } catch (error) {
    console.log("Error in Cart Controller:" + error);
  }
  }
async function deleteProductController(req, res) {
    try {
      const productWithUserId = {userId: req.user.data, newProduct :req.body}
      const deleteResult = await deleteProduct(productWithUserId);
      res.json(deleteResult);
    } catch (error) {
      console.log("Error in Cart Controller:" + error);
    }
  }

export {saveCartController,getCurrentUserCartController,addProductController,deleteProductController,substractOneProductController}
