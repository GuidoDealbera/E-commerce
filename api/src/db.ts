const { Sequelize } = require("sequelize");
import dotenv from 'dotenv';
dotenv.config();
const fs = require("fs");
const path = require("path");
import ProductModel from "./Models/Product"
import UserModel from "./Models/User"
import ReviewsModel from "./Models/Reviews"
import CategoryModel from "./Models/Category"
import PurchaseModel from "./Models/Purchase"
import SalesModel from "./Models/Sale"
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
CategoryModel(sequelize)
PurchaseModel(sequelize)
SalesModel(sequelize)


const { Product, User, Reviews, Category, Sale, Purchase} = sequelize.models;
Product.belongsToMany(User, {through: "user_favs", timestamps: false});
User.belongsToMany(Product, {through: "user_favs", timestamps: false});
Purchase.belongsToMany(User, {through: "user_purchase", timestamps: false});
User.belongsToMany(Purchase, {through: "user_purchase", timestamps: false});
Sale.belongsToMany(User, {through: "user_sale", timestamps: false});
User.belongsToMany(Sale, {through: "user_sale", timestamps: false});
Sale.belongsToMany(Product, {through: "sales_product", timestamps: false});
Product.belongsToMany(Sale, {through: "sales_product", timestamps: false});
Product.hasMany(Reviews);
Product.hasOne(Category);
Category.hasMany(Product);
Reviews.hasOne(Product);
module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
