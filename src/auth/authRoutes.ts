import express from "express";
import passport from "./passport";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.sendStatus(200);
});

router.get("/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});

export default router;
