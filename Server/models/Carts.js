import mongoose from "mongoose";
import productsInCartSchema from "../models/ProductsInCart.js";
const {Schema} = mongoose
const cartSchema = new Schema({
    email: { type: String, required: true },
    date: { type: String, required: true },
    items: [productsInCartSchema],
    address: { type: String, required: true },
});
const CartModel = mongoose.model('carts', cartSchema);

export default CartModel;
