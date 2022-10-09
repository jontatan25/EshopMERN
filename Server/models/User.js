import mongoose from "mongoose";
const {Schema} = mongoose
const userSchema = new Schema({

  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  address: { type: String, required: true },
  cart: []
});
const UserModel = mongoose.model('Users', userSchema);

export default UserModel;
