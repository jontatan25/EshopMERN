import mongoose from "mongoose";
const {Schema} = mongoose
const messageSchema = new Schema({

    email: { type: String, required: true },
    type: { type: String, required: true },
    date: { type: String, required: true },
    body: { type: String, required: true },
});
const MessageModel = mongoose.model('messages', messageSchema);

export default MessageModel;
