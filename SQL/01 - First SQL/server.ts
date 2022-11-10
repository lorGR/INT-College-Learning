import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 4000;
const sqlPassword = process.env.PASSWORD;

app.use(express.json());

const connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "password",
    database: "class_exersice_01"
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
    const query = `CREATE TABLE class_exersice_01.teachers (
        teacher_id INT NOT NULL AUTO_INCREMENT,
        first_name VARCHAR(45) NOT NULL,
        last_name VARCHAR(45) NOT NULL,
        PRIMARY KEY (teacher_id),
        UNIQUE INDEX teacher_id_UNIQUE (teacher_id ASC) VISIBLE)`;

    connection.query(query, (err, results, fields) => {
        try {
            if (err) throw err;
            console.log(results);
            console.log(fields);
            res.send({ created: true, message: `table was created` });
        } catch (error) {
            res.send({ error: error.message });
        }

    });
});

app.post("/api/add-row", (req: express.Request, res: express.Response) => {
    const { first_name , last_name} = req.body;
    const query = `INSERT INTO class_exersice_01.teachers (first_name, last_name) VALUES ("${first_name}", "${last_name}")`;
    
    connection.query(query, (err, result, fields) => {
        try {
            if(err) throw err;
            console.log(result);
            console.log(fields);
            res.send({created: true, message: "added row"});
        } catch (error) {
            res.send({error: error.message, created: false});
        }
    })

})

app.listen(port, () => {
    return console.log(`server is running: http://localhost:${port}`);
});