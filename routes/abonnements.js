import express from "express";
import {abonnementValidation,validate} from "../middlware/abonnValidate.js"
import {verifyToken} from "../middlware/authMiddlware.js"


import {
  creatAbonnement,
  getAbonnements,
  getAbonnementId,
  updateAbonnement,
  deleteAbonnement
} from "../controllers/abonnementController.js";

const abonnementRoute = express.Router();


abonnementRoute.get("/",verifyToken, getAbonnements);
abonnementRoute.post("/create",verifyToken,abonnementValidation,validate, creatAbonnement);
abonnementRoute.get("/:id", getAbonnementId);
abonnementRoute.put("/:id",verifyToken,abonnementValidation, updateAbonnement);
abonnementRoute.delete("/:id", deleteAbonnement);


export default abonnementRoute;
