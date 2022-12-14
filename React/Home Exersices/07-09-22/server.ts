import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const app: express.Application = express();

app.use(express.json());
app.use(express.static("client/build"));
app.use(cookieParser());

dotenv.config();
const mongoURI = process.env.MONGO_URI;

const port: number = 4000;
if(mongoURI) {
    mongoose
        .connect(mongoURI)
        .then(() => console.log("Connected to DB"))
        .catch(() => console.log("Failed connect to DB"))
} else {
    console.log("Couldn't find MONGO URI");
}

import userRoutes from "./API/users/usersRoutes";
app.use("/users", userRoutes);

import legosRoutes from "./API/legos/legosRoutes";
app.use("/legos", legosRoutes)

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}/`);
});