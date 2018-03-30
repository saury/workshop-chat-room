import { Express } from 'express';
import * as passport from 'passport';
import { BasicStrategy } from 'passport-http';

import { authenticate } from './authenticate';

export const setup = (server: Express) => {
    server.use(passport.initialize());

    passport.use(
        new BasicStrategy((username, password, done) => {
            if (username === 'jin' && password === 'jin') {
                return done(null, {});
            } else {
                return done(null, false);
            }
        }),
    );

    // auth globally
    server.use(authenticate());
};
