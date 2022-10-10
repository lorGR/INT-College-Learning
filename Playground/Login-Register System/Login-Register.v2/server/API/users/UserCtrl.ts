import express from "express";
import UserModel from "./UserModel";

export async function register(req: express.Request, res: express.Response) {
    try {
        const { email, password, username } = req.body;
        if (!email || !password || !username ) throw new Error("Couldn't receive email or password or username from req.body");

        const userDB = await UserModel.create({ email, password, username });
        if(!userDB) throw new Error(`Couldn't create userDB with data: ${email}`);

        res.send({userDB});

    } catch (error) {
        res.send({ error: error.message });
    }
}