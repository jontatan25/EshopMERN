import { saveProductDB, getProductByCategoryDB, getProductByIdDB, getAllProductsDB, deleteProductDB } from "../DAOs/productsMongoDB.js";

async function saveProduct(product) {
  try {
    const res = await saveProductDB(product);
    if (res) {
      return {message:" Product saved" , product : res}
    }
  } catch (error) {
    console.log(`Error while saving: ${error}`)
  }
}
async function getProductByCategory(category) {
  try {
    const res = await getProductByCategoryDB(category);
    if (res.length > 0) {
      return {message:" Products gathered by Category" , products : res}
    } else return {message:" Product not found"}
  } catch (error) {
    console.log(`Error while saving: ${error}`)
  }
}
async function getProductById(productId) {
  try {
      const getProduct = await getProductByIdDB(productId);
      if (getProduct == null) {
        return {
          success: false,
          message: `The Product with the id ${productId} was not found or it's been deleted`,
        };
      } else {
        return {
          success: true,
          message: `"The Product with the id ${productId} has been gathered`,
          product: getProduct
        };
      }
    } catch (error) {
      console.log(`Error while saving: ${error}`)
    }
}
async function getAllProducts() {
  try {
    const res = await getAllProductsDB();
    if (res.length > 0) {
      return {message:" All Products gathered" , products : res}
    } else return {message:" Product not found"}
  } catch (error) {
    console.log(`Error while saving: ${error}`)
  }
}

async function deleteProduct(id) {
    try {
        const deleteProduct = await deleteProductDB(id);
        if (deleteProduct === 0) {
          return {
            success: false,
            message: `The Product with the id ${id} was not found or it's been deleted`,
          };
        } else {
          await deleteProductDB(id);
          return {
            success: true,
            message: `"The Product with the id ${id} has been deleted`,
          };
        }
      } catch (error) {}
}

export { saveProduct, getProductByCategory, getProductById, getAllProducts,deleteProduct };
