import express from "express";
import { UserModel } from "../users/userModel";
import { MessageModel } from "./messagesModel";

export async function sendMessage(req: express.Request, res: express.Response) {
    try {
        // asume from client side we receive id of sender and receiver
        const { senderId, receiverId, text, type } = req.body;
        if (!senderId || !receiverId || !text || !type) throw new Error("Sender/Reciver/Message/Type wasn't recieved from req.body");

        const time: string = getCurrentTime(new Date().getHours(), new Date().getMinutes());

        const [senderUser, receiverUser] = await Promise.all([
           await UserModel.findById(senderId),
           await UserModel.findById(receiverId)
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

        const [senderUser, receiverUser] = await Promise.all([
            await UserModel.findById(senderId),
            await UserModel.findById(reciverId)
        ]);
        if(!senderUser || !receiverUser) throw new Error("Coulnd't find users with the specific id");

        const messages = await MessageModel.find(
            {
                $or: [
                    { "from._id": senderId, "to._id": reciverId },
                    { "from._id": reciverId, "to._id": senderId }]
            })
            .limit(20)
            .sort({ _id: -1 });

        const messagesDB = messages.reverse();

        res.send({ messagesDB });
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
