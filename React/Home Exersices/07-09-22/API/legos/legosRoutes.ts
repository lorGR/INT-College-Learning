import express from "express";
import { addLegoSet, deleteItem, editItem, getAllLegoSets } from "./legosCtrl";

const router = express.Router();

router
    .post('/addLegoSet', addLegoSet)
    .get("/getAllLegoSets", getAllLegoSets)
    .delete("/deleteItem", deleteItem)
    .patch("/editItem", editItem)


export default router;