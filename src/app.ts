import express from "express";
import authRoutes from "./auth/authRoutes";

const app = express();

app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("healthy");
});

export default app;
