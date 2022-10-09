import express from "express";
import { availableEmail } from "./UserCtrl";
const router = express.Router();

router
    .post("/available-email", availableEmail)

export default router;