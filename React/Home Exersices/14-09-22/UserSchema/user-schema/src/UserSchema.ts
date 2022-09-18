import mongoose from "mongoose";

enum Role {
    MENTEE = "mentee",
    MENTOR = "mentor",
    ADMIN = "admin"
}

enum Domain {
    FULLSTACK_DEVELOPER = "fullstack_developer",
    BACKEND_DEVELOPER = "backend_developer",
    FRONTEND_DEVELOPER = "frontend_developer",
    UX_DESIGNER = "ux_designer",

}

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
        type: Array<String>,
        enum: Role,
        default: Role.MENTEE,
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
    domain: {
        enum: Domain,
        default: Domain.FULLSTACK_DEVELOPER
    },
    phoneNumber: String,
    about: String,
    imgSRC: String,
});

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;





