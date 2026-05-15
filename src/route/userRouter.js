
import express from "express";
import { Registration } from "../controller/userController.js";
import { verification } from "../middlewere/tokenVerify.js";



const userRoute = express.Router()

userRoute.post("/register", Registration );
userRoute.get("/verify", verification);


export default userRoute