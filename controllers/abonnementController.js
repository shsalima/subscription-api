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



export const updateAbonnement = async (req, res) => {
    try {
        // njibo l'abonnement b id
        const abonnement = await Abonnement.findById(req.params.id)

        if (!abonnement) {
            return res.status(404).json({ message: "Abonnement pas trouvé" })
        }

        // check userId dyal abonnement m3a user li dar login
        if (abonnement.userId.toString() !== req.user.id) {
            return res.status(403).json({ message: "Non autorisé à modifier cet abonnement" })
        }

        // update les champs
        abonnement.name = req.body.name || abonnement.name
        abonnement.price = req.body.price || abonnement.price
        abonnement.billingCycle = req.body.billingCycle || abonnement.billingCycle

        // save
        await abonnement.save()

        res.status(200).json({
            message: "Abonnement modifié avec succès",
            abonnement
        })

    } catch (err) {
        console.error(err)
        res.status(500).json({ message: "Erreur serveur", error: err.message })
    }
}