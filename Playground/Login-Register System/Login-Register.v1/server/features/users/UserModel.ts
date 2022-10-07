import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";
import mongoose from "mongoose";

const joiPassword = Joi.extend(joiPasswordExtendCore);

export const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String
    },
});

export const UserValidation = Joi.object({
    email: Joi
        .string()
        .required()
        .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
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
    confirmPassword: Joi.ref("password")
});

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;