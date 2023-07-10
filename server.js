"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const current_user_1 = require("./routes/current-user");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// process.env.DB_URL = 'Hello, world!';
if (!process.env.DB_URL) {
    throw new Error('DB_URL must be defined');
}
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(current_user_1.currentUserRouter);
app.listen(5000, () => {
    console.log('Listening on port 5000');
});
