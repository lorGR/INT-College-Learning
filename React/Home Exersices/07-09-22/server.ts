import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app: express.Application = express();

dotenv.config();
const mongoURI= process.env.MONGO_URI;

const port: number = 3000;

mongoose.connect(mongoURI)
    .then(() => {
        console.log("Connected to DB");
    })
    .catch(() => {
        console.log("Failed connect to DB");
    })

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}/`);
});