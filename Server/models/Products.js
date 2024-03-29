import mongoose from "mongoose";
const {Schema} = mongoose
const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    URLPhoto: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    stock: { type: Number, required: true },
    brand: { type: String, required: true},
    color: { type: String, required: true},
    promo: { type: String, required: true },
});
const ProductModel = mongoose.model('products', productSchema);

export default ProductModel;
