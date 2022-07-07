import {saveProduct, getProductByCategory, getAllProducts, deleteProduct} from "../api/products.js"

async function saveProductController(req, res) {
    try {
      const product = req.body;
      const saveResult = await saveProduct(product);
      res.json(saveResult);
    } catch (error) {
      console.log("Error in Product Controller:" + error);
    }
  }
async function getProductByCategoryController(req, res) {
    try {
      const productCategory = req.params.categoryId;
      const getResult = await getProductByCategory(productCategory);
      res.json(getResult);
    } catch (error) {
      console.log("Error in Product Controller:" + error);
    }
  }
async function getAllProductsController(req, res) {
    try {
      const getResult = await getAllProducts();
      res.json(getResult);
    } catch (error) {
      console.log("Error in Product Controller:" + error);
    }
  }
  
  async function deleteProductController(req, res) {
      try {
        const productId = req.params.id;
        const getResult = await deleteProduct(productId);
        res.json(getResult);
      } catch (error) {
        console.log("Error in Product Controller:" + error);
      }
    }
  export {saveProductController,getProductByCategoryController,getAllProductsController,deleteProductController}