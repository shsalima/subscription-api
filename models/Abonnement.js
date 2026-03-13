
import mongoose from "mongoose";
import User from "./User.js";

const Abonnementschema=new mongoose.Schema({
    
         name:{
            type:String,
            required:true
         },
         price:{
            type:Number,
            required:true
         },
         billingCycle :{
            type:String,
            enum:["monthly","yearly"],
            required:true
         },
         userId :{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User"
            
         }
    
    
    
},
{
    timestamps:true
},
)

const Abonnement=mongoose.model("Abonnement",Abonnementschema)
export default Abonnement