"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getRecentMessagesByUserId = exports.getDocuments = exports.sendDocument = exports.sendMessage = void 0;
var userModel_1 = require("../users/userModel");
var messagesModel_1 = require("./messagesModel");
function sendMessage(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, senderId, receiverId, text, type, time, _b, senderUser, receiverUser, _c, _d, _e, messageDB, error_1;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _f.trys.push([0, 6, , 7]);
                    _a = req.body, senderId = _a.senderId, receiverId = _a.receiverId, text = _a.text, type = _a.type;
                    if (!senderId || !receiverId || !text || !type)
                        throw new Error("Sender/Reciver/Message/Type wasn't recieved from req.body");
                    time = getCurrentTime(new Date().getHours(), new Date().getMinutes());
                    _d = (_c = Promise).all;
                    return [4 /*yield*/, userModel_1.UserModel.findById(senderId)];
                case 1:
                    _e = [
                        _f.sent()
                    ];
                    return [4 /*yield*/, userModel_1.UserModel.findById(receiverId)];
                case 2: return [4 /*yield*/, _d.apply(_c, [_e.concat([
                            _f.sent()
                        ])])];
                case 3:
                    _b = _f.sent(), senderUser = _b[0], receiverUser = _b[1];
                    if (!senderUser || !receiverUser)
                        throw new Error("Sender and Receiver must exist on DB");
                    return [4 /*yield*/, new messagesModel_1.MessageModel({
                            from: senderUser,
                            to: receiverUser,
                            text: text,
                            type: type,
                            read: false,
                            time: time
                        })];
                case 4:
                    messageDB = _f.sent();
                    return [4 /*yield*/, messageDB.save()];
                case 5:
                    _f.sent();
                    res.send({ messageSent: true, messageDB: messageDB });
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _f.sent();
                    res.send({ error: error_1.message });
                    return [3 /*break*/, 7];
                case 7: return [2 /*return*/];
            }
        });
    });
}
exports.sendMessage = sendMessage;
function sendDocument(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, from, to, type;
        return __generator(this, function (_b) {
            try {
                _a = req.body, from = _a.from, to = _a.to, type = _a.type;
                if (!from || !to || !type)
                    throw new Error("Sender/Reciver/Type wasn't recieved from req.body");
                // Ask about documents
            }
            catch (error) {
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.sendDocument = sendDocument;
function getDocuments(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                // Explore about getting documents
            }
            catch (error) {
                res.send({ error: error.message });
            }
            return [2 /*return*/];
        });
    });
}
exports.getDocuments = getDocuments;
function getRecentMessagesByUserId(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, senderId, reciverId, _b, senderUser, receiverUser, _c, _d, _e, messages, messagesDB, error_2;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _f.trys.push([0, 5, , 6]);
                    _a = req.body, senderId = _a.senderId, reciverId = _a.reciverId;
                    if (!senderId || !reciverId)
                        throw new Error("Sender/Reciever wasn't recieved from req.body");
                    _d = (_c = Promise).all;
                    return [4 /*yield*/, userModel_1.UserModel.findById(senderId)];
                case 1:
                    _e = [
                        _f.sent()
                    ];
                    return [4 /*yield*/, userModel_1.UserModel.findById(reciverId)];
                case 2: return [4 /*yield*/, _d.apply(_c, [_e.concat([
                            _f.sent()
                        ])])];
                case 3:
                    _b = _f.sent(), senderUser = _b[0], receiverUser = _b[1];
                    if (!senderUser || !receiverUser)
                        throw new Error("Coulnd't find users with the specific id");
                    return [4 /*yield*/, messagesModel_1.MessageModel.find({
                            $or: [
                                { "from._id": senderId, "to._id": reciverId },
                                { "from._id": reciverId, "to._id": senderId }
                            ]
                        })
                            .limit(20)
                            .sort({ _id: -1 })];
                case 4:
                    messages = _f.sent();
                    messagesDB = messages.reverse();
                    res.send({ messagesDB: messagesDB });
                    return [3 /*break*/, 6];
                case 5:
                    error_2 = _f.sent();
                    res.send({ error: error_2.message });
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.getRecentMessagesByUserId = getRecentMessagesByUserId;
function getCurrentTime(hours, minutes) {
    try {
        minutes < 10 ? minutes = "0" + minutes : minutes;
        return hours + ":" + minutes;
    }
    catch (error) {
        console.error(error);
    }
}
