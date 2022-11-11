import express from "express";
import mysql from "mysql";

const app = express();
const port = 4000;

app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "firstDB"
});

connection.connect((err: any) => {
    try {
        if (err) throw err;
        console.info(`Connected to MySQL`);
    } catch (error) {
        console.error(error);
    }
});

app.post("/api/create-table", (req: express.Request, res: express.Response) => {
    try {
        const sql = `CREATE TABLE persons (id INT AUTO_INCREMENT PRIMARY KEY, first_name VARCHAR(64), last_name VARCHAR(64))`;
        connection.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send({ msg: "Table created" });
        })
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.post("/api/alter-person", (req: express.Request, res: express.Response) => {
    try {
        const { colName, colType } = req.body;
        if (!colName || !colType) throw new Error(`Couldn't recieve colName or colType from req.body`);

        const sql = `ALTER TABLE persons ADD COLUMN ${colName} ${colType}`;
        connection.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send({ msg: `altered persons table with ${colName} column typed as ${colType}` });
        });

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.post("/api/insert-person", (req: express.Request, res: express.Response) => {
    try {
        const { first_name, last_name } = req.body;
        if (!first_name || !last_name) throw new Error("first_name and last_name required and wasn't found by req.body");

        const sql = `INSERT INTO persons (first_name,last_name) VALUES ("${first_name}","${last_name}")`;
        connection.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send({ msg: `inserted new person first_name: ${first_name} last_name: ${last_name}` });
        });

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

app.post("/api/update-year-person", (req: express.Request, res: express.Response) => {
    try {
        const { year, id } = req.body;
        if (!year || !id) throw new Error("Couldn't receive year or id of the person from req.body");

        const sql = `UPDATE firstDB.persons SET birth_year = ${year} WHERE (id = ${id})`;
        connection.query(sql, (err, results) => {
            if (err) throw err;
            console.log(results);
            res.send({ msg: `updated person with id: ${id} with birth_year to: ${year}` });
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})

app.post("/api/person-by-year", (req: express.Request, res: express.Response) => {
    try {
        const { year } = req.body;
        if (!year) throw new Error("Couldn't recieve year from req.body");

        const sql = `SELECT * FROM persons WHERE birth_year = ${year}`;

        connection.query(sql, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.send({ result, msg: `Found the persons with that birth year of them is: ${year}` });
        });
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})

app.listen(port, () => {
    return console.log(`server is running: http://localhost:${port}`);
});