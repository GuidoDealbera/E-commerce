const { Sequelize } = require("sequelize");
import dotenv from 'dotenv';
dotenv.config();
const fs = require("fs");
const path = require("path");
import ProductModel from "./Models/Product"
import UserModel from "./Models/User"
import ReviewsModel from "./Models/Reviews"
const { DB_CONEX } = process.env;

const sequelize = new Sequelize(
  DB_CONEX,

  {
    logging: false,
    native: false,
  }
);

const basename = path.basename(__filename);

const modelDefiners: any = [];

fs.readdirSync(path.join(__dirname, "/Models"))
  .filter(
    (file: any) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file: any) => {
    modelDefiners.push(require(path.join(__dirname, "/Models", file)));
  });
//Funcion para sequelizar todos los modelos
//NO FUNCIONA
// modelDefiners.forEach((model: any) => model(sequelize));

ProductModel(sequelize)
UserModel(sequelize)
ReviewsModel(sequelize)


const { Product, User, Reviews} = sequelize.models;
Product.belongsToMany(User, {through: "user_products", timestamps: false});
User.belongsToMany(Product, {through: "user_products", timestamps: false});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
