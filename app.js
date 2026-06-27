import express from "express";
import router from "./routes/authRoutes.js";
import abonnementRoute from "./routes/abonnements.js";

const app=express()

app.use(express.json())

app.use("/api/auth",router)
app.use("/api/abonnements",abonnementRoute)

export default app

