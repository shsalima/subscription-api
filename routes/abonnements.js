import express from "express";
import {abonnementValidation,validate} from "../middlware/abonnValidate.js"
// C:\Users\pc\Desktop\subscription-api\middlware\abonnValidate.js

import {
  creatAbonnement,
  getAbonnements,
  getAbonnementId,
  updateAbonnement,
  deleteAbonnement
} from "../controllers/abonnementController.js";

const abonnementRoute = express.Router();

abonnementRoute.post("/create",abonnementValidation,validate, creatAbonnement);
abonnementRoute.get("/", getAbonnements);
abonnementRoute.get("/:id", getAbonnementId);
abonnementRoute.put("/:id", updateAbonnement);
abonnementRoute.delete("/:id", deleteAbonnement);
// abonnementRoute.get("/test", getAbonnementId);

export default abonnementRoute;
