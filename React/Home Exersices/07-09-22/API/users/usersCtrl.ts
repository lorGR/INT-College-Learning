import express from "express";

export async function addUser(req: express.Request, res: express.Response){
    try {
        console.log("Hey from AddUser Controller");
        const { username, password , email } = req.body;
        res.send({ username: username, password: password, email: email});
    } catch (error) {
        console.error(error);
        res.send({error: error.message})
    }
}