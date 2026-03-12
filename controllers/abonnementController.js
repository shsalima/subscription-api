import Abonnement from '../models/Abonnement.js'





export const creatAbonnement = async (req,res)=>{
    try{
        const abonnement=await Abonnement.create(req.body)
        res.status(201).json({abonnement})

    }catch(err){
        res.status(500).json({message:err.message})

    }
}