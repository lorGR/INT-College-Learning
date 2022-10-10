import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const app = express();
const port = process.env.PORT;
const mongodbURI = process.env.MONGODB_URI;

app.use(express.static("../public/build"));
app.use(express.json());

if (mongodbURI) {
    mongoose
        .connect(mongodbURI)
        .then(() => { console.log("Conncted to DB"); })
        .catch(() => { console.log("Couldn't connect to DB"); })
} else {
    console.log("Couldn't find mongodbURI");
}

import UserRoutes from "./API/user/UserRoute";
app.use("/users", UserRoutes);


app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});
