import express from "express";

import { connection } from "../../server";

export function getPerson1 (req: express.Request, res: express.Response) {
    try {
        const sql = `SELECT * FROM person WHERE person_id = 1`;
        connection.query(sql, (error, result) => {
            if(error) throw error;
            console.log(result);
            res.send({result});
        })
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}