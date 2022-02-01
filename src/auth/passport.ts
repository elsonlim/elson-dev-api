import passport from "passport";
import PassportGoogle from "passport-google-oauth20";

const {
  GOOGLE_CLIENT_ID: clientID,
  GOOGLE_CLIENT_SECRET: clientSecret,
  GOOGLE_CALLBACK_URL: callbackURL,
} = process.env;

passport.use(
  new PassportGoogle.Strategy(
    { clientID, clientSecret, callbackURL },
    (accessToken, refreshToken, profile, done) => {
      // tslint:disable:no-console
      console.log("\naccessToken\n", accessToken);
      console.log("\nrefreshToken\n", refreshToken);
      console.log("\nprofile\n", profile);
      console.log("\ndone\n", done);
    }
  )
);

export default passport;
