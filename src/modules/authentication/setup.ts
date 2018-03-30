import { Express } from 'express';
import * as passport from 'passport';
import { BasicStrategy } from 'passport-http';

import { db, tables } from 'modules/db';

import { authenticate } from './authenticate';

export const setup = (server: Express) => {
    server.use(passport.initialize());

    passport.use(
        new BasicStrategy(async (username, password, done) => {
            const { Items: users } = await db.doc.scan({ TableName: tables.users }).promise();

            const findUser = users!.find((_user) => {
                return _user.username === username;
            });

            if (!findUser || password !== findUser.password) {
                return done(null, false);
            }

            return done(null, {});
        }),
    );

    // auth globally
    server.use(authenticate());
};
