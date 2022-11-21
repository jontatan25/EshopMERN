import mongoose from "mongoose";
const {Schema} = mongoose
const messageSchema = new Schema({

    username: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: String, required: true },
});
const MessageModel = mongoose.model('messages', messageSchema);

export default MessageModel;
