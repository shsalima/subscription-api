import express from "express";

import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/authRoutes.js";
import abonnementRoute from "./routes/abonnements.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/auth", router);
app.use("/api/abonnements", abonnementRoute);

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
