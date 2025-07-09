/* eslint-disable no-console */
import { Server } from "http"
import mongoose from "mongoose";
import app from "./app";
import { envVars } from "./app/config/env";

let server: Server;

const startServer = async () => {
    try {
        await mongoose.connect(envVars.DB_URL)

        console.log("database connected successfull")
        server = app.listen(envVars.PORT, ()=>{
            console.log("Server Listing Port 5000")
        })
    } catch (error) {
        console.log(error)
    }
}

startServer();

process.on("unhandledRejection", (err)=>{
    console.log("Unhandled Rejection detected... Server shutting down...", err);

    if(server){
        server.close(()=>{
            process.exit(1);
        })
    };
    process.exit(1);
})

process.on("uncaughtException", (err)=>{
    console.log("Uncaught Exception detected... Server shutting down...", err)
    if(server){
        server.close(()=>{
            process.exit(1)
        })
    }
    process.exit(1)
})

process.on("SIGTERM", ()=>{
    console.log("SIGTERM detected... Server shutting down...")

    if(server){
        server.close(()=>{
            process.exit(1)
        })
    }
    process.exit(1)
})

process.on("SIGINT", ()=>{
    console.log("SIGTERM detected... Server shutting down...")

    if(server){
        server.close(()=>{
            process.exit(1)
        })
    }
    process.exit(1)
})