import express from "express";
import morgan from "morgan";
import cors from "cors";
import mercadopago from "mercadopago";
import router from "./src/Routes/index";
import { DataBase } from "./src/db";
import dotenv from 'dotenv';
import passport from "./src/Middlewares/passportMiddleware";
import session from "express-session";
// import StoreSession from 'connect-session-sequelize';
dotenv.config()
const { conn } = DataBase;
const {ACCESS_TOKEN} = process.env;
// const ConnectSequelize = StoreSession(session.Store)
// const Store = new ConnectSequelize({
  // db: conn
// })
class Server {
  public app: express.Application = express();
  private port: Number = 3001;
  constructor() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use(session({
      secret: "mySecret",
      resave: false,
      saveUninitialized: false,
      // cookie: {
        // maxAge: 24 * 60 * 60 * 1000,
      // },
      // store: Store
    }))
    this.app.use(passport.initialize());
    this.app.use(passport.session());
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
      await conn.sync({ force: true });
      console.log("BD Sincronizada");
    } catch (error) {
      console.error("Error conexion BD", error);
    }
  }
}
new Server();
