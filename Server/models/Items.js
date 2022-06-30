import mongoose from "mongoose";
const {Schema} = mongoose
const itemSchema = new Schema({

    name: { type: String, required: true },
    price: { type: Number, required: true },
    URLPhoto: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
});
// const ItemsModel = mongoose.model('carts', itemsSchema);

export default itemSchema;
