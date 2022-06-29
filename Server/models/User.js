import mongoose from "mongoose";
const {Schema} = mongoose
const userSchema = new Schema({

  email: { type: String, required: true },
  password: { type: String, required: true },
  username: { type: String, required: true },
  direccion: { type: String, required: true },
  edad: { type: String, required: true },
  telefono: { type: String, required: true },
  avatar: { type: String, required: true },
  cart: []
});
const UserModel = mongoose.model('newUsers', userSchema);

export default UserModel;
