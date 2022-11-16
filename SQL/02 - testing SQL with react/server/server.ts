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
        if (err) throw err;
        console.log(`Connected to MySQL`);
    } catch (error) {
        console.error(error);
    }
});

import productsRoute from "./API/products/productsRoute";
app.use("/products", productsRoute);

import testingRoute from "./API/test/testRoute";
app.use("/testing", testingRoute);

app.get("/insert-prod", (req: express.Request, res: express.Response) => {
    try {
        const colors = ['Red', 'Blue', 'White','Purple', 'Midnight Black'];
        const storages = ["128GB", "256GB", "512GB"];
        const price = ["₪4,479", "₪4,979", "₪5,979"];
        colors.forEach(color => {
            storages.forEach(storage => {
                if(storage === "128GB") {
                    const sql = `INSERT INTO products(type, name, price, storage, color) VALUES
                    ('iPhone', 'iPhone 14 Plus', '₪4,479', '${storage}', '${color}')`;
                    connection.query(sql, (error, result) => {
                        if (error) throw error;
                    });
                } else if ( storage === "256GB") {
                    const sql = `INSERT INTO products(type, name, price, storage, color) VALUES
                    ('iPhone', 'iPhone 14 Plus', '₪4,979', '${storage}', '${color}')`;
                    connection.query(sql, (error, result) => {
                        if (error) throw error;
                    });
                } else if (storage === "512GB") {
                    const sql = `INSERT INTO products(type, name, price, storage, color) VALUES
                    ('iPhone', 'iPhone 14 Plus', '₪5,979', '${storage}', '${color}')`;
                    connection.query(sql, (error, result) => {
                        if (error) throw error;
                    });
                }
            }) 
        });
        res.send({ok: "sucssces"});
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})

app.listen(port, () => {
    console.info(`Server is up and running at http://localhost:${port}`);
});