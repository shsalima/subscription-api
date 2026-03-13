import { body, validationResult } from "express-validator"
import jwt from "jsonwebtoken"
import User from "../models/User.js";

export const verifyToken = (req,res,next)=>{

    try{

        const header = req.headers.authorization

        if(!header){
            return res.status(401).json({message:"ne trouve pas  token"})
        }

        const token = header.split(" ")[1]

        const decoded = jwt.verify(token,process.env.JWTS)

        req.user = decoded // id w role kayb9aw f req.user

        next()

    }catch(err){
        res.status(401).json({message:"Token invalid"})
    }

}


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