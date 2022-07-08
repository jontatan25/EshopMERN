import mongoose from "mongoose";
const {Schema} = mongoose
const productsInCartSchema = new Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    URLPhoto: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
}, { _id: false });
// const ProductInCartModel = mongoose.model('productsInCart', productsInCartSchema);

export default productsInCartSchema;
