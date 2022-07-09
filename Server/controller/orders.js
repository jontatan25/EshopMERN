import {createOrder} from "../api/orders.js"

async function createOrderController(req, res) {
    try {
      const userId = req.user.data
      const saveResult = await createOrder(userId);
      res.json(saveResult);
    } catch (error) {
      console.log("Error in Cart Controller:" + error);
    }
  }

  export {createOrderController}