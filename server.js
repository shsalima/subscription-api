import express from "express";

import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/authRoutes.js";
import abonnementRoute from "./routes/abonnements.js";
// pour cette ligne kaykhali node.jjs t9ra file .env ot9der takhod les varaible dyalo obach n9ra nsta3mlo hado => process.env.PORT
dotenv.config();

const app = express();
// hada middleware kaykhali server yfhmt bli json liajaya mn client
app.use(express.json());
app.use("/api/auth", router);
app.use("/api/abonnements", abonnementRoute);
// process => est un object dyal node.js kay3tini des donnée 3la programme likhdam 
// jib value dyal MONGODB_URL
const MON_URL = process.env.MONGODB_URL;
const port = process.env.PORT || 3000;
app.listen(port, async () => {
  try {
    await mongoose.connect(MON_URL);
    console.log("connected to MongoDB ");
  } catch (err) {
    console.log(err);
  }
  console.log(`server running on port ${port}`);
});
