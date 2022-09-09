import express from "express";
import dotenv from "dotenv";

const app: express.Application = express();

dotenv.config();
const port: string = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}/`);
});