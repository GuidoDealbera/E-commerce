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
Object.defineProperty(exports, "__esModule", { value: true });
const { conn } = require("../../db");
const { User } = conn.models;
const bcrypt = require("bcrypt");
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let passwordHash;
        const { username, email, password, seller } = req.body;
        const check1 = yield User.findOne({
            where: {
                email: email,
            },
        });
        const check2 = yield User.findOne({
            where: {
                username: username,
            },
        });
        if (password) {
            passwordHash = bcrypt.hashSync(password, 10);
        }
        if (!check1 && !check2) {
            let newUser;
            if (seller) {
                newUser = yield User.create({
                    username: username,
                    email: email,
                    password: passwordHash,
                    seller: true
                });
            }
            else {
                newUser = yield User.create({
                    username: username,
                    email: email,
                    password: passwordHash,
                    seller: false
                });
            }
            return res.status(201).json(newUser);
        }
        if (check1) {
            return res.status(400).send("Email ya existente");
        }
        else if (check2) {
            return res.status(401).send("Username existente");
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.default = postUser;
