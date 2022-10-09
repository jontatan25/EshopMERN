import mongoose from "mongoose";
import productsInCartSchema from "../models/ProductsInCart.js";
const {Schema} = mongoose
const orderSchema = new Schema({
    _id: { type: String, required: true },
    items: [productsInCartSchema],
    date: { type: String, required: true },
    status: { type: String, required: true },
    email: { type: String, required: true },
    address : { type: String, required: true },
});
const OrderModel = mongoose.model('orders', orderSchema);

export default OrderModel;
