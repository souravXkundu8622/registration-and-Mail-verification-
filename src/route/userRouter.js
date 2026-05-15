
import express from "express";
import { Registration } from "../controller/userController.js";
import { verification } from "../midlewere/tokenVerify.js";
// import { veryfication } from "../midlewere/tokenVeryfi.js";



const userRoute = express.Router()

userRoute.post("/register", Registration );
userRoute.get("/verify", verification);


export default userRoute