"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
const getAllProducts_1 = __importDefault(require("../Controllers/Products/getAllProducts"));
const postUser_1 = __importDefault(require("../Controllers/Users/postUser"));
router.get("/getAllProducts", getAllProducts_1.default);
router.post("/postUser", postUser_1.default);
exports.default = router;
