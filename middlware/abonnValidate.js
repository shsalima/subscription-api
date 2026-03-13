import { body, validationResult } from "express-validator"


export const abonnementValidation = [
    
    body("name")
    .notEmpty()
    .withMessage("name est obligatoire"),

    body("price")
    .isNumeric()
    .withMessage("price doit être un nombre")
    .isFloat({ gt: 0 })  
    .withMessage("price doit être un nombre supérieur à 0"),

    body("billingCycle")
    .isIn(["monthly","yearly"])
    .withMessage("billingCycle doit être monthly ou yearly"),

]


export const validate = (req,res,next)=>{

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    next()
}