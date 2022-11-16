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
var axios_1 = require("axios");
var react_1 = require("react");
require("./App.css");
function App() {
    var _this = this;
    var _a = react_1.useState(null), person = _a[0], setPerson = _a[1];
    var _b = react_1.useState(), personPallete = _b[0], setPersonPallete = _b[1];
    var handleGetPerson1 = function () { return __awaiter(_this, void 0, void 0, function () {
        var data, info, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"].get("/testing/get-person-1")];
                case 1:
                    data = (_a.sent()).data;
                    if (!data)
                        throw new Error("Couldn't receive data from axios /get-person-1");
                    info = data.info;
                    console.log(info);
                    setPerson(info);
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var handleGetPerson2 = function () {
    };
    var handleSubmit = function (event) { return __awaiter(_this, void 0, void 0, function () {
        var chosenColor, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    event.preventDefault();
                    chosenColor = (event.target.elements.color.value);
                    return [4 /*yield*/, axios_1["default"].post("/testing/set-fav-color-person", { chosenColor: chosenColor, personId: personId })];
                case 1:
                    data = (_a.sent()).data;
                    if (!data)
                        throw new Error(" Couldn't receive data from axios /set-fav-color-person");
                    console.log(data);
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var personId = person === null || person === void 0 ? void 0 : person.personId;
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement("button", { onClick: handleGetPerson1 }, "get person 1"),
        react_1["default"].createElement("button", { onClick: handleGetPerson2 }, "get person 2"),
        person !== null &&
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("form", { onSubmit: handleSubmit },
                    react_1["default"].createElement("h1", null, person === null || person === void 0 ? void 0 : person.name),
                    react_1["default"].createElement("p", null,
                        "id:", person === null || person === void 0 ? void 0 :
                        person.personId),
                    react_1["default"].createElement("input", { type: "radio", name: "color", id: person === null || person === void 0 ? void 0 : person.colorPallete[0], value: person === null || person === void 0 ? void 0 : person.colorPallete[0] }),
                    react_1["default"].createElement("label", { htmlFor: person === null || person === void 0 ? void 0 : person.colorPallete[0] }, person === null || person === void 0 ? void 0 : person.colorPallete[0]),
                    react_1["default"].createElement("input", { type: "radio", name: "color", id: person === null || person === void 0 ? void 0 : person.colorPallete[1], value: person === null || person === void 0 ? void 0 : person.colorPallete[1] }),
                    react_1["default"].createElement("label", { htmlFor: person === null || person === void 0 ? void 0 : person.colorPallete[1] }, person === null || person === void 0 ? void 0 : person.colorPallete[1]),
                    react_1["default"].createElement("input", { type: "radio", name: "color", id: person === null || person === void 0 ? void 0 : person.colorPallete[2], value: person === null || person === void 0 ? void 0 : person.colorPallete[2] }),
                    react_1["default"].createElement("label", { htmlFor: person === null || person === void 0 ? void 0 : person.colorPallete[2] }, person === null || person === void 0 ? void 0 : person.colorPallete[2]),
                    react_1["default"].createElement("button", { type: "submit" }, "Add")))));
}
exports["default"] = App;
