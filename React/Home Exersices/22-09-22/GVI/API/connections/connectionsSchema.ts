import mongoose from 'mongoose';

export enum Status {
    APPROVED = "approved",
    REJECTED = "rejected",
    PENDING = "pending",
  }

const ConnectSchema = new mongoose.Schema({
    connection: {
        mentorId: String,
        menteeId: String,
        status: Status
    }
})

export const connectModel = new mongoose.model('connections', ConnectSchema)