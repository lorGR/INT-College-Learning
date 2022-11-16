import express from "express";

import { connection } from "../../server";

interface PersonModel {
    name: string,
    personId: number,
    colorPallete: Array<string>
}

export function getPerson1 (req: express.Request, res: express.Response) {
    try {
        const colorPallete = [];
        let personName = "";
        let personId = 0;
        let info: PersonModel = {name: personName, colorPallete, personId};
        const getColorPalletes = `SELECT color_1, color_2, color_3 FROM pallete WHERE pallete_id IN (SELECT pallete_id FROM person WHERE pallete_id = '1')`;
        connection.query(getColorPalletes, (error, result) => {
            if(error) throw error;
            const colors = result[0];
            for( let k in colors) {
                colorPallete.push(colors[k]);
            }
        });
        const getPerson = `SELECT name, person_id FROM person WHERE person_id = '1'`;
        connection.query(getPerson, (error, result) => {
            if(error) throw error;
            const { name, person_id } = result[0];
            personName = name;
            personId = person_id;
        });
        setTimeout(() => {
            info = {name: personName, colorPallete, personId};
            res.send({info});
        },100);
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}

export function addFavColor (req: express.Request, res: express.Response) {
    try {
        const { chosenColor, personId } = req.body;
        if(!chosenColor) throw new Error("Couldn't receive chosenColor from req.body");
        console.log(chosenColor, personId);
        const sql = `UPDATE person SET fav_color = '${chosenColor}' WHERE person_id = '${personId}'`;
        connection.query(sql, (error, result) => {
            if(error) throw error;
            console.log(result);
        });
    } catch (error) {
        res.status(500).send({error: error.message});
    }
}