const { Sequelize } = require("sequelize");
import dotenv from 'dotenv';
dotenv.config();
const fs = require("fs");
const path = require("path");

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

// modelDefiners.forEach((model: any) => model(sequelize));
// let entries = Object.entries(sequelize.models);
// let capsEntries = entries.map((entry) => [
//   entry[0][0].toUpperCase() + entry[0].slice(1),
//   entry[1],
// ]);
// sequelize.models = Object.fromEntries(capsEntries);

// const { } =
//   sequelize.models;



export default sequelize;
