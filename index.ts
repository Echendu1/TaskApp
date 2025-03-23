

import express, {Request, Response, Express} from "express"
import { Post } from "./src/post"
import { User } from "./src/user"
import { Page } from "./src/page" 


const app: Express = express ()
const port = 2001

app.get("/", (req: Request, res: Response) => {
    res.send("Express application")
}) ;
app.post("/create-post", (req: Request, res: Response) => {
    let post = new Post("New Post", "Post Content", new User ("John"))
    res.send("Post Created");
})
app.post("/create-page", (req: Request, res: Response) => {
    let page = new Page("http://page.com", new User ("John"))
    res.send("Page Created");
})


 app.listen(port, ()=> {
    console.log(`Server is running at http://localhost:${port}`)
 });
