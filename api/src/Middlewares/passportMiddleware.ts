import dotenv from "dotenv";
dotenv.config();
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, BACKEND_URL } = process.env;
import { DataBase } from "../db";
const { User } = DataBase.conn.models;
import bcrypt from 'bcrypt';
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { Strategy as LocalStrategy } from "passport-local";
import { UserAttributes } from "../Interfaces/interfaces";
import getUserByEmail from "../Controllers/Users/getUserByEmail";

passport.use(
  new GoogleStrategy(
    {
      clientID: `${GOOGLE_CLIENT_ID}`,
      clientSecret: `${GOOGLE_CLIENT_SECRET}`,
      callbackURL: `${BACKEND_URL}/auth/google/callback`,
    },
    async (accessToken, refreshToken, profile, done) => {
      const fullName = profile.displayName.split(" ");
          const name = fullName[0];
          const lastName = fullName[1];
          const username = fullName + profile.id;
      const user = {
        email: profile.emails && profile.emails[0].value,
        username,
        name,
        lastName,
        profilePhoto: profile.photos && profile.photos[0].value,
        googleId: profile.id,
      }
      return done(null, user)
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

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
    },
    async (username, password, done) => {
      try {
        const user: UserAttributes = await getUserByEmail(username);
        if(!user) {
          return done(null, false, {message: 'Usuario no encontrado'})
        };
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
          return done(null, false, {message: "Contraseña incorrecta"});
        };

        return done(null, user)
      } catch (error: any) {
        console.log(error.message);
        return done(error)
      }
    }
  ),
)

passport.serializeUser((user: any, done) => {
  done(null, user);
});
passport.deserializeUser((user: any, done) => {
  done(null, user);
});

export default passport;
