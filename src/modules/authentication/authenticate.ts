import * as passport from 'passport';

export const authenticate = () => {
    return passport.authenticate('basic', { session: false });
};
