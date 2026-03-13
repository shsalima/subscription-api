import express from "express";

import {
  creatAbonnement,
  getAbonnements,
  getAbonnementId,
} from "../controllers/abonnementController.js";

const abonnementRoute = express.Router();

abonnementRoute.post("/create", creatAbonnement);
abonnementRoute.get("/", getAbonnements);
abonnementRoute.get("/:id", getAbonnementId);
// abonnementRoute.get("/test", getAbonnementId);

export default abonnementRoute;
