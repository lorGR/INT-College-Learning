import express from "express";
import { addUser } from "./usersCtrl";
const router = express.Router();

router
    .post("/addUser", addUser)

export default router;