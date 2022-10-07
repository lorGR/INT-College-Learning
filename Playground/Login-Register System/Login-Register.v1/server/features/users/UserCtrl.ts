import express from "express";
import { UserValidation } from "./UserModel";

export async function registerStep1(req: express.Request, res: express.Response) {
    try {
        const { email, password, confirmPassword } = req.body;
        if (!email || !password || !confirmPassword) throw new Error("Missing fields: Email or Password or ConfirmPassword");

        const { error } = UserValidation.validate({ email, password, confirmPassword });
        if (error) throw error;

        res.send({ continue: true });
    } catch (error) {
        res.send({ error: error.message });
    }
}