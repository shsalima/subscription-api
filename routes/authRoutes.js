import express from "express"
import { register,login,getAllUsers } from "../controllers/autoController.js"
import { registerValidation,loginValidation,validate } from "../middlware/authMiddlware.js"
import {verifyToken,checkAdminExists ,isAdmin } from "../middlware/authMiddlware.js"



const router=express.Router()

router.post("/register",registerValidation,validate,checkAdminExists ,register)
router.post("/login",loginValidation,validate,login)
router.get("/users",verifyToken,isAdmin,getAllUsers)


export default router;
