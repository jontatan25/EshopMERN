import mongoose from "mongoose";
import itemSchema from "./Items.js"
const {Schema} = mongoose
const orderSchema = new Schema({
    _id: { type: String, required: true },
    items: [itemSchema],
    date: { type: String, required: true },
    status: { type: String, required: true },
    email: { type: String, required: true },
});
const OrderModel = mongoose.model('orders', orderSchema);

export default OrderModel;
