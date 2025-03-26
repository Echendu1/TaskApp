"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const post_1 = require("./src/post");
const user_1 = require("./src/user");
const page_1 = require("./src/page");
const container_1 = require("./config/container");
const app = (0, express_1.default)();
const port = 2001;
app.get("/", (req, res) => {
    res.send("Express application");
});
app.post("/create-post", (req, res) => {
    let post = new post_1.Post("New Post", "Post Content", new user_1.User("John"));
    res.send("Post Created");
});
const pageClass = container_1.container.get(page_1.Page);
app.post("/create-page", (req, res) => {
    let page = pageClass.createPage("http://mypage.com");
    res.json(page);
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
