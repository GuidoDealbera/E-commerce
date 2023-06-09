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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//import conn from "./src/db";
const { conn } = require("./src/db");
const index_1 = __importDefault(require("./src/Routes/index"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 3001;
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use((0, cors_1.default)());
        this.app.use("/", index_1.default);
        this.listen();
        this.connectToDatabase();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Server Listening on port", this.port);
        });
    }
    connectToDatabase() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield conn.authenticate();
                console.log("BD CONECTADA");
                yield conn.sync({ force: false });
                console.log("BD Sincronizada");
            }
            catch (error) {
                console.error("Error conexion BD", error);
            }
        });
    }
}
new Server();
