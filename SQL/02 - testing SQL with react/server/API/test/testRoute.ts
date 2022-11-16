import express from "express";
import { addFavColor, getPerson1 } from "./testCtrl";
const router = express.Router();

router
    .get("/get-person-1", getPerson1)
    .post("/set-fav-color-person", addFavColor)

export default router

