import express from "express";
import { spawn } from "child_process";

const app = express();

app.get("/", (req: express.Request, res: express.Response) => {
    try {
        let dataToSend;
        const python = spawn('python3', ['script1.py']);

        // collect data from script
        python.stdout.on('data',(data) => {
            dataToSend = data.toString();
            console.log(dataToSend);
        });

        // in close event we are sure that stream from child process is closed

        python.on('close',(code) => {
            console.log(`child process close all stdio with code: ${code}`);

            // send data to browser
            res.send(dataToSend);
        });

    } catch (error) {
        res.status(500).send({ error: error.message });
    }
})

app.listen(4000, () => {
    console.info("Server is running http://localhost:4000");
});