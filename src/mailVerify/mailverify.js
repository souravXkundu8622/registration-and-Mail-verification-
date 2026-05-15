// import nodemailer from "nodemailer";
// import dotenv from "dotenv/config"

// export  const verifymail = async(Token, email)=>{
//     const transporter = nodemailer.createTransport({
//         service:"gmail",
//         auth : {
//             user:process.env.email,
//             pass: process.env.password,
            
//         }
//     }) 
    
//     const mailConfigaration = {
//         from:process.env.email,
//         to: email,
//         message:" verification mail  ",
//         subject: `verify/${token}`,
//     }

//        transporter.sendMail(mailConfigaration, function(error,info) {
//         if(error){
//             console.error("error sending Email",error)
//             throw new error(error)
//         }
//          console.log(" email send succesfully ")
//          console.log(info);
        

       
//          })

// } 

// import nodemailer from "nodemailer";
// import dotenv from "dotenv/config";

// export const verifyMail = async (token, email) => {
//     const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.email,
//       pass: process.env.password,
//     },
//   });

//   const mailConfigurations = {
//     from: process.env.email,
//     to: email,
//     subject: "Email Verification For Todo",
//     text: `VerifyMail/${token}`
           
//   };

//   transporter.sendMail(mailConfigurations, function (error, info) {
//     if (error) {
//       console.error("Error sending email:", error);
//       throw new Error(error);
//     }
//     console.log("Email Sent Successfully");
//     console.log(info);
//   });
// };

import nodemailer from "nodemailer";
import dotenv from "dotenv/config"

// export const verifyMail = async(Token,email)=> {
//     const transporter = nodemailer.createTransport({
//         service: "gmail",
//         auth:{
//             user:process.env.email,
//             pass: process.env.password,
//         }
//     })
//      const mailConfiguration = {
//         from:process.env.email,
//         to:email,
//         subject:"email verification for todo",
//         text:`verification mail/ ${Token}`
//      }
//       transporter.sendMail(mailConfiguration, function(error,info) {
//         if(error){
//             console.error("error sending Mail", error)
//             throw new Error(error);
       
//         }  console.log("email send succcessfully")
//       console.log(info)

//       })   
     

//     }
    

export const verifyMail = async(Token, email)=>{
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.email,
            pass:process.env.password,
        }
    }) 
     const mailConfigaration = {
        from:process.env.email,
        to: email,
        subject:"verifiction email send",
        text:`verification mail${Token}`

    } 
    transporter.sendMail(mailConfigaration, function (error, info) {
        if(error){
        console.error("error sending mail", error)
        throw new Error(error);
        }    

           console.log("email successfully send")
     console.log(info)
    
    }) 
  
}