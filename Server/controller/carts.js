import {saveCart} from "../api/carts.js"

async function saveCartController(req, res) {
  try {
    const cart = req.body;
    const saveResult = await saveCart(cart);
    res.json(saveResult);
  } catch (error) {
    console.log("Error in Cart Controller:" + error);
  }
}

export {saveCartController}
