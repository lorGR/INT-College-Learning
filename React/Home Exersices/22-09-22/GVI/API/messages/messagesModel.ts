import mongoose from 'mongoose';
import { UserSchema } from '../users/userModel';

export enum MessageType {
    MESSAGE = "message",
    REQUEST = "request", // why exist ?
    RESPONSE = "response", // why exist ?
    DOCUMENT = "document"
}

export const MessageSchema = new mongoose.Schema({
    time: {
        type: String,
        required: true
    },
    from: UserSchema,
    to: UserSchema,
    text: String,
    type: {
        type: String,
        enum: MessageType,
        default: MessageType.MESSAGE,
        required: true
    },
    read: Boolean
});

export const MessageModel = mongoose.model('messages', MessageSchema);