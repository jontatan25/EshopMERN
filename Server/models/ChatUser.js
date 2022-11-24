import mongoose from "mongoose";
const {Schema} = mongoose
const chatUserSchema = new Schema({

    username: { type: String, required: true },
    country: { type: String, required: true },
    age: { type: String, required: true },
    gender: { type: String, required: true },
    avatar: { type: String, required: true },
    date: { type: String, required: true },
});
const ChatUserModel = mongoose.model('chatUser', chatUserSchema);

export default ChatUserModel;
