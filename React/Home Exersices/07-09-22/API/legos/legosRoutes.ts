import express from "express";
import { addLegoSet, deleteItem, getAllLegoSets } from "./legosCtrl";

const router = express.Router();

router
    .post('/addLegoSet', addLegoSet)
    .get("/getAllLegoSets", getAllLegoSets)
    .delete("/deleteItem", deleteItem)


export default router;