"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const express_1 = __importDefault(require("express"));
const mysql_1 = __importDefault(require("mysql"));
const app = express_1.default();
const port = 4000;
app.use(express_1.default.json());
exports.connection = mysql_1.default.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "testing"
});
exports.connection.connect((err) => {
    try {
        if (err)
            throw err;
        console.log(`Connected to MySQL`);
    }
    catch (error) {
        console.error(error);
    }
});
const productsRoute_1 = __importDefault(require("./API/products/productsRoute"));
app.use("/products", productsRoute_1.default);
const testRoute_1 = __importDefault(require("./API/test/testRoute"));
app.use("/testing", testRoute_1.default);
app.get("/insert-prod", (req, res) => {
    try {
        const colors = ['Red', 'Blue', 'White', 'Purple', 'Midnight Black'];
        const storages = ["128GB", "256GB", "512GB"];
        const price = ["₪4,479", "₪4,979", "₪5,979"];
        colors.forEach(color => {
            storages.forEach(storage => {
                if (storage === "128GB") {
                    const sql = `INSERT INTO products(type, name, price, storage, color) VALUES
                    ('iPhone', 'iPhone 14 Plus', '₪4,479', '${storage}', '${color}')`;
                    exports.connection.query(sql, (error, result) => {
                        if (error)
                            throw error;
                    });
                }
                else if (storage === "256GB") {
                    const sql = `INSERT INTO products(type, name, price, storage, color) VALUES
                    ('iPhone', 'iPhone 14 Plus', '₪4,979', '${storage}', '${color}')`;
                    exports.connection.query(sql, (error, result) => {
                        if (error)
                            throw error;
                    });
                }
                else if (storage === "512GB") {
                    const sql = `INSERT INTO products(type, name, price, storage, color) VALUES
                    ('iPhone', 'iPhone 14 Plus', '₪5,979', '${storage}', '${color}')`;
                    exports.connection.query(sql, (error, result) => {
                        if (error)
                            throw error;
                    });
                }
            });
        });
        res.send({ ok: "sucssces" });
    }
    catch (error) {
        res.status(500).send({ error: error.message });
    }
});
app.listen(port, () => {
    console.info(`Server is up and running at http://localhost:${port}`);
});
