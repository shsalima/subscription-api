import { body, validationResult } from "express-validator"

// قواعد التحقق
export const abonnementValidation = [
    
    body("name")
    .notEmpty()
    .withMessage("name est obligatoire"),

    body("price")
    .isNumeric()
    .withMessage("price doit être un nombre"),

    body("billingCycle")
    .isIn(["monthly","yearly"])
    .withMessage("billingCycle doit être monthly ou yearly"),

]

// middleware كيتحقق من errors
export const validate = (req,res,next)=>{

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    next()
}