import dotenv from "dotenv";
dotenv.config();
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, BACKEND_URL } = process.env;
import { DataBase } from "../db";
const { User } = DataBase.conn.models;
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";

passport.use(
  new GoogleStrategy(
    {
      clientID: `${GOOGLE_CLIENT_ID}`,
      clientSecret: `${GOOGLE_CLIENT_SECRET}`,
      callbackURL: `${BACKEND_URL}/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ where: { googleId: profile.id } });
        if (user) {
          return done(null, user);
        } else {
          const fullName = profile.displayName.split(" ");
          const name = fullName[0];
          const lastName = fullName[1];
          const username = fullName + profile.id;
          const newUser = {
            googleId: profile.id,
            name,
            lastName,
            username,
          };
          user = await User.create(newUser);
          return done(null, user);
        }
      } catch (error) {
        console.error(error);
        if (typeof error === "string" || error instanceof Error) {
          return done(error);
        }
      }
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: "Esta variable debe ser de entorno",
      clientSecret: "Esta variable debe ser de entorno",
      callbackURL: "Esta variable debe ser de entorno",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        let user = await User.findOne({ where: { facebookId: profile.id } });
        if (user) {
          return done(null, user);
        } else {
          const fullName = profile.displayName.split(" ");
          const name = fullName[0];
          const lastName = fullName[1];
          const username = fullName + profile.id;
          const newUser = {
            facebookId: profile.id,
            name,
            lastName,
            username,
          };
          user = await User.create(newUser);
          return done(null, user);
        }
      } catch (error) {
        console.error(error);
        if (typeof error === "string" || error instanceof Error) {
          return done(error);
        }
      }
    }
  )
);

passport.serializeUser(async (user, done) => {
  try {
    done(null, user);
  } catch (error) {
    done(error);
  }
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await User.findOne({ where: { id: id } });
    if (user) {
      done(null, user);
    } else {
      done(null, null);
    }
  } catch (error) {
    done(error);
  }
});
