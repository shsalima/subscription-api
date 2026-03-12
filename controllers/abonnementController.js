import Abonnement from '../models/Abonnement.js'





export const creatAbonnement = async (req,res)=>{
    try{
        const abonnement=await Abonnement.create(req.body)
        res.status(201).json({abonnement})

    }catch(err){
        res.status(500).json({message:err.message})

    }
}


export const getAbonnements = async (req,res)=>{
    
    try{
        const abonnements= await Abonnement.find({})
        res.status(200).json(abonnements)

    }catch(err){
       res.status(500).json({message:err.message})


    }
}


export const  getAbonnementId = async(req,res)=>{
    try{
        const abonnement= await Abonnement.findById(req.params.id)
        res.status(200).json(abonnement)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}