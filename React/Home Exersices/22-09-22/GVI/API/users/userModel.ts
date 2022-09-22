import {Schema, model} from "mongoose";

export enum Role {
  MENTEE = "mentee",
  MENTOR = "mentor",
  ADMIN = "admin",
}

enum Domain {
  FULLSTACK_DEVELOPER = "fullstack_developer",
  BACKEND_DEVELOPER = "backend_developer",
  FRONTEND_DEVELOPER = "frontend_developer",
  UX_DESIGNER = "ux_designer",
}

export const Startup = new Schema({
    name:String
})
export const Consulting = new Schema({
    name:String
})

export const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: [String],
    enum: Role,
    default: Role.MENTEE,
    required: true,
  },
  startup:[Startup],
  mentoring:[Consulting],
  location: {
    country: String,
    city: String,
    street: String,
    county: String,
  },
  linksView: {
    linkdinURL: String,
    facebookURL: String,
    instagramURL: String,
    gitHubURL: String,
  },
  domain: {
    type: String,
    enum: Domain,
    default: Domain.FULLSTACK_DEVELOPER,
  },
  phoneNumber: String,
  about: String,
  imgSRC: String,
});



export const UserModel = model("users", UserSchema);

// export default UserModel;
