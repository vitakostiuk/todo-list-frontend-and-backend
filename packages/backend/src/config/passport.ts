import passport from 'passport';
import { Strategy } from 'passport-http-bearer';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';
import { IUser } from '../types/user.type';

type JwtDataType = {
  payload: {
    email: string;
    id: string;
  };
  iat: number;
  exp: number;
};

const { JWT_SECRET } = process.env;

export const jwtStrategy = () => {
  passport.use(
    new Strategy((token, done) => {
      const jwtData: JwtDataType = jwt.verify(token, JWT_SECRET) as JwtDataType;

      User.findById(jwtData.payload.id, (err: any, user: IUser) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        return done(null, user, { scope: 'all' });
      });
    })
  );
};
