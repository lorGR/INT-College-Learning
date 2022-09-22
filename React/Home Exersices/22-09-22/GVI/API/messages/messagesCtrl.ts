import express from "express";
import {UserModel}  from "../users/userModel";
import { MessageModel } from "./messagesModel";

export async function sendMessage(req: express.Request, res: express.Response) {
    try {
        // asume from client side we receive id of sender and receiver
        const { fromId, toId, text, type } = req.body;
        if (!fromId || !toId || !text || !type) throw new Error("Sender/Reciver/Message/Type wasn't recieved from req.body");

        const time: string = getCurrentTime(new Date().getHours(), new Date().getMinutes());

        const [senderUser, receiverUser] = await Promise.all([
            UserModel.findOne({ "userId": fromId }),
            UserModel.findOne({ "userId": toId })
        ]);
        if (!senderUser || !receiverUser) throw new Error("Sender and Receiver must exist on DB");

        const messageDB = await new MessageModel({
            from: senderUser,
            to: receiverUser,
            text,
            type,
            read: false,
            time
        });
        await messageDB.save();

        res.send({ messageSent: true, messageDB });
    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function sendDocument(req: express.Request, res: express.Response) {
    try {
        // Explore about creating document and sending it.
        const { from, to, type } = req.body;
        if (!from || !to || !type) throw new Error("Sender/Reciver/Type wasn't recieved from req.body");

        // Ask about documents

    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function getDocuments(req: express.Request, res: express.Response) {
    try {
        // Explore about getting documents
    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function getRecentMessagesByUserId(req: express.Request, res: express.Response) {
    try {
        const { senderId, reciverId } = req.body;
        if (!senderId || !reciverId) throw new Error("Sender/Reciever wasn't recieved from req.body");

        const messagesDB = await MessageModel.find(
            {
                $or: [
                    { "from.userId": senderId, "to.userId": reciverId },
                    { from: reciverId, to: senderId }]
            })
            .limit(3) // should be 20 in future
            .sort({ _id: -1 });

        const messages = messagesDB.reverse();

        res.send({ messages });
    } catch (error) {
        res.send({ error: error.message });
    }
}

function getCurrentTime(hours, minutes): string {
    try {
        minutes < 10 ? minutes = `0${minutes}` : minutes;
        return `${hours}:${minutes}`;
    } catch (error) {
        console.error(error);
    }
}
