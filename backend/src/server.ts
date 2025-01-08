import 'dotenv/config';

import env from "./util/validateEnv";
import app from "./app";
import mongoose from "mongoose";

const port = env.PORT;

mongoose.connect(env.MONGO_CONNECT_STRING).then(
    ()=>{
        console.log("DB Connected");
        app.listen(port , ()=>{
            console.log("Server running on "+ port);
        })
    }
)
