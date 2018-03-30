import { Express } from 'express';

import { authenticate } from 'modules/authentication';

import { controller as getController } from './get';
import { controller as postController } from './post';
import { route } from './route';

export const mount = (app: Express) => {
    app.get(route, authenticate(), getController);
    app.post(route, authenticate(), postController);
};
