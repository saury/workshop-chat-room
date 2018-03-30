import { Express } from 'express';
import { db, tables } from 'modules/db';
import { allFromDb } from 'modules/db/users';
import * as passport from 'passport';
import { BasicStrategy } from 'passport-http';

import { authenticate } from './authenticate';

export const setup = (server: Express) => {
    server.use(passport.initialize());

    passport.use(
        new BasicStrategy(async (username, password, done) => {
            const users = await allFromDb();

            const findUser = users!.find((_user) => {
                return _user.username === username;
            });

            if (!findUser || password !== findUser.password) {
                return done(null, false);
            }

            return done(null, findUser);
        }),
    );

    // auth globally
    server.use(authenticate());
};
