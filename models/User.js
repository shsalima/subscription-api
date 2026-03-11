import mongoose from 'mongoose'


const userScheme=new mongoose.schema(
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

const User=mongoose.model("User",userScheme)

export default User;