import Abonnement from '../models/Abonnement.js'


export const creatAbonnement = async (req, res) => {
    try {
        const newAbonnement = new Abonnement({
            name: req.body.name,
            price: req.body.price,
            billingCycle: req.body.billingCycle,
            userId: req.user.id  
        })

        await newAbonnement.save()

        res.status(201).json({
            message: "Abonnement créé avec succès",
            abonnement: newAbonnement
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Erreur serveur", error: err.message })
    }
}



export const getAbonnements = async (req, res) => {
    try {
        // njibo gheer abonnements dyal user li dar login
        const abonnements = await Abonnement.find({ userId: req.user.id })

        res.status(200).json({
            message: "Liste des abonnements de l'utilisateur",
            abonnements
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Erreur serveur", error: err.message })
    }
}


export const  getAbonnementId = async(req,res)=>{
    try{
        const abonnement= await Abonnement.findById(req.params.id)
        if(!abonnement){
            return res.status(404).json({message:"cette abonnement ne trouve pas "})
        }
        res.status(200).json(abonnement)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}


export const deleteAbonnement = async (req,res)=>{
    try{
        await Abonnement.findByIdAndDelete(req.params.id)
        res.status(200).json({message:"Abonnement deleted"})
    }catch(err){
        res.status(500).json({message:err.message})
    }
}



