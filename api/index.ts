import express from "express";
import morgan from "morgan";
import cors from "cors";
import mercadopago from "mercadopago";
import router from "./src/Routes/index";
const { conn } = require("./src/db");
require("dotenv").config();
const {ACCESS_TOKEN} = process.env;

class Server {
  public app: express.Application = express();
  private port: Number = 3001;
  constructor() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use("/", router);
    this.listen();
    this.connectToDatabase();
    this.configureMercadoPago();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log("Server Listening on port", this.port);
    });
  }

  private configureMercadoPago() {
    mercadopago.configure({
      access_token: `${ACCESS_TOKEN}` 
    })
  }
  private async connectToDatabase() {
    try {
      await conn.authenticate();
      console.log("BD CONECTADA");
      await conn.sync({ force: false });
      console.log("BD Sincronizada");
    } catch (error) {
      console.error("Error conexion BD", error);
    }
  }
}
new Server();
