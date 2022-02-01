import express from "express";
import cookieSession from "cookie-session";
import passport from "passport";
import authRoutes from "./auth/authRoutes";

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.COOKIE_KEY],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

app.get("/user", (req, res) => {
  res.send(req.user);
});

app.get("/", (req, res) => {
  res.send("healthy");
});

export default app;
