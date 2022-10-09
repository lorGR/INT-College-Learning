import express from "express";
import UserModel from "./UserModel";

export async function availableEmail(req: express.Request, res:express.Response) {
    try {
        const { email } = req.body;
        if(!email) throw new Error("Couldn't receive email from req.body");

        const emailIsAvailable = await UserModel.find({email});
        emailIsAvailable.length > 0 ? res.send({available: false}) : res.send({available: true});
    } catch (error) {
        res.send({ error: error.message });
    }
}