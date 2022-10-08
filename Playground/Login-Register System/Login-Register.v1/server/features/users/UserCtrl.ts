import express from "express";
import { UserValidation } from "./UserModel";
import { emailExist } from "./UsersHelper";

export async function registerStep1(req: express.Request, res: express.Response) {
    try {
        const { email, password, confirmPassword } = req.body;
        if (!email || !password || !confirmPassword) throw new Error("Missing fields: Email or Password or ConfirmPassword");

        const emailIsExist = await emailExist(email);
        if (emailIsExist) {
            res.send({ register: false, error: "email already in use" });
        }

        const { error } = UserValidation.validate({ email, password, confirmPassword });
        if (error) throw error;

        res.send({ register: true });
    } catch (error) {
        res.send({ error: error.message });
    }
}