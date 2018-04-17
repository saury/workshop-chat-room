import { Express } from 'express';

import { controller as signInCtrl, route as signInRoute } from './sign-in';
import { controller as signUpCtrl, route as signUpRoute } from './sign-up';

export const mount = (app: Express) => {
    app.post(signUpRoute, signUpCtrl).post(signInRoute, signInCtrl);
};
