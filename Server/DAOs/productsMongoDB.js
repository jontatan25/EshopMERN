import ProductModel from "../models/Products.js";
import mongoose from "mongoose";

const { connect, disconnect } = mongoose;

const URL = "mongodb://localhost:27017/ecommerce";

async function saveProductDB(product) {
  try {
    await connect(URL);
    console.log(`Base de datos connectada en ${URL} `);
    const prod1 = new ProductModel({
      id: product.id,
      name: product.name,
      price: product.price,
      URLPhoto: product.URLPhoto,
      description: product.description,
      category: product.category,
      stock: product.stock,
    });
    const saveResult = await prod1.save();
    return saveResult;
  } catch (error) {
    console.log(`Server error: ${error}`);
  } finally {
    await disconnect().catch((error) => console(error));
  }
}
async function getProductByCategoryDB(category) {
  try {
    try {
      await connect(URL);
      console.log(`Base de datos connectada en ${URL} `);
      const getProduct = await ProductModel.find({ category: category });
      return getProduct;
    } catch (error) {
      console.log(`Server error: ${error}`);
    } finally {
      disconnect().catch((error) => console(error));
    }
  } catch (error) {
    console.log(`Server error: ${error}`);
  } finally {
    await disconnect().catch((error) => console(error));
  }
}

async function getAllProductsDB() {
  try {
    await connect(URL);
    console.log(`Base de datos connectada en ${URL} `);
    const getProducts = await ProductModel.find({});
    return getProducts;
  } catch (error) {
    console.log(`Server error: ${error}`);
  } finally {
    disconnect().catch((error) => console(error));
  }
}
async function deleteProductDB(id) {
  try {
    await connect(URL);
    const res = await ProductModel.deleteOne({ id: id });
    const deleteConfirmation = res.deletedCount;
    return deleteConfirmation;
  } catch (error) {
    console.log(`Persistance error: ${error}`);
  } finally {
    disconnect().catch((error) => console(error));
  }
}

export {
  saveProductDB,
  getProductByCategoryDB,
  getAllProductsDB,
  deleteProductDB,
};
