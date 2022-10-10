import axios from "axios";
import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";
import { generateUsername } from "friendly-username-generator";

const joiPassword = Joi.extend(joiPasswordExtendCore);

const EmailValidation = Joi.object({
    email: Joi
        .string()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
        .required()
});
const PasswordValidation = Joi.object({
    password: joiPassword
        .string()
        .min(6)
        .max(16)
        .minOfLowercase(1)
        .minOfUppercase(1)
        .minOfNumeric(1)
        .minOfSpecialCharacters(1)
        .noWhiteSpaces()
        .required()
});

let validEmail = false;
let validPassword = false;
let validConfirmPassword = false;

export function handleEmailSecurity(event: React.ChangeEvent<HTMLInputElement>) {
    try {
        const email = event.target.value;

        const { error } = EmailValidation.validate({ email });
        if (error) throw error;

        validEmail = true;

    } catch (error) {
        console.error(error);
        validEmail = false;
    }
}

export function handlePasswordSecurity(event: React.ChangeEvent<HTMLInputElement>) {
    try {
        const password = event.target.value;

        const { error } = PasswordValidation.validate({ password });
        if (error) throw error;

        validPassword = true;

    } catch (error) {
        console.error(error);
        validPassword = false;
    }
}

export function handlePasswordMatch(event: React.ChangeEvent<HTMLInputElement>) {
    try {
        const confirmPassword = event.target.value;
        const password = document.getElementById("password") as HTMLInputElement;

        if (confirmPassword !== password.value) {
            throw new Error("Passwords doesn't match");
        }

        validConfirmPassword = true;

    } catch (error) {
        console.error(error);
        validConfirmPassword = false;
    }
}

export function checkValidation(): boolean {
    if (validEmail && validPassword && validConfirmPassword) {
        return true
    }
    return false;
}

export async function register(email: string, password: string) {
    try {
        const username = generateUsername({ useHyphen: true, useRandomNumber: true });
        const { data } = await axios.post("/users/register", { email, password, username });
        if (!data) throw new Error("Couldn't receive data from axios POST: /users/register");
        const { userDB, error } = data;
        if (error) throw error;
        return userDB;
    } catch (error) {
        console.error(error);
    }
}
