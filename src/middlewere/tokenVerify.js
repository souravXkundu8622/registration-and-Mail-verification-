import userSchema from "../model/userSchema.js";
import dotenv from "dotenv/config";
import Jwt from "jsonwebtoken";




// export const verification = async(req,res)=>{
//     try {
//         // console.log("try")
        
//         const authHeader = req.headers.authorization;
//         if(!authHeader || !authHeader.startsWith("Bearer")){
//             return res.status(401).json({
//                 success:false,
//                 Message:"Authorization toke is missmatch or Invalid"
//             });
           
//         }  else{

//             const token = authHeader.split(" ")[1];
//             console.log(token)
//             Jwt.verify(token, process.env.secretKey, async(err,decoded) => {
//                 console.log(err)
//                 if(err){
//                     if(err.name === "TokenExpiredError"){
//                         return res.status(400).json({
//                             success:false,
//                             Message:"token is Expired"
//                         })
//                     }

//                     return res.status(400).json({
//                         success:false,
//                         message:"Token is Expire Possibly Invalid "
//                     })
//                 }   
//                 else{
//                     console.log(decoded);
//                     const {userId} = decoded
//                     console.log(userId)
//                     const user = await userSchema.findById(userId)
//                     if(!user){
//                         return res.status(404).json({
//                             success:false,
//                             message: "user not found",
//                         })

//                     } else{
//                         user.token = null,
//                         user.isVerified = true,
//                         await user.save()
//                         return res.status(201).json({
//                             success:true,
//                             message: "verification successfull"

//                         })
//                     }
                       
//                 }

//            })         
            
        
//         }
    
        
           

        
//     } catch (error) {

//         console.log(error)
//         return res.status(500).json({
//             success:false,
//             message:"could not access"
//         })
        
//     }
// }

// export const verification = async (req,res)=>{
//     try {
//         const authHeader = req.headers.authorization;
//         if(!authHeader || !authHeader.startsWith("Bearer")) {
//         return res.status(401).json({
//             success:false,
//             Message:"Authorized token is missing or Invalid"

//         })
//   }
//         else{
//             const token = authHeader.split(" ")[1]
//             Jwt.verify(token, process.env.secretKey, async(err,decoded)=>{
//              if(err){
//                 console.log(err);
                
//                 if(err.name === "TokenExpiredError")
//                     return res.status(400).json({
//                 success:false,
//                 Message:"Token Invalid or posibilly Expired"
                
//                })
//                 return res.status(401).json({
//                 success:false,
//                 Message:"Token verification Failed. Posibilly Expired"
             
//                })
//             }  else{
//               const {userId} = decoded
//              console.log(user)
//                 const user = await userSchema.findById(userId)
//                 if(!user){
//                     return res.status(404).json({
//                         success:false,
//                         Message:"User Not Found",


//                     })
//                 } else{
//                     user.token = null,
//                     user.isVerified= true,
//                     await user.save();
//                     return res.status(201).json({
//                         success:true,
//                         Message: "Email Verified successfully"

//                     })
//                 }

                
//             }

//             }) 
//         } 
        

//     } catch (error) {
//         console.log(error)
//         return res.status(500).json({
//             success:false,
//             message:"could not found"
//         })
        
//     }
// }

export const verification = async(req,res)=>{
    try {
        const authHeader = req.headers.authorization
        if(!authHeader || !authHeader.startsWith("Bearer")){
            return res.status(401).json({
                success: false,
                Message:" Authorization Token is missing or Invalid"

            })     

    } else{
    
        const token = authHeader.split(" ")[1]

        Jwt.verify(token, process.env.secretKey, async(err, decoded)=>{
            if(err) {
    
                if(err.name === "TokenExpiredError")
                    return res.status(400).json({
                   success:false,
                   Message: " Token is Expired"
                })
                  return res.status(400).json({
                success:false,
                Message:" Token verification failed, possibily expired "
            }) 
               
         }  else{
            console.log(decoded);
            
            const {userId} = decoded;

            console.log(userId)
            
            const user = await userSchema.findById(userId);
           if(!user){
            return res.status(404).json({
               success: false,
               Message: "user not found" 
            })
           } else{ 
            user.token = null,
            user.isVerified = true,
            await user.save()
            return res.status(201).json({
                success: true,
                Message: "Token verification successfull",
                data: user,
            })

           }

         }
           
                
        })   

    }
  
}
    
     catch (error) {
        console.log(error)
        
        return res.status(500).json({
            success:false,
            Message: " could not found"

        })
        
    }

}