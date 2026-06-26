// tests/auth.test.js

import request from "supertest";
import mongoose from "mongoose";
import app from "../app.js";

beforeAll(async () => {
  await mongoose.connect(
    "mongodb+srv://sahisalima77_db_user:7MgTED3FOp4lDP2x@cluster0.qeobhsr.mongodb.net/Abonnement-api",
  );
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("GET /subscriptions", () => {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhM2VhMDk3YzA0ZjllM2QyNTlhZTgyMiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzgyNDkwODA3LCJleHAiOjE3ODI1NzcyMDd9.rMzGby7BoLtzvQmVqdLJv_Dg2Aphx7fsuPvK7RyM2xY";

  test("GET Subscriptions ", async () => {
    const response = await request(app)
      .get("/api/abonnements")
      .set("Authorization", `Bearer ${token}`);

    // Code HTTP
    expect(response.status).toBe(200);

    // Structure de la réponse

    expect(response.body).toHaveProperty(
      "message",
      "Liste des abonnements de l'utilisateur",
    );
  });
});
