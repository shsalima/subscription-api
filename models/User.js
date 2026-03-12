import mongoose from 'mongoose'


const userscheme=new mongoose.Schema(
  {  name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    passeword:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user",
        required:true,

    }
},
{
    timestamps:true
},
)

const User=mongoose.model("User",userscheme)

export default User;