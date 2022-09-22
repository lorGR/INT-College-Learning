import express from "express";
import { sendMessage, getRecentMessagesByUserId } from "./messagesCtrl";

const router = express.Router();

router
    .post("/sendMessage", sendMessage)
    .post("/getRecentMessagesByUserId", getRecentMessagesByUserId)

export default router;