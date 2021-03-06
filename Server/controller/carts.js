import {getCurrentUserCart,addProduct,substractOneProduct,deleteProduct} from "../api/carts.js"


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
      function print(productWithUserId) {
        console.log(productWithUserId)
      }
      print()
      const deleteResult = await deleteProduct(productWithUserId);
      res.json(deleteResult);
    } catch (error) {
      console.log("Error in Cart Controller:" + error);
    }
  }

export { getCurrentUserCartController,addProductController,substractOneProductController,deleteProductController}
