"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Sequelize } = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const fs = require("fs");
const path = require("path");
const Product_1 = __importDefault(require("./Models/Product"));
const User_1 = __importDefault(require("./Models/User"));
const { DB_CONEX } = process.env;
const sequelize = new Sequelize(DB_CONEX, {
    logging: false,
    native: false,
});
const basename = path.basename(__filename);
const modelDefiners = [];
fs.readdirSync(path.join(__dirname, "/Models"))
    .filter((file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js")
    .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/Models", file)));
});
//Funcion para sequelizar todos los modelos
//NO FUNCIONA
// modelDefiners.forEach((model: any) => model(sequelize));
(0, Product_1.default)(sequelize);
(0, User_1.default)(sequelize);
const { Product, User } = sequelize.models;
Product.belongsToMany(User, { through: "user_products", timestamps: false });
User.belongsToMany(Product, { through: "user_products", timestamps: false });
module.exports = Object.assign(Object.assign({}, sequelize.models), { conn: sequelize });
