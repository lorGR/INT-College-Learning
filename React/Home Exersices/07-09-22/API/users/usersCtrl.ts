import express from "express";
import UserModel from "./usersModel";

export async function registerUser(req: express.Request, res: express.Response) {
    try {
        const { username, password, email } = req.body;
        if (!username || !password || !email) throw new Error("Couldn't recieve all fields");

        const addUserDB = new UserModel({ username, email, password });
        if (!addUserDB) throw new Error("Couldn't add user to DB");
        await addUserDB.save();
        res.send({ registered: true });
    } catch (error) {
        console.error(error);
        res.send({ error: error.message });
    }
}

export async function loginUser(req: express.Request, res: express.Response) {
    try {
        const { password, email } = req.body;
        if (!password || !email) throw new Error("Couldn't recieve all fields");

        const userDB = await UserModel.findOne({ email: email, password: password });
        if (!userDB) throw new Error("Couldn't find user");
        res.send({ login: true, user: userDB });
    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function getUser(req: express.Request, res: express.Response) {
    try {
        const { userId } = req.body;
        const userDB = await UserModel.findOne({"_id": userId});
        if(!userDB) throw new Error(`Couldn't find user with the id ${userId}`);
        res.send({ user: userDB});
    } catch (error) {
        res.send({ error: error.message });
    }
}