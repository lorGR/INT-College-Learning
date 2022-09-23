"use strict";
exports.__esModule = true;
var express_1 = require("express");
var messagesCtrl_1 = require("./messagesCtrl");
var router = express_1["default"].Router();
router
    .post("/sendMessage", messagesCtrl_1.sendMessage)
    .post("/getRecentMessagesByUserId", messagesCtrl_1.getRecentMessagesByUserId);
exports["default"] = router;
