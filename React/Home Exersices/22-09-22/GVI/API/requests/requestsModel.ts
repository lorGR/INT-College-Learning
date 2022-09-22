import mongoose from "mongoose";
import { UserSchema } from "../users/userModel";



export enum Status {
  APPROVED = "approved",
  REJECTED = "rejected",
  PENDING = "pending",
}

export const RequestSchema = new mongoose.Schema({
  sender: {
    type: UserSchema,
    required: true,
  },
  reciver: {
    type: UserSchema,
    required: true,
  },
  message: String,
  status: {
    type: String,
    enum: Status,
    default: Status.PENDING,
  },
});

export const RequestModel = mongoose.model('requests', RequestSchema)
