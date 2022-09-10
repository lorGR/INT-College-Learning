import express from "express";
import { getUser, loginUser, registerUser } from "./usersCtrl";
const router = express.Router();

router
    .post("/getUser", getUser)
    .post("/registerUser", registerUser)
    .post("/loginUser", loginUser)

export default router;