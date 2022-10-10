import express from "express";
import { register } from "./UserCtrl";

const router = express.Router();

router
    .post("/register", register);

export default router;