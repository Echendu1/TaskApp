"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const inversify_1 = require("inversify");
const user_1 = require("../src/user");
const page_1 = require("../src/page");
exports.container = new inversify_1.Container();
exports.container.bind(user_1.User).toSelf();
exports.container.bind(page_1.Page).toSelf();
