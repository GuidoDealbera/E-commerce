import dotenv from 'dotenv';
dotenv.config();
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;
import { DataBase } from '../db';
const {User} = DataBase.conn.models;
import passport from "passport";
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';

passport.use(
  new GoogleStrategy(
    {
      clientID: `${GOOGLE_CLIENT_ID}`,
      clientSecret: `${GOOGLE_CLIENT_SECRET}`,
      callbackURL: "http://localhost:3001/auth/google/callback",
    },
    async function (
      accessToken: string,
      refreshToken: string,
      profile: any,
      done: any
    ) {
      try {
        let user = await User.findOne({where:{ googleId: profile.id }});
        if(user) {
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
        console.log(error);
        return error;
      }
    }
  )
);
