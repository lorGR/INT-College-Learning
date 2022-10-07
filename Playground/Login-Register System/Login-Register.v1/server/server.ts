import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const app = express();
const port = process.env.PORT;
const mongodbURI = process.env.MONGODB_URI;

if (mongodbURI) {
    mongoose
        .connect(mongodbURI)
        .then(() => { console.log("Conncted to DB"); })
        .catch(() => { console.log("Couldn't connect to DB"); })
} else {
    console.log("Couldn't find mongodbURI");
}

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});
