import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



export const register = async (req,res)=>{
    try{

        const {name,email,passeword,role}=req.body

        if(role==="admin"){
            const adminExsit=await User.findOne({role:"admin"})
            if(adminExsit){
                return res.status(400).json({message:"admin déjà trouvé"})

            }
        }

    
        const hashedPassword=await bcrypt.hash(passeword,10)
        const user = await User.create({name,email,passeword:hashedPassword,role})
        res.status(201).json(user)
    }catch(err){
        res.status(500).json({message:err.message})    
    }

}





  