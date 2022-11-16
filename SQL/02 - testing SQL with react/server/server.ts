import express from "express";
import mysql from "mysql";

const app = express();
const port = 4000;

app.use(express.json());

export const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "testing"
});

connection.connect((err) => {
    try {
        if(err) throw err;
        console.log(`Connected to MySQL`);
    } catch (error) {
        console.error(error);
    }
});

import productsRoute from "./API/products/productsRoute";
app.use("/products", productsRoute);

import testingRoute from "./API/test/testRoute";
app.use("/testing", testingRoute);

app.listen(port, () => {
    console.info(`Server is up and running at http://localhost:${port}`);
});