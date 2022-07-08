import {saveCartDB} from "../DAOs/cartsMongoDB.js"

async function saveCart(cart){
    try {
        const res = await saveCartDB(cart);
        if (res) {
          return { success: true,message: " cart saved", message: res };
        }
      } catch (error) {
        console.log(`Error while saving: ${error}`);
      }
}

export {saveCart}