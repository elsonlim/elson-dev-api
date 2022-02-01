import passport from "passport";
import PassportGoogle from "passport-google-oauth20";
import User, { UserInterface } from "./UserModel";

const {
  GOOGLE_CLIENT_ID: clientID,
  GOOGLE_CLIENT_SECRET: clientSecret,
  GOOGLE_CALLBACK_URL: callbackURL,
} = process.env;

passport.serializeUser((user: UserInterface, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new PassportGoogle.Strategy(
    { clientID, clientSecret, callbackURL },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({ googleId: profile.id });
      if (!user) {
        new User({ googleId: profile.id })
          .save()
          .then((newUser) => done(null, newUser));
      } else {
        done(null, user);
      }
    }
  )
);

export default passport;
