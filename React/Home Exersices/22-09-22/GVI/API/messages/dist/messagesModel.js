"use strict";
exports.__esModule = true;
exports.MessageModel = exports.MessageSchema = exports.MessageType = void 0;
var mongoose_1 = require("mongoose");
var userModel_1 = require("../users/userModel");
var MessageType;
(function (MessageType) {
    MessageType["MESSAGE"] = "message";
    MessageType["REQUEST"] = "request";
    MessageType["RESPONSE"] = "response";
    MessageType["DOCUMENT"] = "document";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
exports.MessageSchema = new mongoose_1["default"].Schema({
    time: {
        type: String,
        required: true
    },
    from: userModel_1.UserSchema,
    to: userModel_1.UserSchema,
    text: String,
    type: {
        type: String,
        "enum": MessageType,
        "default": MessageType.MESSAGE,
        required: true
    },
    read: Boolean
});
exports.MessageModel = mongoose_1["default"].model('messages', exports.MessageSchema);
