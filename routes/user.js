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
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_1 = __importDefault(require("../models/user"));
const use_nonnull_1 = require("../services/use-nonnull");
const router = express_1.default.Router();
exports.userRouter = router;
router.get('/api/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docs = yield user_1.default.find({}).exec();
        res.json(docs);
    }
    catch (err) {
        res.status(500).end();
    }
}));
router.post('/api/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = req.body;
    const token = (0, use_nonnull_1.userJwt)({ name, email });
    const _user = new user_1.default({ name, email, token });
    const newUser = yield _user.save();
    res.json(newUser);
}));
