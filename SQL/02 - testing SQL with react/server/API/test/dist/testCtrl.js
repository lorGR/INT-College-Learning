"use strict";
exports.__esModule = true;
exports.addFavColor = exports.getPerson1 = void 0;
var server_1 = require("../../server");
function getPerson1(req, res) {
    try {
        var colorPallete_1 = [];
        var personName_1 = "";
        var personId_1 = 0;
        var info_1 = { name: personName_1, colorPallete: colorPallete_1, personId: personId_1 };
        var getColorPalletes = "SELECT color_1, color_2, color_3 FROM pallete WHERE pallete_id IN (SELECT pallete_id FROM person WHERE pallete_id = '1')";
        server_1.connection.query(getColorPalletes, function (error, result) {
            if (error)
                throw error;
            var colors = result[0];
            for (var k in colors) {
                colorPallete_1.push(colors[k]);
            }
        });
        var getPerson = "SELECT name, person_id FROM person WHERE person_id = '1'";
        server_1.connection.query(getPerson, function (error, result) {
            if (error)
                throw error;
            var _a = result[0], name = _a.name, person_id = _a.person_id;
            personName_1 = name;
            personId_1 = person_id;
        });
        setTimeout(function () {
            info_1 = { name: personName_1, colorPallete: colorPallete_1, personId: personId_1 };
            res.send({ info: info_1 });
        }, 100);
    }
    catch (error) {
        res.status(500).send({ error: error.message });
    }
}
exports.getPerson1 = getPerson1;
function addFavColor(req, res) {
    try {
        var _a = req.body, chosenColor = _a.chosenColor, personId = _a.personId;
        if (!chosenColor)
            throw new Error("Couldn't receive chosenColor from req.body");
        console.log(chosenColor, personId);
        var sql = "UPDATE person SET fav_color = '" + chosenColor + "' WHERE person_id = '" + personId + "'";
        server_1.connection.query(sql, function (error, result) {
            if (error)
                throw error;
            console.log(result);
        });
    }
    catch (error) {
        res.status(500).send({ error: error.message });
    }
}
exports.addFavColor = addFavColor;
