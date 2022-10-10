import axios from "axios";
import React from "react";
import Joi, { Err } from "joi";
import { joiPasswordExtendCore } from "joi-password";

const joiPassword = Joi.extend(joiPasswordExtendCore);

export const PasswordSecurity = Joi.object({
    password: joiPassword
        .string()
        .min(6)
        .max(16)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .minOfSpecialCharacters(1)
        .noWhiteSpaces()
        .required(),
});

export const EmailSecurity = Joi.object({
    email: Joi
        .string()
        .required()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
});

export function handlePasswordSecurity(event: React.ChangeEvent<HTMLInputElement>): string | boolean {
    try {

        const registerButton = document.getElementById("register") as HTMLInputElement;

        const password = event.target.value;
        const { error } = PasswordSecurity.validate({ password });
        if (error) throw error;
        event.target.style.borderColor = "green";
        return true;
    } catch (error) {
        console.error(error);
        event.target.style.borderColor = "red";
        return (error as Error).message;
    }
}

export function handleMatchPassword(): string | boolean {
    try {
        const password = document.getElementById("password") as HTMLInputElement;
        const confirmPassword = document.getElementById("confirmPassword") as HTMLInputElement;
        const registerButton = document.getElementById("register") as HTMLInputElement;

        if (confirmPassword.value !== password.value) {
            password.style.borderColor = "red";
            confirmPassword.style.borderColor = "red";
            registerButton.disabled = true;
            return true;
        } else {
            password.style.borderColor = "green";
            confirmPassword.style.borderColor = "green";
            registerButton.disabled = false;
            return false;
        }
    } catch (error) {
        console.error(error);
        return (error as Error).message;
    }
}

export async function handleAvailableEmail(event: React.ChangeEvent<HTMLInputElement>): Promise<any> {
    try {

        const registerButton = document.getElementById("register") as HTMLInputElement;

        const email = event.target.value;

        const { error } = EmailSecurity.validate({ email });
        if(error) throw error;

        const { data } = await axios.post("/users/available-email", { email });
        if (!data) throw new Error("Couldn't receive data from AXIOS POST: /users/available-email");
        const { available } = data;
        if (available) {
            event.target.style.borderColor = "green";
            registerButton.disabled = false;
            return true;
        } else {
            event.target.style.borderColor = "red";
            registerButton.disabled = true;
            throw new Error("Email already in use");
        }
    } catch (error) {
        console.error(error);
        return (error as Error).message;
    }
}


