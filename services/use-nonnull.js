"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userJwt = (user) => {
    return jsonwebtoken_1.default.sign(user, process.env.JWT_KEY);
};
exports.userJwt = userJwt;
