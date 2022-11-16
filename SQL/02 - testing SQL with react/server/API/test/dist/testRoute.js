"use strict";
exports.__esModule = true;
var express_1 = require("express");
var testCtrl_1 = require("./testCtrl");
var router = express_1["default"].Router();
router
    .get("/get-person-1", testCtrl_1.getPerson1)
    .post("/set-fav-color-person", testCtrl_1.addFavColor);
exports["default"] = router;
