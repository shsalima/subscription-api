//  had bibloi hiya lighadi trsl req l api hiya f7alha f7al postmen
import request from "supertest";

import app from "../app.js";

import mongoose from "mongoose";

beforeAll(async () => {
  await mongoose.connect(
    "mongodb+srv://sahisalima77_db_user:7MgTED3FOp4lDP2x@cluster0.qeobhsr.mongodb.net/Abonnement-api",
  );
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Auth API ", () => {
  test("POST /api/auth/login - Login avec succés", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "salima1@gmail.com",
      passeword: "salima",
    });

    expect(response.status).toBe(200);
    expect(response.body.message).toEqual("login success");
    expect(response.body.token).toBeDefined();
  });

  test("POST /api/auth/register - register avec succés", async () => {
    const user = {
      name: Date.now().toString(),
      email: `${Date.now().toString()}@gmail.com`,
      passeword: "salima",
    };
    const response = await request(app).post("/api/auth/register").send(user);

    expect(response.status).toBe(201);
    expect(response.body._id).toBeDefined();
  });
});
