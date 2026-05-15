import mongoose from "mongoose";


const userSchema = new mongoose.Schema(
    {
        userName:{
            required:true,
            type:String,
        },

        email:{
            required:true,
            type:String,
        },
        password:{
            required:true,
            type:String,
        },
        token:{
            type: String,
            default: null,
        },
        isVerified:{
            type: Boolean,
            default:false,
        },

        isLoggedIn:{
            type:Boolean,
            default:false,
            
        },

    
    },{timestamps:true},

);

export default mongoose.model("user",userSchema);




