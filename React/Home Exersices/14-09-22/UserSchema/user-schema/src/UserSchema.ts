import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["mentee", "mentor", "admin"],
        required: true
    },
    location: {
        country: String,
        city: String,
        street: String,
        county: String
    },
    linksView: {
        linkdinURL: String,
        facebookURL: String,
        instagramURL: String,
        gitHubURL: String
    },
    phoneNumber: Number,
    about: String,
});

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;





