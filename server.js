import express from "express"
import dotenv from "dotenv"
import "dotenv/config"
import mongoose from "mongoose"
import dbconnected from "./src/config/dbconnected.js"
import userRoute from "./src/route/userRouter.js"



const app=express();
const port=process.env.PORT

dbconnected();


app.use(express.json());

app.use("/user", userRoute);



app.listen(port, ()=> {
    console.log(`mongodb connected port ${port}`);
    
})
