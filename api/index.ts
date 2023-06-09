import express from "express"
import morgan from "morgan"
import cors from "cors"
//import conn from "./src/db";
const {conn}= require("./src/db")
import router from "./src/Routes/index"

class Server{
    public app: express.Application = express();
    private port: Number = 3001
    constructor() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))
        this.app.use(morgan("dev"))
        this.app.use(
            cors()
          );
        this.app.use("/",router);
        this.listen();
        this.connectToDatabase()
    }

    public listen(){
        this.app.listen(this.port,()=>{
            console.log("Server Listening on port",this.port)
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
new Server()