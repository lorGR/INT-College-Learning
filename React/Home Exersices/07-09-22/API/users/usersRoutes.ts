import express from "express";
import { loginUser, registerUser } from "./usersCtrl";
const router = express.Router();

router
    .post("/registerUser", registerUser)
    .post("/loginUser", loginUser)

export default router;