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
const { Product } = conn.models;
const postProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code, name, description, photos, price, category, heading } = req.body;
        const check1 = yield Product.findOne({ where: {
                code: code
            } });
        const check2 = yield Product.findOne({ where: {
                name: name
            } });
        if (!check1 && !check2) {
            const response = yield Product.create({ name, description, code, photos, category, price, heading });
            return res.json(response);
        }
        if (check1) {
            return res.status();
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.default = postProduct;
