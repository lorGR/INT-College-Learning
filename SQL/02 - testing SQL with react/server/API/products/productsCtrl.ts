import express from "express";
import { connection } from "../../server";
export function getAllProducts(req: express.Request, res: express.Response) {
    try {
        const sql = `SELECT * FROM products`;
        connection.query(sql, (error, result) => {
            if (error) throw error;
            console.log(result);
            res.send({ msg: "ok" });
        })
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}

export function insertProduct(req: express.Request, res: express.Response) {
    try {
        const { prodId, prodCategory, prodDesc, prodName,
            prodPrice, prodPriceEilat, prodScreenSize,
            prodColor1, prodColor2, prodColor3, prodColor4,
            prodModel, prodMemoVol }
            = req.body;
        const sql = `INSERT INTO products VALUES (
            '${prodId}','${prodCategory}','${prodDesc}','${prodName}','${prodPrice}','${prodPriceEilat}','${prodScreenSize}','${prodColor1}','${prodColor2}','${prodColor3}','${prodColor4}','${prodModel}','${prodMemoVol}'
            )`;
        connection.query(sql, (error, result) => {
            if (error) throw error;
            console.log(result);
            res.send({ msg: `Product named: ${prodName} was added` });
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}