"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const current_user_1 = require("./routes/current-user");
const user_1 = require("./routes/user");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(current_user_1.currentUserRouter);
app.use(user_1.userRouter);
if (!process.env.DB_URL) {
    throw new Error('DB_URL must be defined');
}
mongoose_1.default
    .connect(process.env.DB_URL)
    .then(() => {
    console.log('MongoDB connected!');
    app.listen(5000, () => {
        console.log('Listening on port 5000');
    });
})
    .catch((error) => {
    console.error('MongoDB connection error:', error);
});
