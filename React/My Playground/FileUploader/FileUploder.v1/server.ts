import express from "express";
import cors from "cors";

const app = express();
const port = 4000;

app.use(cors());

app.post("/upload", (req: express.Request, res: express.Response) => {
    setTimeout(() => {
        console.log("file uploaded");
        return res.status(200).json({result: true, msg: 'file uploaded'});
    },3000);
});

app.delete("/upload", (req: express.Request, res: express.Response) => {
    console.log("file deleted");
    return res.status(200).json({result: true, msg: 'file deleted'});
});

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
})