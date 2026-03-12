import { body, validationResult } from "express-validator"

// validation dyal register
export const registerValidation = [

    body("name")
    .notEmpty()
    .withMessage("name obligatoire"),

    body("email")
    .isEmail()
    .withMessage("email invalide"),

    body("passeword")
    .isLength({min:6})
    .withMessage("password doit avoir au moins 6 caractères"),

    body("role")
    .optional()
    .isIn(["user","admin"])
    .withMessage("role doit être user ou admin")

]

// validation dyal login
export const loginValidation = [

    body("email")
    .isEmail()
    .withMessage("email invalide"),

    body("passeword")
    .notEmpty()
    .withMessage("password obligatoire")

]

// middleware kaychecki errors
export const validate = (req,res,next)=>{

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    next()
}