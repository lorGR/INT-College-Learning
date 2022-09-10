import express from "express";
import { addLegoSet } from "./legosCtrl";

const router = express.Router();

router.post('/addLegoSet', addLegoSet)


export default router;