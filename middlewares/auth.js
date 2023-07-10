"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentUser = void 0;
const currentUser = (req, res, next) => {
    console.log(req.headers.authorization);
    console.log(req.headers['token']);
    if (!req.headers.token) {
        return next();
    }
    try {
        const payload = { id: '1', email: 'some@email.com' };
        req.currentUser = payload;
    }
    catch (err) { }
    next();
};
exports.currentUser = currentUser;
