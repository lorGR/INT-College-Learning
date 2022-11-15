import express from "express";
import { getAllProducts, insertProduct } from "./productsCtrl";
const router = express.Router();

router
    .get('/get-all-products', getAllProducts)
    .post('/insert-product', insertProduct)

export default router;