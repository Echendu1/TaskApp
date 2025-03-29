import "reflect-metadata"

import express, {Request, Response, Express} from "express"
import { addRoutes } from "./src/config/routes.config";
import mongoose from "mongoose";
import * as dotenv from "dotenv";


dotenv.config();

const app: Express = express ()

const port = process.env.PORT



app.use(express.json())

addRoutes(app);

async function boostrap() {

    if (!process.env.DATABASE_URL) {
        throw new Error( "Cannot read environment variables");
        process.exit(1);
    }
    try {
        await mongoose.connect
        (process.env.DATABASE_URL, {
            dbName: process.env.DATA_NAME
        }
    );
    console.log("connected to MongoDB")

    app.listen(port, () => {
        console.log(`Server is running at http://localhost:${port}`)
     });
    

    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}

boostrap();



