import express from "express";
import { getPerson1 } from "./testCtrl";
const router = express.Router();

router
    .get("/get-person-1", getPerson1)

export default router

