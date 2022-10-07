import express from "express";
import { registerStep1 } from "./UserCtrl";
const router = express.Router();

router
    .post("/register-step-1", registerStep1)

export default router;