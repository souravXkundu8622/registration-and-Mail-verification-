
import mongoose from "mongoose";
import dotenv from "dotenv";


const url=process.env.DB_STRING

export default async function dbconnected() {
    try {

       await mongoose.connect(url)
       console.log("mongodb connected sucessfully");
       

        
    } catch (error) {

        console.log(`failed to connect ${error}`);
        
        
    }
    
}