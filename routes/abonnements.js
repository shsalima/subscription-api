import express from "express";

import {
  creatAbonnement,
  getAbonnements,
  getAbonnementId,
} from "../controllers/abonnementController.js";

const abonnementRoute = express.Router();

abonnementRoute.get("/", getAbonnements);
abonnementRoute.get("/:id", getAbonnementId);
abonnementRoute.get("/test", getAbonnementId);
abonnementRoute.post("/create", creatAbonnement);

export default abonnementRoute;
