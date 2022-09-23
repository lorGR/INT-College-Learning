"use strict";
exports.__esModule = true;
exports.UserModel = exports.UserSchema = exports.Consulting = exports.Startup = exports.Role = void 0;
var mongoose_1 = require("mongoose");
var Role;
(function (Role) {
    Role["MENTEE"] = "mentee";
    Role["MENTOR"] = "mentor";
    Role["ADMIN"] = "admin";
})(Role = exports.Role || (exports.Role = {}));
var Domain;
(function (Domain) {
    Domain["FULLSTACK_DEVELOPER"] = "fullstack_developer";
    Domain["BACKEND_DEVELOPER"] = "backend_developer";
    Domain["FRONTEND_DEVELOPER"] = "frontend_developer";
    Domain["UX_DESIGNER"] = "ux_designer";
})(Domain || (Domain = {}));
exports.Startup = new mongoose_1.Schema({
    name: String
});
exports.Consulting = new mongoose_1.Schema({
    name: String
});
exports.UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    firstName: {
        type: String,
        required: true
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
        type: [String],
        "enum": Role,
        "default": Role.MENTEE,
        required: true
    },
    startup: [exports.Startup],
    mentoring: [exports.Consulting],
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
        type: String,
        "enum": Domain,
        "default": Domain.FULLSTACK_DEVELOPER
    },
    phoneNumber: String,
    about: String,
    imgSRC: String
});
exports.UserModel = mongoose_1.model("users", exports.UserSchema);
// export default UserModel;
