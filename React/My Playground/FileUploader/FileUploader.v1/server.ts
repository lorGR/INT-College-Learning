import express from 'express';
import fileUpload from 'express-fileupload';
import path from "path";


const port = 3000;
const app = express();

app.use(express.json());

app.use("/", (req: express.Request, res: express.Response ) => {
    try {
        res.sendFile(path.join(__dirname, "index.html"));
    } catch (error) {
        res.send({error: error.message});
    }
});

app.use("/upload", fileUpload({ createParentPath: true }), (req: express.Request, res: express.Response) => {
    try {
        const { formData } = req.files;
        console.log(formData);
        res.send({formData});
    } catch (error) {
        res.send({error: error.message});
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})