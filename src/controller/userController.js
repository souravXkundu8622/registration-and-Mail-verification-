import userSchema from "../model/userSchema.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import dotenv from "dotenv/config";
// import { verification } from "../middlewere/tokenVerify.js";
import { verifyMail } from "../mailVerify/mailverify.js";



// export const Registration = async(req,res) => {
//     try {
//         const {userName,email,password} = req.body;
//         const userExsits = await userSchema.findOne({email})
//         if(userExsits){
//             return res.status(401).json({
//                 success:false,
//                 message:"you are already registered ",
    
//             })
//         }
//         const hashpassword = await bcrypt.hash(password, 10)
//         const user = await userSchema.create({userName,email,password:hashpassword});

//         const token = jwt.sign({userId:user._id},process.env.secretKey, {
//             expiresIn: "5m"

//         } );
              
//            user.token=token
//            await user.save()
//            return res.status(201).json({
//             success:true,
//             message: " user register sucessfully ",
//             data: user,
//         });

    
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json({
//             success:false,
//             message: " user not registered",
//         });
        
//     }
// }


export const Registration = async (req,res)=>{
    try {
        const {userName, email, password} = req.body;
        const exits = await userSchema.findOne({email})
        if(exits){
            return res.status(401).json({
                success:false,
                Message: " you are already register",
                data:exits
            })
        }

        const hashpassword = await bcrypt.hash(password, 10)
        const user = await userSchema.create({userName,email,password:hashpassword})

       
        const token = jwt.sign({userId:user._id }, process.env.secretKey, {
            expiresIn : "5m"

            

        } )
            verifyMail (token,email)
            user.token = token
            await user.save()
            return res.status(201).json({
                success:true,
                Message: " user registered successfully",
                data:user
            });

       } catch (error) {
        console.log(error)
        
        return res.status(500).json({
            success: false,
            Message: " registration failed "
        })
                  
      }
        
  
}


