import express from "express";
import UserModel from "./usersModel";
import jwt from "jwt-simple";

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

        const cookieUserId = { userId: userDB._id };
        const secret = process.env.JWT_SECRET;
        if (!secret) throw new Error("Couldn't load secret from .env");

        const JWTCookieUserId = jwt.encode(cookieUserId, secret);
        console.log()
        if (userDB) {
            res.cookie("userID", JWTCookieUserId);
            res.send({ login: true, userDB });
        } else {
            res.send({ login: false });
        }
    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function getUser(req: express.Request, res: express.Response) {
    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) throw new Error("Couldn't load secret from .env");
        const { userID } = req.cookies;
        if (!userID) throw new Error("Couldn't recieve userID from cookies");

        const decodedUserId = jwt.decode(userID, secret);
        const { userId } = decodedUserId;

        const userDB = await UserModel.findOne({ "_id": userId });
        if(!userDB) throw new Error(`Couldn't find user with id: ${userId}`);

        res.send({ userDB });

    } catch (error) {
        res.send({ error: error.message });
    }
}