import express from "express";
import { getUser, loginUser, registerUser } from "./usersCtrl";
const router = express.Router();

router
    .post("/registerUser", registerUser)
    .post("/loginUser", loginUser)
    .post("/getUser", getUser)

export default router;