import express from "express";
import { addLegoSet, getAllLegoSets } from "./legosCtrl";

const router = express.Router();

router
.post('/addLegoSet', addLegoSet)
.get("/getAllLegoSets", getAllLegoSets)


export default router;